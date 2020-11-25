import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { Todo } from '../../store/models/todo';
import { AppState } from '../../store/models/app-state';
import { CreateTodoAction } from '../../store/actions/todo.actions';

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

  constructor(protected store: Store<AppState>) { }

  ngOnInit(): void {
  }
}
