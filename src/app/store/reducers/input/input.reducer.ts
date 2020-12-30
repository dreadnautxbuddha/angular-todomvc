import { createReducer, on } from '@ngrx/store';

import { Input } from '../../models/input';
import { WriteInputAction } from '../../actions/input.action';

export const initialState: Input = { description: null };

export const InputReducer = createReducer<Input>(
  initialState,
  on(WriteInputAction, (state, input) => input)
);
