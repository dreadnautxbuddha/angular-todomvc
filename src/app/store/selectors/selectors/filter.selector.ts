import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/app-state';

export const filter = createSelector(
  (state: AppState) => state.filter,
  filter => filter,
);
