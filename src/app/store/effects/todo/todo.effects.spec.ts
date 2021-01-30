import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TodoEffects } from './todo.effects';
import { AppState } from '../../models/app-state';
import { CreateTodoAction } from '../../actions/todo.actions';
import { UpdateInputAction } from '../../actions/input.action';
import { initialState as initialTodoState } from '../../../store/reducers/todo/todo.reducer';
import { initialState as initialInputState } from '../../../store/reducers/input/input.reducer';

describe('TODO Effects', () => {
  let actions$: Observable<Action>;
  let effects: TodoEffects;
  let store: MockStore<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: {
            todos: initialTodoState,
            input: initialInputState,
          }
        }),
      ],
    });
    effects = TestBed.inject(TodoEffects);
    store = TestBed.inject(MockStore);
  });

  describe('On CreateTodoAction', () => {
    it('should clear the input by setting its value to null', (done) => {
      store.dispatch(UpdateInputAction({ description: 'an unfinished todo ite' }));

      actions$ = of(CreateTodoAction({
        description: 'an unfinished todo item',
        isCompleted: false,
        isEditing: false,
      }));

      effects.clearInputOnTodoCreate$.subscribe(state => {
        console.log(state)
        expect(state).toEqual({ description: null, type: '[INPUT] Update' });

        done();
      });
    });
  });
});
