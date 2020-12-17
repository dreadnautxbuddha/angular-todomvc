import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

import { ExistingTodo } from '../../store/models/todo';
import { AppState } from '../../store/models/app-state';
import { DeleteTodoAction, UpdateTodoAction } from '../../store/actions/todo/todo.actions';

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

  constructor(protected store: Store<AppState>) { }

  ngOnInit(): void {
    this.todoInput = this.todo.description;
    this.isCompleted = this.todo.isCompleted;
  }

  /**
   * Gets triggered when a todo item gets clicked or tapped twice. The user will then
   * be able to edit the todo item.
   *
   * @returns {void}
   */
  edit(): void {
    this.store.dispatch(UpdateTodoAction({ ...this.todo, isEditing: true }))
  }

  /**
   * Gets triggered when a user has finished editing a todo item.
   *
   * @returns {void}
   */
  update(): void {
    this.store.dispatch(
      UpdateTodoAction({
        ...this.todo,
        description: this.todoInput,
        isEditing: false
       })
    );
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
