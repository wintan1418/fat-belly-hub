import { CategoriesActionTypes } from '../actions/actionType';
import Categories from '../component/Category';

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
    return{
      ...state,
      categories action.categories,
      isFetching: false,
    };
};
