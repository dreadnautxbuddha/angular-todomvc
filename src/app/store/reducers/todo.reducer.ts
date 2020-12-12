import { v4 as uuidv4 } from 'uuid';
import { createReducer, on } from '@ngrx/store';

import { Todo } from '../models/todo';
import { CreateTodoAction, DeleteTodoAction, MassDeleteTodoAction, MassToggleTodoCompletionAction, UpdateTodoAction } from '../actions/todo.actions';

export const TodoReducer = createReducer<Todo[]>(
  [],
  on(CreateTodoAction, (state, todo) => {
    if ((todo.description || '').trim().length === 0) {
      // If the user has submitted an empty todo item, do nothing. We won't save this
      return state;
    }

    return todo.hasOwnProperty('id')
      ? state.concat(todo)
      // When there's no id provided, we'll provide our own.
      : state.concat({ ...todo, id: uuidv4() });
  }),
  on(UpdateTodoAction, (state, updatedTodo) => {
    return state.map(
      todo => todo.id === updatedTodo.id ? { id: todo.id, ...updatedTodo } : todo
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
