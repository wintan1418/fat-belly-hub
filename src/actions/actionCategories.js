import axios from 'axios';
import { CategoriesActionTypes } from './actionType';

export const fetchCategoriesBegin = () => ({
  type: CategoriesActionTypes.FETCH_DATA_BEGIN,
});

export const fetchCategoriesProgress = categories => ({
  type: CategoriesActionTypes.FETCH_DATA_PROGRESS,
  categories,
});

export const fetchCategoriesTerminated = error => ({
  type: CategoriesActionTypes.FETCH_DATA_TERMINATED,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchCategoriesStartAsync = () => {
  return dispatch => {
    dispatch(fetchCategoriesBegin());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => dispatch(fetchCategoriesProgress(res.data.categories)))
      .catch(error => dispatch(fetchCategoriesTerminated(error)));
  };
};
