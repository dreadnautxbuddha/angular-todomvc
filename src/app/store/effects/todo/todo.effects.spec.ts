import { empty, Observable, of } from 'rxjs';
import { Action, select } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TodoEffects } from './todo.effects';
import { AppState } from '../../models/app-state';
import { allTodos } from '../../selectors/todo/todo.selector';
import { UpdateInputAction } from '../../actions/input.action';
import { CreateTodoAction, UpdateTodoAction } from '../../actions/todo.actions';
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
        expect(state).toEqual({ description: null, type: '[INPUT] Update' });

        done();
      });
    });
  });

  describe('On UpdateTodoAction', () => {
    describe('when todo\'s description is cleared ', () => {
      let emptyDescriptions = [
        '',
        null,
      ];

      emptyDescriptions.forEach(emptyDescription => {
        it(`should be deleted when description is ${emptyDescription}`, (done) => {
          let todo = {
            id: 'b50e735f-d38a-4fe8-96f7-446ba8883342',
            description: 'A todo item',
            isCompleted: false,
            isEditing: false,
          };
          let emptyTodo = { ...todo, description: emptyDescription };

          // Lookie here! The user has cleared the todo item's description. Bad
          // cheetah!!
          actions$ = of(UpdateTodoAction(emptyTodo));

          effects.deleteTodoWhenDescriptionIsEmpty$.subscribe(state => {
            expect(state).toEqual({ ...emptyTodo, type: '[TODO] Delete' });

            done();
          });
        });
      })
    });
  });
});
