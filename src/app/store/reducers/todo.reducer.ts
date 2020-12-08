import { v4 as uuidv4 } from 'uuid';
import { createReducer, on } from '@ngrx/store';

import { Todo } from '../models/todo';
import { CreateTodoAction, UpdateTodoAction } from '../actions/todo.actions';

export const TodoReducer = createReducer<Todo[]>(
  [],
  on(CreateTodoAction, (state, todo) => {
    return todo.hasOwnProperty('id')
      ? state.concat(todo)
      // When there's no id provided, we'll provide our own.
      : state.concat({ description: todo.description, id: uuidv4() });
  }),
  on(UpdateTodoAction, (state, existingTodo) => {
    return state.map(
      todo => todo.id === existingTodo.id
        ? { ...todo, description: existingTodo.description }
        : todo
    );
  })
);
