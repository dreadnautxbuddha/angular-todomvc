import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { AppState } from '../../store/models/app-state';
import { ExistingTodo, Todo } from '../../store/models/todo';
import { MassDeleteTodoAction } from '../../store/actions/todo.actions';

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
  todos$: Observable<Todo[]> = this.store.pipe(select(store => store.todos));

  /**
   * A list of completed todo-items
   *
   * @type {Observable<Todo[]>}
   */
  completedTodos$: Observable<Todo[]> = this
    .todos$
    .pipe(
      map(todos => todos.filter(todo => todo.isCompleted))
    );

  /**
   * A list of incomplete todo-items
   *
   * @type {Observable<Todo[]>}
   */
  incompleteTodos$: Observable<Todo[]> = this
    .todos$
    .pipe(
      map(todos => todos.filter(todo => todo.isCompleted !== true))
    );

  /**
   * An observable that emits a boolean value indicating whether the "items left"
   * counter should be displayed or not.
   *
   * @type {Observable<boolean>}
   */
  shouldShowItemsLeft$: Observable<boolean> = this
      .todos$
      .pipe(
        map(todos => todos.length > 0),
        // By adding distinctUntilChanged(), we ensure that a boolean value is only
        // emmitted when needed. Once when there's atleast one (1) todo item, and
        // once when there's no todo item. Otherwise, this todo item will emit a
        // value everytime a todo item is added or removed.
        distinctUntilChanged(),
      );

  constructor(protected store: Store<AppState>) { }

  ngOnInit(): void {
  }

  /**
   * Deletes the completed todo items fron the todo-list.
   *
   * @param {ExistingTodo[]} todos
   *
   * @returns {void}
   */
  delete(todos: ExistingTodo[]): void {
    this.store.dispatch(MassDeleteTodoAction({ todos }));
  }
}
