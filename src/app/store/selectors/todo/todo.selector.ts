import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/app-state';

const all = (state: AppState) => state.todos;

export const allTodos = createSelector(all, todos => todos);
export const completeTodos = createSelector(
  all, todos => todos.filter(todo => todo.isCompleted)
);
export const incompleteTodos = createSelector(
  all, todos => todos.filter(todo => todo.isCompleted === false)
);
