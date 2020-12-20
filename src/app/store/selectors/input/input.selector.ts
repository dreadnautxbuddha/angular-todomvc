import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/app-state';

export const input = createSelector((state: AppState) => state.input, input => input);
