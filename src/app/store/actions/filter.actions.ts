import { createAction, props } from '@ngrx/store';

import { Filter } from '../models/filter';

export const SetFilterAction = createAction('[FILTER] Set', props<Filter>());
