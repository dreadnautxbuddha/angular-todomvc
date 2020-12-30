import { createSelector, select } from '@ngrx/store';

import { Todo } from '../../models/todo';
import { Filter } from '../../models/filter';
import { AppState } from '../../models/app-state';
import { filter } from '../selectors/filter.selector';

export let allTodos = createSelector(
  (state: AppState) => state.todos,
  todos => todos,
);
export let completeTodos = createSelector(
  allTodos,
  todos => todos.filter(todo => todo.isCompleted),
);
export let incompleteTodos = createSelector(
  allTodos,
  todos => todos.filter(todo => todo.isCompleted === false),
);
export let filteredTodos = createSelector(
  allTodos,
  completeTodos,
  incompleteTodos,
  filter,
  (_all: Todo[], _complete: Todo[], _incomplete: Todo[], { completion }: Filter) => {
    switch (completion) {
      case 'complete':
        return _complete;
      case 'incomplete':
        return _incomplete;
      default:
        return _all;
    }
  }
);
