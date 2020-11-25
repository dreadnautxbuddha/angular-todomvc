import { createReducer, on } from '@ngrx/store';

import { Todo } from '../models/todo';
import { CreateTodoAction } from '../actions/todo.actions';

export const TodoReducer = createReducer<Todo[]>(
  [],
  on(CreateTodoAction, (state, todo) => state.concat(todo)),
);
