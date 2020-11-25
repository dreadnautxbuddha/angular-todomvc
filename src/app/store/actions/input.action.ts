import { createAction, props } from '@ngrx/store';

import { Input } from '../models/input';

export const WriteInputAction = createAction('[INPUT] Write', props<Input>());
