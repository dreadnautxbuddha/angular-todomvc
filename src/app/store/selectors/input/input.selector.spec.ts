import { input } from './input.selector';
import { Input } from '../../models/input';

fdescribe('Input selector', () => {
  describe('On input', () => {
    it('should return the input', () => {
      const initialState: Input = {
        description: 'My Unfinished Descrip'
      };

      const selection = input.projector(initialState);

      expect(selection).toEqual(initialState);
    });
  });
});
