import { createAction, props } from '@ngrx/store';

import { Todo, ExistingTodo } from '../models/todo';

export const CreateTodoAction = createAction('[TODO] Create', props<Todo>());
export const UpdateTodoAction = createAction('[TODO] Update', props<ExistingTodo>());
export const MassDeleteTodoAction = createAction('[TODO] Mass Delete', props<{ todos: ExistingTodo[] }>());
export const DeleteTodoAction = createAction('[TODO] Delete', props<ExistingTodo>());
export const MassToggleTodoCompletionAction = createAction('[TODO] Mass Toggle Todo Completion', props<{ isCompleted: boolean }>());
