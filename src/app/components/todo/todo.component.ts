import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Component, HostListener, Input, OnInit } from '@angular/core';

import { AppState } from '../../store/models/app-state';
import { ExistingTodo, Todo } from '../../store/models/todo';
import { DeleteTodoAction, UpdateTodoAction } from '../../store/actions/todo.actions';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  /**
   * The todo object containing its metadata
   *
   * @type {Todo}
   */
  @Input('metadata') todo: ExistingTodo;

  /**
   * The value that the user has set to replace the description of the current todo.
   *
   * @type {String}
   */
  todoInput: string;

  /**
   * Determines whether a todo item has already been completed.
   *
   * @type {Boolean}
   */
  isCompleted: boolean;

  /**
   * Determines whether a todo is being edited or not.
   *
   * @type {BehaviorSubject<boolean>}
   */
  protected _isEditing: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isEditing: Observable<boolean> = this._isEditing.asObservable();

  constructor(protected store: Store<AppState>) { }

  ngOnInit(): void {
    this.todoInput = this.todo.description;
    this.isCompleted = this.todo.isCompleted;
  }

  /**
   * Gets triggered when a todo item gets clicked or tapped twice. The user will then
   * be able to edit the todo item.
   *
   * @param {Todo} todo
   *
   * @returns {void}
   */
  @HostListener('dblclick', ['this.todo'])
  onDoubleClick(todo: Todo): void {
    this._isEditing.next(true);
  }

  /**
   * Gets triggered when a user has finished editing a todo item.
   *
   * @param {Todo} todo
   *
   * @returns {void}
   */
  @HostListener('keyup.enter', ['this.todo'])
  onEnter(todo: ExistingTodo): void {
    this.store.dispatch(UpdateTodoAction({...todo, description: this.todoInput}));
    this._isEditing.next(false);
  }

  /**
   * Marks the todo as either completed or not-completed.
   *
   * @param {Boolean} isCompleted
   *
   * @returns {void}
   */
  toggleCompletion(isCompleted): void {
    this.store.dispatch(
      UpdateTodoAction({ ...this.todo, isCompleted: isCompleted })
    );
  }

  /**
   * Delete the todo, and remove it from the list.
   *
   * @returns {void}
   */
  delete(): void {
    this.store.dispatch(DeleteTodoAction(this.todo));
  }
}
