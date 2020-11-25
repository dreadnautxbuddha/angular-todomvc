import { createAction, props } from '@ngrx/store';

import { Todo } from '../models/todo';

export const CreateTodoAction = createAction('[TODO] Create', props<Todo>());
