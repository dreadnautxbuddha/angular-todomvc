import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { findAllByCss, findByCss } from 'testing/fixtures/dom-crawler';
import { AutofocusDirective } from '../../directives/autofocus/autofocus.directive';
import { DeleteTodoAction, UpdateTodoAction } from '../../store/actions/todo.actions';
import { initialState as initialTodoState, TodoReducer } from '../../store/reducers/todo/todo.reducer';
import { initialState as initialInputState, InputReducer } from '../../store/reducers/input/input.reducer';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({
          todos: TodoReducer,
          input: InputReducer,
        }),
      ],
      declarations: [
        TodoComponent,
        AutofocusDirective,
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
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;

    component.todo = {
      id: '7f3c76b2-47b5-4dc6-8219-9a146ab170a5',
      description: 'My Todo Item',
      isCompleted: false,
      isEditing: false,
    };

    fixture.detectChanges();
  });

  describe('Editing input', () => {
    describe('when todo.isEditing is true', () => {
      beforeEach(() => {
        component.todo.isEditing = true;
        fixture.detectChanges();
      });

      it('should focus immediately on input', () => {
        let input = findByCss(fixture, 'input');

        let focusedInput = findByCss(fixture, ':focus');

        expect(input.nativeElement).toBe(focusedInput.nativeElement);
      });

      it('should be displayed', () => {
        const input = findAllByCss(fixture, '.edit');

        expect(input).toHaveSize(1);
      });

      describe('when enter key is pressed', () => {
        it(
          'should dispatch UpdateTodoAction',
          inject([MockStore], (store: MockStore) => {
            const input = findByCss(fixture, '.edit');
            const _store = spyOn(store, 'dispatch').and.callThrough();

            component.todoInput = 'My New Todo Description';
            input.triggerEventHandler('keyup.enter', null);

            expect(_store)
              .toHaveBeenCalledWith(
                UpdateTodoAction({
                  id: '7f3c76b2-47b5-4dc6-8219-9a146ab170a5',
                  description: 'My New Todo Description',
                  isCompleted: false,
                  isEditing: false,
                })
              );
          })
        );
      });

      describe('when escape key is pressed', () => {
        it(
          'should cancel all changes to todo',
          inject([MockStore], (store: MockStore) => {
            const input = findByCss(fixture, '.edit');
            const _store = spyOn(store, 'dispatch').and.callThrough();

            component.todoInput = 'My New Todo Description';
            input.triggerEventHandler('keyup.escape', null);

            expect(_store)
              .toHaveBeenCalledWith(
                UpdateTodoAction({ ...component.todo, isEditing: false })
              );
          })
        );
      });
    });

    describe('when todo.isEditing is false', () => {
      beforeEach(() => {
        component.todo.isEditing = false;
        fixture.detectChanges();
      });

      it('input should be hidden', () => {
        const input = findAllByCss(fixture, '.edit');

        expect(input).toHaveSize(0);
      });
    });
  });

  describe('Todo info display', () => {
    describe('when todo.isEditing is true', () => {
      beforeEach(() => {
        component.todo.isEditing = true;
        fixture.detectChanges();
      });

      it('input should be hidden', () => {
        const input = findAllByCss(fixture, '.view');

        expect(input).toHaveSize(0);
      });
    });

    describe('when todo.isEditing is false', () => {
      beforeEach(() => {
        component.todo.isEditing = false;
        fixture.detectChanges();
      });

      it('should be displayed', () => {
        const todo = findAllByCss(fixture, '.view');

        expect(todo).toHaveSize(1);
      });
    });

    describe('when clicked twice', () => {
      it(
        'should mark todo as being edited',
        inject([MockStore], (store: MockStore) => {
          const todo = findByCss(fixture, '.view');
          const _store = spyOn(store, 'dispatch').and.callThrough();

          todo.triggerEventHandler('dblclick', null);

          expect(_store)
            .toHaveBeenCalledWith(
              UpdateTodoAction({
                id: '7f3c76b2-47b5-4dc6-8219-9a146ab170a5',
                description: 'My Todo Item',
                isCompleted: false,
                // Only the `isEditing` attribute of the todo item is being updated
                // in this case because it should only be marked as being edited.
                isEditing: true,
              })
            );
        })
      );
    });

    describe('Completion Checkbox', () => {
      beforeEach(() => {
        component.todo.isEditing = false;
        fixture.detectChanges();
      });

      it('should have a class of .toggle', () => {
        const checkbox = findByCss(fixture, '.view input');

        expect(checkbox.nativeElement).toHaveClass('toggle');
      });

      describe('when checked', () => {
        it(
          'should mark todo item as completed',
          inject([MockStore], (store: MockStore) => {
            const checkbox = findByCss(fixture, '.view input');
            const _store = spyOn(store, 'dispatch').and.callThrough();

            checkbox.triggerEventHandler(
              'change',
              { target: { checked: true } }
            );

            expect(_store)
              .toHaveBeenCalledWith(
                UpdateTodoAction({
                  id: '7f3c76b2-47b5-4dc6-8219-9a146ab170a5',
                  description: 'My Todo Item',
                  // Only the `isCompleted` attribute of the todo item is being
                  // updated in this case because it should only be marked as
                  // complete
                  isCompleted: true,
                  isEditing: false,
                })
              );
          })
        );
      });

      describe('when unchecked', () => {
        it(
          'should mark todo item as incomplete',
          inject([MockStore], (store: MockStore) => {
            const checkbox = findByCss(fixture, '.view input');
            const _store = spyOn(store, 'dispatch').and.callThrough();

            checkbox.triggerEventHandler(
              'change',
              { target: { checked: false } }
            );

            expect(_store)
              .toHaveBeenCalledWith(
                UpdateTodoAction({
                  id: '7f3c76b2-47b5-4dc6-8219-9a146ab170a5',
                  description: 'My Todo Item',
                  // Only the `isCompleted` attribute of the todo item is being
                  // updated in this case because it should only be marked as
                  // incomplete
                  isCompleted: false,
                  isEditing: false,
                })
              );
          })
        );
      });
    });

    describe('label', () => {
      it('should show todo description', () => {
        const description = findByCss(fixture, '.view label');

        const content = description.nativeElement.textContent;

        expect(content).toEqual('My Todo Item');
      });
    });

    describe('X button', () => {
      it('should have a class of .destroy', () => {
        const deleteButton = findByCss(fixture, '.view button').nativeElement;

        expect(deleteButton).toHaveClass('destroy');
      });

      it(
        'should dispatch DeleteTodoAction when clicked',
        inject([MockStore], (store: MockStore) => {
          const deleteButton = findByCss(fixture, '.view button');
          const _store = spyOn(store, 'dispatch').and.callThrough();

          deleteButton.triggerEventHandler('click', null);

          expect(_store)
            .toHaveBeenCalledWith(
              DeleteTodoAction({
                id: '7f3c76b2-47b5-4dc6-8219-9a146ab170a5',
                description: 'My Todo Item',
                isCompleted: false,
                isEditing: false,
              })
            );
        })
      );
    });
  });
});
