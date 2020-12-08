import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

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
    .store
    .pipe(
      select(store => store.todos),
      map(todos => todos.filter(todo => todo.isCompleted))
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
