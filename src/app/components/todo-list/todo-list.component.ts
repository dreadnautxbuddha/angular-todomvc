import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { Todo } from '../../store/models/todo';
import { AppState } from '../../store/models/app-state';
import { DisplayableFilter, Filter } from '../../store/models/filter';
import { UpdateFilterAction } from '../../store/actions/filter.actions';
import { filter } from '../../store/selectors/selectors/filter.selector';
import { MassDeleteTodoAction, MassToggleTodoCompletionAction } from '../../store/actions/todo.actions';
import { allTodos, completeTodos, filteredTodos, incompleteTodos } from '../../store/selectors/todo/todo.selector';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  /**
   * A list of the todo-items that the user has provided.
   *
   * @type {Observable<Todo[]>}
   */
  todos$: Observable<Todo[]> = this.store.pipe(
    select(allTodos),
  );

  /**
   * A list of completed todo-items
   *
   * @type {Observable<Todo[]>}
   */
  completedTodos$: Observable<Todo[]> = this.store.pipe(
    select(completeTodos),
  );

  /**
   * A list of incomplete todo-items
   *
   * @type {Observable<Todo[]>}
   */
  incompleteTodos$: Observable<Todo[]> = this.store.pipe(
    select(incompleteTodos),
  );

  /**
   * A static array of filters that users can use in filtering the todo-items that
   * are displayed
   *
   * @type {DisplayableFilter[]}
   */
  displayedFilters$: Observable<DisplayableFilter[]> = this.store
    .pipe(
      select(filter),
      map(({ completion }) => {
        return [
          { label: 'All', completion: null },
          { label: 'Active', completion: 'incomplete' },
          { label: 'Completed', completion: 'complete' },
        ].map(
          (filter): DisplayableFilter => {
            return {
              ...filter,
              isFilterActive: filter.completion === completion
            } as DisplayableFilter;
          }
        );
      })
    );

  /**
   * Returns a filtered set of todo-items. When "Active" is selected, this will only
   * return todo items that are not yet completed. When "Completed" is selected, this
   * will return todo items that are already marked as completed. When no filters are
   * set (or "All"), everything will be returned.
   *
   * @type {Observable<Todo[]>}
   */
  filteredTodos$: Observable<Todo[]> = this.store.pipe(
    select(filteredTodos),
  );

  /**
   * An observable that emits a boolean value indicating whether there are todo-items
   * on the list including both completed and non-completed items.
   *
   * @type {Observable<boolean>}
   */
  hasTodoItems$: Observable<boolean> = this.store
    .pipe(
      select(allTodos),
      map(todos => todos.length > 0),
      // By adding distinctUntilChanged(), we ensure that a boolean value is only
      // emmitted when needed. Once when there's atleast one (1) todo item, and once
      // when there's no todo item. Otherwise, this todo item will emit a value
      // everytime a todo item is added or removed.
      distinctUntilChanged(),
    );

  constructor(protected store: Store<AppState>) { }

  ngOnInit(): void {
  }

  /**
   * Deletes the completed todo items fron the todo-list.
   *
   * @param {Todo[]} todos
   *
   * @returns {void}
   */
  delete(todos: Todo[]): void {
    this.store.dispatch(MassDeleteTodoAction({ todos }));
  }

  /**
   * Filters the displayed todo-items.
   *
   * @param {Filter[K]} completion
   *
   * @returns {void}
   */
  filter<K extends keyof Filter>(completion: Filter[K]): void {
    this.store.dispatch(UpdateFilterAction({ completion }));
  }

  /**
   * Marks all todos as either completed or not-completed.
   *
   * @param {Boolean} isCompleted
   *
   * @returns {void}
   */
  toggleCompletion(isCompleted): void {
    this.store.dispatch(MassToggleTodoCompletionAction({ isCompleted }));
  }
}
