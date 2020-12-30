import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { ExistingTodo } from '../../store/models/todo';
import { AppState } from '../../store/models/app-state';
import { allTodos, completeTodos, incompleteTodos } from '../../store/selectors/todo/todo.selector';
import { MassDeleteTodoAction, MassToggleTodoCompletionAction } from '../../store/actions/todo.actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  /**
   * A list of the todo-items that the user has provided.
   *
   * @type {Observable<ExistingTodo[]>}
   */
  todos$: Observable<ExistingTodo[]> = this.store.pipe(
    select(allTodos),
  );

  /**
   * A list of completed todo-items
   *
   * @type {Observable<ExistingTodo[]>}
   */
  completedTodos$: Observable<ExistingTodo[]> = this.store.pipe(
    select(completeTodos),
  );

  /**
   * A list of incomplete todo-items
   *
   * @type {Observable<ExistingTodo[]>}
   */
  incompleteTodos$: Observable<ExistingTodo[]> = this.store.pipe(
    select(incompleteTodos),
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
   * @param {ExistingTodo[]} todos
   *
   * @returns {void}
   */
  delete(todos: ExistingTodo[]): void {
    this.store.dispatch(MassDeleteTodoAction({ todos }));
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
