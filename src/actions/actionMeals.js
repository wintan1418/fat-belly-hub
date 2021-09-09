import axios from 'axios';
import { CategoriesActionTypes } from './actionType';

export const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_DATA_BEGIN,
});

export const fetchCategoriesSuccess = categories => ({
  type: CategoriesActionTypes.FETCH_DATA_PROGRESS,
  categories,
});

export const fetchCategoriesFailure = error => ({
  type: CategoriesActionTypes.FETCH_DATA_TERMINTAED,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchCategoriesStartAsync = () => {
  return dispatch => {
    dispatch(fetchCategoriesStart());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => dispatch(fetchCategoriesSuccess(res.data.categories)))
      .catch(error => dispatch(fetchCategoriesFailure(error)));
  };
};
