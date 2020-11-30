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
}
