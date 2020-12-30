import { Todo } from './todo';
import { Input } from './input';
import { Filter } from './filter';

export interface AppState {
  /**
   * The todo that the user is currently writing, before it is submitted.
   *
   * @type {String}
   */
  readonly input: Input;

  /**
   * A list of the todo-items that the user has provided.
   *
   * @type {Todo[]}
   */
  readonly todos: Todo[];

  /**
   * A filter used in determining which todo items to be displayed in the todo-list.
   *
   * @type {Filter}
   */
  readonly filter: Filter;
}
