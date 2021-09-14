import { CategoriesActionTypes } from '../actions/actionType';

const INITIAL_STATE = {
  categories: [],
  isFetching: false,
  errorMessage: undefined,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_DATA_BEGIN:
      return {
        ...state,
        isFetching: true,
      };

    case CategoriesActionTypes.FETCH_DATA_PROGRESS:
      return {
        ...state,
        categories: action.categories,
        isFetching: false,
      };
    case CategoriesActionTypes.FETCH_DATA_TERMINATED:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,

      };
    default:
      return state;
  }
};

export default categoriesReducer;
