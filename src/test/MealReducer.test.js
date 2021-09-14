import mealsReducer from '../reducer/MealReducer';

describe('Meals Reducer', () => {
  it(
    ' Checks the default action for the reducer, should return given state',
    () => {
      const mockState = {
        meals: [],
        active: 'Some Active Meals',
      };
      const mockAction = { type: 'any' };
      const state = mealsReducer(mockState, mockAction);
      expect(state).toStrictEqual({
        meals: [],
        active: 'Some Active Meals',
      });
    },
  );
});
