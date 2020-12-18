import { StoreModule } from '@ngrx/store';
import { TestBed} from '@angular/core/testing';

import { CreateTodoAction, DeleteTodoAction, MassDeleteTodoAction, MassToggleTodoCompletionAction, UpdateTodoAction } from '../../actions/todo/todo.actions';
import { initialState, TodoReducer } from '../../reducers/todo/todo.reducer';

describe('TODO Reducers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          todos: TodoReducer,
        }),
      ]
    });
  });

  describe('On unknown action', () => {
    it('should return the default state', () => {
      const action = { type: 'Unknown' };

      const state = TodoReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });


  describe('On CreateTodoAction', () => {
    it('should supply an id to todo item when none is supplied', () => {
      const action = CreateTodoAction({
        description: 'I have to do this',
        isCompleted: false,
        isEditing: false,
      });

      const state = TodoReducer(initialState, action);

      expect(state[0].hasOwnProperty('id')).toBeTruthy();
    });

    it('should use supplied id when already supplied', () => {
      const action = CreateTodoAction({
        id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
        description: 'I have to do this',
        isCompleted: false,
        isEditing: false,
      });

      const state = TodoReducer(initialState, action);

      expect(state[0].id).toEqual('f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4');
    });

    it('should not allow creation of todo that has null description', () => {
      const action = CreateTodoAction({
        id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
        description: null,
        isCompleted: false,
        isEditing: false,
      });

      const state = TodoReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should not allow creation of todo if its description only contains whitespace', () => {
      const action = CreateTodoAction({
        id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
        description: '    ',
        isCompleted: false,
        isEditing: false,
      });

      const state = TodoReducer(initialState, action);

      expect(state).toHaveSize(0);
    });

    it('should not allow creation of todo if its id already exists', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        }
      ];
      const action = CreateTodoAction({
        // As you can see here, the id that we're using on the create-todo-action is
        // already being used. The reducer should not allow this.
        id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
        description: 'My Second Todo Item',
        isCompleted: false,
        isEditing: false,
      });

      const state = TodoReducer(_initialState, action);

      expect(state).toEqual(_initialState);
    });
  });

  describe('On UpdateTodoAction', () => {
    it('should only update the todo item that matches the id', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
          description: 'My Second Todo Item',
          isCompleted: false,
          isEditing: false,
        },
      ];
      const action = UpdateTodoAction({
        id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
        description: 'My Updated First Todo Item Description',
        isCompleted: true,
        isEditing: false,
      });

      const state = TodoReducer(_initialState, action);

      expect(state)
        .toEqual([
          {
            id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
            description: 'My Updated First Todo Item Description',
            isCompleted: true,
            isEditing: false,
          },
          {
            id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
            description: 'My Second Todo Item',
            isCompleted: false,
            isEditing: false,
          },
        ]);
    });

    it('should not update anything if the todo item does not match any todos by id ', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        },
      ];
      const action = UpdateTodoAction({
        id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
        description: 'My First Todo Item\'s updated description',
        isCompleted: false,
        isEditing: false,
      });

      const state = TodoReducer(_initialState, action);

      expect(state).toEqual(_initialState);
    });
  });

  describe('On MassDeleteTodoAction', () => {
    it('should delete supplied todo items', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
          description: 'My Second Todo Item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: '1c77daf9-6326-4bfa-ab26-8122d1fd3b34',
          description: 'My Third Todo Item',
          isCompleted: false,
          isEditing: false,
        },
      ];
      const action = MassDeleteTodoAction({
        todos: [
          {
            id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
            description: 'My Second Todo Item',
            isCompleted: false,
            isEditing: false,
          },
          {
            id: '1c77daf9-6326-4bfa-ab26-8122d1fd3b34',
            description: 'My Third Todo Item',
            isCompleted: false,
            isEditing: false,
          },
        ]
      });

      const state = TodoReducer(_initialState, action);

      expect(state)
        .toEqual([
          {
            id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
            description: 'My First Todo Item',
            isCompleted: false,
            isEditing: false,
          },
        ]);
    });

    it('should not do anything if the supplied todo items have unknown ids', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        },
      ];
      const action = MassDeleteTodoAction({
        todos: [
          {
            id: 'unknown-id',
            description: 'My Unknown Todo Item',
            isCompleted: false,
            isEditing: false,
          }
        ]
      });

      const state = TodoReducer(_initialState, action);

      expect(state).toEqual(_initialState);
    });
  });

  describe('On DeleteTodoAction', () => {
    it('should delete supplied todo item', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
          description: 'My Second Todo Item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: '1c77daf9-6326-4bfa-ab26-8122d1fd3b34',
          description: 'My Third Todo Item',
          isCompleted: false,
          isEditing: false,
        },
      ];
      const action = DeleteTodoAction({
        id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
        description: 'My First Todo Item',
        isCompleted: false,
        isEditing: false,
      });

      const state = TodoReducer(_initialState, action);

      expect(state)
        .toEqual([
          {
            id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
            description: 'My Second Todo Item',
            isCompleted: false,
            isEditing: false,
          },
          {
            id: '1c77daf9-6326-4bfa-ab26-8122d1fd3b34',
            description: 'My Third Todo Item',
            isCompleted: false,
            isEditing: false,
          },
        ]);
    });

    it('should not do anything if the supplied todo item has an unknown id', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        },
      ];
      const action = DeleteTodoAction({
        id: 'unknown-id',
        description: 'My Unknown Todo Item',
        isCompleted: false,
        isEditing: false,
      });

      const state = TodoReducer(_initialState, action);

      expect(state).toEqual(_initialState);
    });
  });

  describe('On MassToggleTodoCompletionAction', () => {
    it('should be able to mark all todo-items as complete', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
          description: 'My Second Todo Item',
          isCompleted: true,
          isEditing: false,
        },
        {
          id: '1c77daf9-6326-4bfa-ab26-8122d1fd3b34',
          description: 'My Third Todo Item',
          isCompleted: false,
          isEditing: false,
        },
      ];
      const action = MassToggleTodoCompletionAction({ isCompleted: true });

      const state = TodoReducer(_initialState, action);

      expect(state)
        .toEqual([
          {
            id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
            description: 'My First Todo Item',
            isCompleted: true,
            isEditing: false,
          },
          {
            id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
            description: 'My Second Todo Item',
            isCompleted: true,
            isEditing: false,
          },
          {
            id: '1c77daf9-6326-4bfa-ab26-8122d1fd3b34',
            description: 'My Third Todo Item',
            isCompleted: true,
            isEditing: false,
          },
        ]);
    });

    it('should be able to mark all todo-items as incomplete', () => {
      const _initialState = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo Item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
          description: 'My Second Todo Item',
          isCompleted: true,
          isEditing: false,
        },
        {
          id: '1c77daf9-6326-4bfa-ab26-8122d1fd3b34',
          description: 'My Third Todo Item',
          isCompleted: false,
          isEditing: false,
        },
      ];
      const action = MassToggleTodoCompletionAction({ isCompleted: false });

      const state = TodoReducer(_initialState, action);

      expect(state)
        .toEqual([
          {
            id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
            description: 'My First Todo Item',
            isCompleted: false,
            isEditing: false,
          },
          {
            id: '1db438d2-e81a-4ef8-9251-a56bbace694e',
            description: 'My Second Todo Item',
            isCompleted: false,
            isEditing: false,
          },
          {
            id: '1c77daf9-6326-4bfa-ab26-8122d1fd3b34',
            description: 'My Third Todo Item',
            isCompleted: false,
            isEditing: false,
          },
        ]);
    });
  });
});
