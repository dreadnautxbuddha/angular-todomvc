import { v4 as uuidv4 } from 'uuid';
import { createReducer, on } from '@ngrx/store';

import { Todo } from '../../models/todo';
import {
  CreateTodoAction,
  DeleteTodoAction,
  UpdateTodoAction,
  MassDeleteTodoAction,
  MassToggleTodoCompletionAction,
 } from '../../actions/todo.actions';

export const initialState = [];
export const TodoReducer = createReducer<Todo[]>(
  initialState,
  on(CreateTodoAction, (state, todo) => {
    if ((todo.description || '').trim().length === 0) {
      // If the user has submitted an empty todo item, do nothing. We won't save this
      return state;
    } else if (todo.hasOwnProperty('id')) {
      // The id that was supplied already exists. We won't allow this
      return state.map(_todo => _todo.id).includes(todo.id)
        ? state
        : state.concat(todo as Todo);
    }

    // When there's no id provided, we'll provide our own.
    return state.concat({ ...todo, id: uuidv4() });
  }),
  on(UpdateTodoAction, (state, { id, description, isCompleted, isEditing }) => {
    return state.map(
      // We're only going to update the todo item that matches the id that we have
      // received. Otherwise, we'll update nothing.
      todo => todo.id === id ? { id, description, isCompleted, isEditing } : todo
    );
  }),
  on(MassDeleteTodoAction, (state, { todos }) => {
    let ids = todos.map(todo => todo.id);

    return state.filter(todo => ids.includes(todo.id) === false);
  }),
  on(DeleteTodoAction, (state, existingTodo) => {
    return state.filter(todo => todo.id !== existingTodo.id);
  }),
  on(MassToggleTodoCompletionAction, (state, { isCompleted }) => {
    return state.map(todo => ({ ...todo, isCompleted }));
  }),
);
