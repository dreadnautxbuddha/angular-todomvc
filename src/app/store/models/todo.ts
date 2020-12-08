export interface Todo {
  /**
   * The unique identifier for a to-do item.
   *
   * @type {String}
   */
  id?: string | number;

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
}

export interface ExistingTodo extends Todo {
  /**
   * Similar to the original TODO interface, but requires the id.
   *
   * @type {String}
   */
  id: string | number;
}
