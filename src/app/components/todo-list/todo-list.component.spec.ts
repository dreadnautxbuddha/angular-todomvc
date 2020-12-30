import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { TodoComponent } from '../todo/todo.component';
import { TodoListComponent } from './todo-list.component';
import { UpdateFilterAction } from '../../store/actions/filter.actions';
import { InputReducer } from '../../store/reducers/input/input.reducer';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { filter } from '../../store/selectors/selectors/filter.selector';
import { FilterReducer } from '../../store/reducers/filter/filter.reducer';
import { findAllByCss, findAllByDirective, findByCss } from 'testing/fixtures/dom-crawler';
import { initialState as initialInputState } from '../../store/reducers/input/input.reducer';
import { initialState as initialFilterState } from '../../store/reducers/filter/filter.reducer';
import { allTodos, completeTodos, incompleteTodos } from '../../store/selectors/todo/todo.selector';
import { initialState as initialTodoState, TodoReducer } from '../../store/reducers/todo/todo.reducer';
import { MassDeleteTodoAction, MassToggleTodoCompletionAction } from '../../store/actions/todo.actions';

describe('TodoListComponent', () => {
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoInputComponent,
        TodoComponent,
      ],
      imports: [
        FormsModule,
        BrowserModule,
        StoreModule.forRoot({
          todos: TodoReducer,
          input: InputReducer,
          filter: FilterReducer,
        }),
      ],
      providers: [
        provideMockStore({
          initialState: {
            todos: initialTodoState,
            input: initialInputState,
            filter: initialFilterState,
          }
        }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    fixture.detectChanges();
  });

  describe('first <section />', () => {
    // The styling for this app was taken from another so I won't test the raw styles.
    // Instead, i'll just assert classnames to be added on various elements of the app.
    it('should have a class of .todoapp', () => {
      // By calling only findByCss instead of findAllByCss, we only get the first
      // <section /> element.
      const todoApp = findByCss(fixture, 'section').nativeElement;

      expect(todoApp).toHaveClass('todoapp');
    });

    describe('<header />', () => {
      it('should have a class of .header', () => {
        const header = findByCss(fixture, '.todoapp header').nativeElement;

        expect(header).toHaveClass('header');
      });

      describe('<h1 />', () => {
        it('should have a "todos" text', () => {
          const header = findByCss(fixture, '.todoapp header h1').nativeElement;

          expect(header.textContent).toEqual('todos');
        });
      });

      it('should have a child <todo-input />', () => {
        const todoInput = findAllByCss(fixture, '.todoapp header todo-input');

        expect(todoInput).toHaveSize(1);
      });
    });

    describe('main <section />', () => {
      it('should have a class of .main', () => {
        const mainSection = findByCss(fixture, '.todoapp section').nativeElement;

        expect(mainSection).toHaveClass('main');
      });

      describe('Mark All As Complete Checkbox', () => {
        beforeEach(inject([MockStore], (store: MockStore) => {
          let _completeTodos = [
            {
              id: '2e9ee414-063e-4b42-9505-695acd9d93af',
              description: 'My First Complete Todo item',
              isCompleted: true,
              isEditing: false
            },
            {
              id: 'fc40fb42-dc1f-4c9b-b811-88c3584ad250',
              description: 'My First Incomplete Todo item',
              isCompleted: false,
              isEditing: false
            },
          ];
          allTodos.setResult(_completeTodos);
          completeTodos.setResult(_completeTodos);

          store.refreshState();
          fixture.detectChanges();
        }));

        describe('when checked', () => {
          it(
            'should dispatch MassToggleTodoCompletionAction with true',
            inject([MockStore], (store: MockStore) => {
              const toggleCompletion = findByCss(fixture, '#toggle-all');
              const _store = spyOn(store, 'dispatch').and.callThrough();

              toggleCompletion.triggerEventHandler(
                'change',
                { target: { checked: true } }
              );

              expect(_store).toHaveBeenCalledWith(
                MassToggleTodoCompletionAction({ isCompleted: true })
              );
            })
          );
        });

        describe('when unchecked', () => {
          it(
            'should dispatch MassToggleTodoCompletionAction with false',
            inject([MockStore], (store: MockStore) => {
              const toggleCompletion = findByCss(fixture, '#toggle-all');
              const _store = spyOn(store, 'dispatch').and.callThrough();

              toggleCompletion.triggerEventHandler(
                'change',
                { target: { checked: false } }
              );

              expect(_store).toHaveBeenCalledWith(
                MassToggleTodoCompletionAction({ isCompleted: false })
              );
            })
          );
        });

        describe('when there are todo items', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            allTodos.setResult([
              {
                id: '2e9ee414-063e-4b42-9505-695acd9d93af',
                description: 'My Complete Todo item',
                isCompleted: true,
                isEditing: false
              },
              {
                id: 'be7c43b7-6412-463b-a08a-f8845052e100',
                description: 'My Incomplete Todo item',
                isCompleted: false,
                isEditing: false
              },
            ]);

            store.refreshState();
            fixture.detectChanges();
          }));

          it('should be displayed', () => {
            const checkbox = findByCss(fixture, '.todoapp .main input').nativeElement;
            const label = findByCss(fixture, '.todoapp .main label').nativeElement;

            expect(checkbox).toHaveClass('toggle-all');
            expect(checkbox.id).toEqual('toggle-all');
            expect(label.htmlFor).toEqual('toggle-all');
          });
        });

        describe('when there are no todo items', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            allTodos.setResult([]);

            store.refreshState();
            fixture.detectChanges();
          }));

          it('should be hidden', () => {
            const checkbox = findAllByCss(fixture, '.todoapp .main input');
            const label = findAllByCss(fixture, '.todoapp .main label');

            expect(checkbox).toHaveSize(0);
            expect(label).toHaveSize(0);
          });
        });
      });

      describe('Todo List', () => {
        beforeEach(inject([MockStore], (store: MockStore) => {
          let _completeTodos = [
            {
              id: '2e9ee414-063e-4b42-9505-695acd9d93af',
              description: 'My First Complete Todo item',
              isCompleted: true,
              isEditing: false
            },
            {
              id: '8f89d928-3f9b-406f-af23-9af6644d914c',
              description: 'My Second Complete Todo item',
              isCompleted: true,
              isEditing: false
            },
            {
              id: 'f7a9a68d-bd92-4040-86e6-d561504bcd14',
              description: 'My Third Complete Todo item that is currently being edited',
              isCompleted: true,
              isEditing: true
            },
          ];
          allTodos.setResult(_completeTodos);
          completeTodos.setResult(_completeTodos);

          store.refreshState();
          fixture.detectChanges();
        }));

        it('should have a .completed class on all todo items', () => {
          const completedTodoItems = findAllByCss(
            fixture,
            '.todoapp .main .todo-list li.completed'
          );

          expect(completedTodoItems).toHaveSize(3);
        });

        it('should have a .editing class on todo items that are being edited', () => {
          const completedTodoItems = findAllByCss(
            fixture,
            '.todoapp .main .todo-list li.editing'
          );

          expect(completedTodoItems).toHaveSize(1);
        });

        it('should create a <todo /> element for each todo item', () => {
          const todoItems = findAllByDirective(fixture, TodoComponent);

          expect(todoItems).toHaveSize(3);
        });
      });

      describe('Filters', () => {
        beforeEach(inject([MockStore], (store: MockStore) => {
          let _completeTodos = [
            {
              id: '2e9ee414-063e-4b42-9505-695acd9d93af',
              description: 'My First Complete Todo item',
              isCompleted: true,
              isEditing: false
            },
            {
              id: '9b49c986-6c5e-4bc8-8c52-5e1ff74945e0',
              description: 'My Second Complete Todo item',
              isCompleted: true,
              isEditing: false
            },
          ];
          let _incompleteTodos = [
            {
              id: '6ec1ed77-dee4-4c66-bef7-cebcaaa56e28',
              description: 'My First Incomplete Todo item',
              isCompleted: false,
              isEditing: false
            },
            {
              id: '06d1c89f-ed17-4043-85b1-87c94d7e27bf',
              description: 'My First Incomplete Todo item',
              isCompleted: false,
              isEditing: false
            },
            {
              id: '5f821e02-86f8-425b-baad-ce85848a8440',
              description: 'My First Incomplete Todo item',
              isCompleted: false,
              isEditing: false
            },
          ];
          allTodos.setResult([..._completeTodos, ..._incompleteTodos]);
          completeTodos.setResult(_completeTodos);
          incompleteTodos.setResult(_incompleteTodos);

          store.refreshState();
          fixture.detectChanges();
        }));

        describe('when no filter is set (or "All" is set)', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            filter.setResult({ completion: null });

            store.refreshState();
            fixture.detectChanges();
          }));

          it('"All" should have a class of .selected while the others do not', () => {
            findAllByCss(fixture, 'ul.filters li a').forEach(filter => {
              let el = filter.nativeElement;

              if (el.textContent.match('All')) {
                expect(el).toHaveClass('selected');
              } else {
                expect(el).not.toHaveClass('selected');
              }
            });
          });

          it('All todo items must be displayed', () => {
            let completedTodoItems = findAllByDirective(fixture, TodoComponent);

            expect(completedTodoItems).toHaveSize(5);
          });

          it(
            'should dispatch UpdateFilterAction with null as its completion argument',
            inject([MockStore], (store: MockStore) => {
              const all = findAllByCss(fixture, 'ul.filters li a').filter(filter => {
                return filter.nativeElement.textContent.match('All');
              })[0];
              const _store = spyOn(store, 'dispatch').and.callThrough();

              all.triggerEventHandler('click', null);

              expect(_store).toHaveBeenCalledWith(
                UpdateFilterAction({ completion: null })
              );
            })
          );
        });

        describe('when "Active" filter is set', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            filter.setResult({ completion: 'incomplete' });

            store.refreshState();
            fixture.detectChanges();
          }));

          it('"Active" should have a class of .selected while the others do not', () => {
            findAllByCss(fixture, 'ul.filters li a').forEach(filter => {
              let el = filter.nativeElement;

              if (el.textContent.match('Active')) {
                expect(el).toHaveClass('selected');
              } else {
                expect(el).not.toHaveClass('selected');
              }
            });
          });

          it('Only incomplete todo items must be displayed', () => {
            let completedTodoItems = findAllByDirective(fixture, TodoComponent);

            expect(completedTodoItems).toHaveSize(3);
          });

          it(
            'should dispatch UpdateFilterAction with "incomplete" as its completion argument',
            inject([MockStore], (store: MockStore) => {
              const all = findAllByCss(fixture, 'ul.filters li a').filter(filter => {
                return filter.nativeElement.textContent.match('Active');
              })[0];
              const _store = spyOn(store, 'dispatch').and.callThrough();

              all.triggerEventHandler('click', null);

              expect(_store).toHaveBeenCalledWith(
                UpdateFilterAction({ completion: 'incomplete' })
              );
            })
          );
        });

        describe('when "Completed" filter is set', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            filter.setResult({ completion: 'complete' });

            store.refreshState();
            fixture.detectChanges();
          }));

          it('"Completed" should have a class of .selected while the others do not', () => {
            findAllByCss(fixture, 'ul.filters li a').forEach(filter => {
              let el = filter.nativeElement;

              if (el.textContent.match('Completed')) {
                expect(el).toHaveClass('selected');
              } else {
                expect(el).not.toHaveClass('selected');
              }
            });
          });

          it('Only complete todo items must be displayed', () => {
            let completedTodoItems = findAllByDirective(fixture, TodoComponent);

            expect(completedTodoItems).toHaveSize(2);
          });

          it(
            'should dispatch UpdateFilterAction with "complete" as its completion argument',
            inject([MockStore], (store: MockStore) => {
              const all = findAllByCss(fixture, 'ul.filters li a').filter(filter => {
                return filter.nativeElement.textContent.match('Completed');
              })[0];
              const _store = spyOn(store, 'dispatch').and.callThrough();

              all.triggerEventHandler('click', null);

              expect(_store).toHaveBeenCalledWith(
                UpdateFilterAction({ completion: 'complete' })
              );
            })
          );
        });
      });
    });

    describe('<footer />', () => {
      describe('when there are no todo items', () => {
        beforeEach(inject([MockStore], (store: MockStore) => {
          allTodos.setResult([]);

          store.refreshState();
          fixture.detectChanges();
        }));

        it('should be hidden', () => {
          const footer = findAllByCss(fixture, '.todoapp .footer');

          expect(footer).toHaveSize(0);
        });
      });

      describe('when there\'s one (1) complete and one (1) incomplete todo item', () => {
        beforeEach(inject([MockStore], (store: MockStore) => {
          let _completeTodos = [
            {
              id: '2e9ee414-063e-4b42-9505-695acd9d93af',
              description: 'My Complete Todo item',
              isCompleted: true,
              isEditing: false
            },
          ];
          let _incompleteTodos = [
            {
              id: 'be7c43b7-6412-463b-a08a-f8845052e100',
              description: 'My Incomplete Todo item',
              isCompleted: false,
              isEditing: false
            },
          ];

          allTodos.setResult([
            ..._incompleteTodos,
            ..._completeTodos,
          ]);
          completeTodos.setResult(_completeTodos);
          incompleteTodos.setResult(_incompleteTodos);

          store.refreshState();
          fixture.detectChanges();
        }));

        it('should be displayed', () => {
          const footer = findAllByCss(fixture, '.todoapp .footer');

          expect(footer).toHaveSize(1);
        });
      });

      describe('todo count', () => {
        describe('when there are no todo items', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            allTodos.setResult([]);

            store.refreshState();
            fixture.detectChanges();
          }));

          it('should be hidden', () => {
            const footer = findAllByCss(fixture, '.todoapp .footer .todo-count');

            expect(footer).toHaveSize(0);
          });
        });

        describe('when there are no incomplete todo items', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            allTodos.setResult([
              {
                id: '2e9ee414-063e-4b42-9505-695acd9d93af',
                description: 'My Complete Todo item',
                isCompleted: true,
                isEditing: false
              },
            ]);
            incompleteTodos.setResult([]);

            store.refreshState();
            fixture.detectChanges();
          }));

          it('should show that there are no todo items left', () => {
            const footer = findByCss(fixture, '.todoapp .footer .todo-count');

            const text = footer.nativeElement.textContent;

            expect(text).toEqual('0 items left');
          });
        });

        describe('when there\'s one (1) incomplete todo item', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            const _incompleteTodos = [
              {
                id: 'be7c43b7-6412-463b-a08a-f8845052e100',
                description: 'My Incomplete Todo item',
                isCompleted: false,
                isEditing: false
              },
            ];

            allTodos.setResult(_incompleteTodos);
            incompleteTodos.setResult(_incompleteTodos);

            store.refreshState();
            fixture.detectChanges();
          }));

          it('should show singular number of todo items', () => {
            const footer = findByCss(fixture, '.todoapp .footer .todo-count');

            const text = footer.nativeElement.textContent;

            expect(text).toEqual('1 item left');
          });
        });

        describe('when there\'s more than one (1) incomplete todo item', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            const _incompleteTodos = [
              {
                id: 'be7c43b7-6412-463b-a08a-f8845052e100',
                description: 'My First Incomplete Todo item',
                isCompleted: false,
                isEditing: false
              },
              {
                id: '58eb5fd3-8ff9-4ded-a63c-d15a4169e93f',
                description: 'My Second Incomplete Todo item',
                isCompleted: false,
                isEditing: false
              },
            ];

            allTodos.setResult(_incompleteTodos);
            incompleteTodos.setResult(_incompleteTodos);

            store.refreshState();
            fixture.detectChanges();
          }));

          it('should show plural number of todo items', () => {
            const footer = findByCss(fixture, '.todoapp footer span');

            const text = footer.nativeElement.textContent;

            expect(text.trim()).toEqual('2 items left');
          });
        });
      });

      describe('"Clear Completed" button', () => {
        describe('when there are no todo items', () => {
          beforeEach(inject([MockStore], (store: MockStore) => {
            completeTodos.setResult([]);

            store.refreshState();
            fixture.detectChanges();
          }));

          it('should be hidden', () => {
            const footer = findAllByCss(fixture, '.todoapp .footer .clear-completed');

            expect(footer).toHaveSize(0);
          });
        });

        describe('when there\'s atleast one (1) complete todo item', () => {
          let _completeTodos = [];
          beforeEach(inject([MockStore], (store: MockStore) => {
            _completeTodos = [
              {
                id: '2e9ee414-063e-4b42-9505-695acd9d93af',
                description: 'My Complete Todo item',
                isCompleted: true,
                isEditing: false
              },
            ];
            completeTodos.setResult(_completeTodos);
            allTodos.setResult(_completeTodos);

            store.refreshState();
            fixture.detectChanges();
          }));

          it('should be displayed', () => {
            const footer = findByCss(fixture, '.todoapp .footer .clear-completed');

            const content = footer.nativeElement.textContent;

            expect(content).toEqual('Clear Completed');
          });

          describe('when clicked', () => {
            it(
              'should dispatch MassToggleTodoCompletionAction with all completed todo items as its argument',
              inject([MockStore], (store: MockStore) => {
                const clearCompletedBtn = findByCss(fixture, '.clear-completed');
                const _store = spyOn(store, 'dispatch').and.callThrough();

                clearCompletedBtn.triggerEventHandler('click', null);

                expect(_store).toHaveBeenCalledWith(
                  MassDeleteTodoAction({ todos: _completeTodos })
                );
              })
            );
          });

        });
      });
    });
  });

  describe('<footer />', () => {
    let paragraphs: DebugElement[];

    beforeEach(() => {
      paragraphs = findAllByCss(fixture, 'footer.info p');
    });

    it('should have three (3) paragraphs', () => {
      expect(paragraphs).toHaveSize(3);
    });

    describe('first paragraph', () => {
      it('should describe how to edit a todo item', () => {
        const firstParagraph = paragraphs[0];

        const content = firstParagraph.nativeElement.textContent;

        expect(content).toEqual('Double-click to edit a todo');
      });
    });

    describe('second paragraph', () => {
      it('should show who created this project', () => {
        const secondParagraph = paragraphs[1];

        const content = secondParagraph.nativeElement.textContent;

        expect(content).toEqual('Created by Peter Cortez');
      });
    });

    describe('third paragraph', () => {
      it('should show the framework used in this project', () => {
        const thirdParagraph = paragraphs[2];

        const content = thirdParagraph.nativeElement.textContent;

        expect(content).toEqual('using Angular2');
      });
    });
  });
});
