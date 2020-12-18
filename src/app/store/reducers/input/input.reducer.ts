import { createReducer, on } from '@ngrx/store';

import { Input } from '../../models/input';
import { WriteInputAction } from '../../actions/input.action';

export const InputReducer = createReducer<Input>(
  { description: null },
  on(WriteInputAction, (state, input) => input)
);
