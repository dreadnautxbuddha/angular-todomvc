import { createReducer, on } from '@ngrx/store';

import { Filter } from '../../models/filter';
import { UpdateFilterAction } from '../../actions/filter.actions';

export const initialState: Filter = { completion: null };

export const FilterReducer = createReducer<Filter>(
  initialState,
  on(UpdateFilterAction, (state, { completion }) => {
    return { completion };
  }),
);
