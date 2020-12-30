import { createReducer, on } from '@ngrx/store';

import { Input } from '../../models/input';
import { UpdateInputAction } from '../../actions/input.action';

export const initialState: Input = { description: null };

export const InputReducer = createReducer<Input>(
  initialState,
  on(UpdateInputAction, (state, input) => input)
);
