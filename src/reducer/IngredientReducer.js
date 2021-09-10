import { IngredientsActionTypes } from "../actions/actionType";

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
      case
  }
}