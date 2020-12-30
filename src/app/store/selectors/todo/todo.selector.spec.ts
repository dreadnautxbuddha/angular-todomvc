import { Todo } from '../../models/todo';
import { allTodos, completeTodos, incompleteTodos } from './todo.selector';

describe('TODO Selector', () => {
  describe('On allTodos', () => {
    it('should return all todo items', () => {
      const initialState: Todo[] = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'I have to do this',
          isCompleted: false,
          isEditing: false,
        }
      ];

      const selection = allTodos.projector(initialState);

      expect(selection).toEqual(initialState);
    });

    it('should return nothing when there are no todo items', () => {
      const initialState: Todo[] = [];

      const selection = allTodos.projector(initialState);

      expect(selection).toHaveSize(0);
    });
  });

  describe('On completeTodos', () => {
    it('should only return completed todo items', () => {
      const initialState: Todo[] = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My Second Todo item',
          isCompleted: true,
          isEditing: false,
        }
      ];

      const selection = completeTodos.projector(initialState);

      expect(selection)
        .toEqual([
          {
            id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
            description: 'My Second Todo item',
            isCompleted: true,
            isEditing: false,
          }
        ]);
    });

    it('should return nothing when there are no completed todo items', () => {
      const initialState: Todo[] = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My Second Todo item',
          isCompleted: false,
          isEditing: false,
        }
      ];

      const selection = completeTodos.projector(initialState);

      expect(selection).toHaveSize(0);
    });
  });

  describe('On incompleteTodos', () => {
    it('should only return incomplete todo items', () => {
      const initialState: Todo[] = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo item',
          isCompleted: false,
          isEditing: false,
        },
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My Second Todo item',
          isCompleted: true,
          isEditing: false,
        }
      ];

      const selection = incompleteTodos.projector(initialState);

      expect(selection)
        .toEqual([
          {
            id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
            description: 'My First Todo item',
            isCompleted: false,
            isEditing: false,
          }
        ]);
    });

    it('should return nothing when there are no incomplete todo items', () => {
      const initialState: Todo[] = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My First Todo item',
          isCompleted: true,
          isEditing: false,
        },
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'My Second Todo item',
          isCompleted: true,
          isEditing: false,
        }
      ];

      const selection = incompleteTodos.projector(initialState);

      expect(selection).toHaveSize(0);
    });
  });
});
