import { createAction, props } from '@ngrx/store';

import { Filter } from '../models/filter';

export const UpdateFilterAction = createAction('[FILTER] Update', props<Filter>());
