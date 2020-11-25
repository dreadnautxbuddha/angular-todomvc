import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { Todo } from '../../store/models/todo';
import { Input } from '../../store/models/input';
import { AppState } from '../../store/models/app-state';
import { CreateTodoAction } from '../../store/actions/todo.actions';
import { WriteInputAction } from 'src/app/store/actions/input.action';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  /**
   * An input stream.
   *
   * @type {Observable<Input>}
   */
  protected input$: Observable<Input> = this
    .store
    .pipe(
      select(store => store.input),
    );

  constructor(protected store: Store<AppState>) { }

  ngOnInit(): void {
  }

  /**
   * Writes the input to the store.
   *
   * @todo Optimize the change capturing. Maybe use a model that has an observable
   * then do the same logic but via subscriptions?
   *
   * @param e
   *
   * @returns {void}
   */
  write(e): void {
    this.store.dispatch(WriteInputAction({ description: e.target.value }));
  }

  /**
   * Creates a new todo item
   *
   * @param {Todo} todo
   *
   * @returns {void}
   */
  create(todo: Todo): void {
    this.store.dispatch(CreateTodoAction(todo));
  }
}
