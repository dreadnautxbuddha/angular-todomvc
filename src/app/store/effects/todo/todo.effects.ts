import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CreateTodoAction } from '../../actions/todo.actions';
import { UpdateInputAction } from '../../actions/input.action';

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

  constructor(protected actions$: Actions) {}
}
