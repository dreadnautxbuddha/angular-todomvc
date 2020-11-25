import { Todo } from './todo';
import { Input } from './input';

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
}
