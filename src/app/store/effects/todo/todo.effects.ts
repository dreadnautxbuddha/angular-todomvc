import { EMPTY, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UpdateInputAction } from '../../actions/input.action';
import { CreateTodoAction, DeleteTodoAction, UpdateTodoAction } from '../../actions/todo.actions';

@Injectable()
export class TodoEffects {

  /**
   * Clears the todo input when a todo item has been created.
   *
   * @type {Observable}
   */
  clearInputOnTodoCreate$ = createEffect(
    () => this.actions$.pipe(
      ofType(CreateTodoAction),
      switchMap(action => of(UpdateInputAction({ description: null }))),
    )
  );

  deleteTodoWhenDescriptionIsEmpty$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateTodoAction),
      switchMap(
        action => (action.description || '').trim().length === 0
          ? of(DeleteTodoAction(action))
          : EMPTY
      )
    )
  );

  constructor(protected actions$: Actions) {}
}
