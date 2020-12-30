import { createAction, props } from '@ngrx/store';

import { NewTodo, Todo } from '../models/todo';

export const CreateTodoAction = createAction('[TODO] Create', props<NewTodo>());
export const UpdateTodoAction = createAction('[TODO] Update', props<Todo>());
export const DeleteTodoAction = createAction('[TODO] Delete', props<Todo>());

export const MassDeleteTodoAction = createAction('[TODO] Mass Delete', props<{ todos: Todo[] }>());
export const MassToggleTodoCompletionAction = createAction('[TODO] Mass Toggle Todo Completion', props<{ isCompleted: boolean }>());
