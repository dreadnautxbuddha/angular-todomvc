import { StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';

import { initialState, FilterReducer } from './filter.reducer';
import { SetFilterAction } from '../../actions/filter.actions';

describe('Filter Reducer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          filter: FilterReducer,
        }),
      ]
    });
  });

  describe('On unknown action', () => {
    it('should return the default state', () => {
      const action = { type: 'Unknown' };

      const state = FilterReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('On SetFilterAction', () => {
    it('should set the filter', () => {
      const action = SetFilterAction({
        completion: 'complete'
      });

      const state = FilterReducer(initialState, action);

      expect(state).toEqual({ completion: 'complete' });
    });
  });
});
