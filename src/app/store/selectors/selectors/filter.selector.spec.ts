
import { filter } from './filter.selector';
import { Filter } from '../../models/filter';

describe('Filter Selector', () => {
  describe('On filter', () => {
    it('should return the current filter', () => {
      let initialState: Filter = {
        completion: 'incomplete',
      };

      let selection = filter.projector(initialState);

      expect(selection).toEqual(initialState);
    });
  });
});
