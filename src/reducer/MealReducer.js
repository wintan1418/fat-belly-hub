import { MealsActionTypes } from '../actions/actionType';

const INITIAL_STATE = {
  meals: [],
  isFetching: false,
  erroMessage: undefined,
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MealsActionTypes.FETCH_MEALS_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case MealsActionTypes.FETCH_MEALS_PROGRESS:
      return {
        ...state,
        meals: action.meals,
        isFetching: false,
      };
    case MealsActionTypes.FETCH_MEALS_TERMINATED:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default mealsReducer;
