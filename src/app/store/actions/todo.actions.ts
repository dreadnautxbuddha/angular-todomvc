import { createAction, props } from '@ngrx/store';

import { Todo, ExistingTodo } from '../models/todo';

export const CreateTodoAction = createAction('[TODO] Create', props<Todo>());
export const UpdateTodoAction = createAction('[TODO] Update', props<ExistingTodo>());
