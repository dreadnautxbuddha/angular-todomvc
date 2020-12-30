import { createReducer, on } from '@ngrx/store';

import { Filter } from '../../models/filter';
import { SetFilterAction } from '../../actions/filter.actions';

export const initialState: Filter = { completion: null };

export const FilterReducer = createReducer<Filter>(
  initialState,
  on(SetFilterAction, (state, { completion }) => {
    return { completion };
  }),
);
