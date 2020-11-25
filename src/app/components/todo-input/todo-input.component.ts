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
   * The current value of the todo-input.
   *
   * @type {String}
   */
  todoInput: string;

  /**
   * An input stream.
   *
   * @type {Observable<Input>}
   */
  input$: Observable<Input> = this
    .store
    .pipe(
      select(store => store.input),
      // Similar to the TodoInputComponent::write method, we keep the synchronization
      // between the model and the store by explicitly using its value on the model.
      tap(input => this.todoInput = input.description),
    );

  constructor(protected store: Store<AppState>) { }

  ngOnInit(): void {
  }

  /**
   * Writes the input to the store. Instead of injecting the value to be passed to
   * the store, we're specifically using the value of the input's model. This ensures
   * that the model and the store is always in sync.
   *
   * @returns {void}
   */
  write(): void {
    this.store.dispatch(WriteInputAction({ description: this.todoInput }));
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
