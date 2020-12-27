import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { findByCss } from 'testing/fixtures/dom-crawler';
import { TodoInputComponent } from './todo-input.component';
import { input } from '../../store/selectors/input/input.selector';
import { WriteInputAction } from '../../store/actions/input.action';
import { CreateTodoAction } from '../../store/actions/todo/todo.actions';
import { initialState as initialInputState, TodoReducer } from '../../store/reducers/todo/todo.reducer';
import { initialState as initialTodoState, InputReducer } from '../../store/reducers/input/input.reducer';

describe('TodoInputComponent', () => {
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        StoreModule.forRoot({
          todos: TodoReducer,
          input: InputReducer,
        }),
      ],
      declarations: [
        TodoInputComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            todos: initialTodoState,
            input: initialInputState,
          }
        }),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    fixture.detectChanges();
  });

  describe('todo input', () => {
    beforeEach(inject([MockStore], (store: MockStore) => {
      input.setResult({
        description: 'An unfinished todo inpu',
      });

      store.refreshState();
      fixture.detectChanges();
    }));

    it('uses the current input value in the store as its value', () => {
      fixture.whenStable().then(() => {
        const _input = findByCss(fixture, 'input');

        const content = _input.nativeElement.value;

        expect(content).toEqual('An unfinished todo inpu');
      });
    });

    it('asks what needs to be done in its placeholder', () => {
      const _input = findByCss(fixture, 'input');

      const placeholder = _input.nativeElement.placeholder;

      expect(placeholder).toEqual('What needs to be done?');
    });

    it('has a .new-todo class', () => {
      const _input = findByCss(fixture, 'input').nativeElement;

      expect(_input).toHaveClass('new-todo');
    });

    describe('when keys are pressed', () => {
      it(
        'should dispatch WriteInputAction',
        inject([MockStore], (store: MockStore) => {
          const _input = findByCss(fixture, 'input');
          const _store = spyOn(store, 'dispatch').and.callThrough();

          _input
            .triggerEventHandler('keyup', null);

          expect(_store).toHaveBeenCalledWith(
            WriteInputAction({ description: 'An unfinished todo inpu' })
          );
        })
      );
    });

    describe('when enter key is pressed', () => {
      it(
        'should dispatch CreateTodoAction',
        inject([MockStore], (store: MockStore) => {
          const _input = findByCss(fixture, 'input');
          const _store = spyOn(store, 'dispatch').and.callThrough();

          _input
            .triggerEventHandler('keyup.enter', null);

          expect(_store).toHaveBeenCalledWith(
            CreateTodoAction({
              description: 'An unfinished todo inpu',
              isCompleted: false,
              isEditing: false,
            })
          );
        })
      );

      it(
        'should dispatch WriteInputAction that deletes the current input',
        inject([MockStore], (store: MockStore) => {
          const _input = findByCss(fixture, 'input');
          const _store = spyOn(store, 'dispatch').and.callThrough();

          _input
            .triggerEventHandler('keyup.enter', null);

          expect(_store).toHaveBeenCalledWith(
            WriteInputAction({ description: null })
          );
        })
      );
    });
  });
});
