import { Todo } from '../../models/todo';
import { Filter } from '../../models/filter';
import { allTodos, completeTodos, incompleteTodos, filteredTodos } from './todo.selector';

describe('TODO Selector', () => {
  describe('On allTodos', () => {
    it('should return all todo items', () => {
      let initialState: Todo[] = [
        {
          id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
          description: 'I have to do this',
          isCompleted: false,
          isEditing: false,
        }
      ];

      let selection = allTodos.projector(initialState);

      expect(selection).toEqual(initialState);
    });

    it('should return nothing when there are no todo items', () => {
      let initialState: Todo[] = [];

      let selection = allTodos.projector(initialState);

      expect(selection).toHaveSize(0);
    });
  });

  describe('On completeTodos', () => {
    it('should only return completed todo items', () => {
      let initialState: Todo[] = [
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

      let selection = completeTodos.projector(initialState);

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
      let initialState: Todo[] = [
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

      let selection = completeTodos.projector(initialState);

      expect(selection).toHaveSize(0);
    });
  });

  describe('On incompleteTodos', () => {
    it('should only return incomplete todo items', () => {
      let initialState: Todo[] = [
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

      let selection = incompleteTodos.projector(initialState);

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
      let initialState: Todo[] = [
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

      let selection = incompleteTodos.projector(initialState);

      expect(selection).toHaveSize(0);
    });
  });

  describe('On filteredTodos', () => {
    let _completeTodos: Todo[] = [
      {
        id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
        description: 'My Complete Todo item',
        isCompleted: true,
        isEditing: false,
      },
    ];
    let _incompleteTodos: Todo[] = [
      {
        id: '2104236b-d057-48cf-acab-0b9519be1b45',
        description: 'My Incomplete Todo item',
        isCompleted: false,
        isEditing: false,
      },
    ];
    let _todos: Todo[] = [..._completeTodos, ..._incompleteTodos];

    it('should return all todos when completion filter is set to null', () => {
      let filter: Filter = { completion: null };

      let selection = filteredTodos.projector(
        _todos,
        _completeTodos,
        _incompleteTodos,
        filter
      );

      expect(selection).toEqual(_todos);
    });

    it('should return complete todos when completion filter is set to "complete"', () => {
      let filter: Filter = { completion: 'complete' };

      let selection = filteredTodos.projector(
        _todos,
        _completeTodos,
        _incompleteTodos,
        filter
      );

      expect(selection)
        .toEqual([
          {
            id: 'f0cf5148-c390-41bb-a6e0-d1f1daeb6aa4',
            description: 'My Complete Todo item',
            isCompleted: true,
            isEditing: false,
          },
        ]);
    });

    it('should return incomplete todos when completion filter is set to "incomplete"', () => {
      let filter: Filter = { completion: 'incomplete' };

      let selection = filteredTodos.projector(
        _todos,
        _completeTodos,
        _incompleteTodos,
        filter
      );

      expect(selection)
        .toEqual([
          {
            id: '2104236b-d057-48cf-acab-0b9519be1b45',
            description: 'My Incomplete Todo item',
            isCompleted: false,
            isEditing: false,
          }
        ]);
    });
  });
});
