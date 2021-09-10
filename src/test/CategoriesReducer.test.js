import categoriesReducer from '../reducer/CategoryReducer';

describe('Categories Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const mockFetching = false;
    const state = categoriesReducer(mockState, mockAction, mockFetching);
    expect(state).toStrictEqual({
      errorMessage: undefined,
      categories: [],
      isFetching: false,
    });
  });

  it(
    '2. Verifies  default funtionality for the reducer, should render given state',
    () => {
      const mockState = {
        categories: [],
        active: 'Some Active Categories',
      };
      const mockAction = { type: 'any' };
      const state = categoriesReducer(mockState, mockAction);
      expect(state).toStrictEqual({
        categories: [],
        active: 'Some Active Categories',
      });
    },
  );
});
