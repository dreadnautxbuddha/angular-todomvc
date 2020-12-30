interface _Todo {
  /**
   * A string that depicts something to be done.
   *
   * @type {String}
   */
  description: string;

  /**
   * Determines whether a todo item has already been completed.
   *
   * @type {Boolean}
   */
  isCompleted: boolean;

  /**
   * Determines whether a todo item is currently being edited.
   *
   * @type {Boolean}
   */
  isEditing: boolean;
}

export interface Todo extends _Todo {
  /**
   * Similar to a new todo item, but requires the id.
   *
   * @type {String}
   */
  id: string | number;
}


export interface NewTodo extends _Todo {
  /**
   * The unique identifier for a to-do item.
   *
   * @type {String}
   */
  id?: string | number;
}
