import { IngredientsActionTypes } from '../actions/actionType';

const INITIAL_STATE = {
  ingredients: [],
  isFetching: false,
  errorMessage: undefined,
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IngredientsActionTypes.FETCH_INGREDIENTS_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case IngredientsActionTypes.FETCH_INGREDIENTS_PROGRESS:
      return {
        ...state,
        ingredients: action.ingredients,
        isFetching: false,
      };
    case IngredientsActionTypes.FETCH_INGREDIENTS_TERMINATED:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
