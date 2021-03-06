import cloneDeep from 'lodash/cloneDeep';
import disallowFields from '../../src/hooks/disallow-fields';
import { testContext } from '../../src/utils/testing';


describe('\'disallow-fields\' hook', () => {
  const context = cloneDeep(testContext);

  context.data = { id: 1, permissions: ['author'] };
  context.params.provider = 'rest';

  it('doesn\'t modify params', () => {
    const expected = cloneDeep(context);
    const result = disallowFields('field')(context);

    expect(result).toEqual(expected);
  });

  it('throws an error for disallowed fields', () => {
    expect(() => {
      disallowFields('permissions')(context);
    }).toThrow();
  });

});
