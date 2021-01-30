import { createAction, props } from '@ngrx/store';

import { Input } from '../models/input';

export const UpdateInputAction = createAction('[INPUT] Update', props<Input>());
