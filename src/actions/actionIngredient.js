import axios from 'axios';
import { IngredientsActionTypes } from './actionType';

export const fetchIngredientsBegin = () => ({
  type: IngredientsActionTypes.FETCH_INGREDIENTS_BEGIN,
});

export const fetchIngredientsProgress = ingredients => ({
  type: IngredientsActionTypes.FETCH_INGREDIENTS_PROGRESS,
  ingredients,
});

export const fetchIngredientsTerminated = error => ({
  type: IngredientsActionTypes.FETCH_INGREDIENTS_TERMINATED,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchIngredientsStartAsync = id => {
  return dispatch => {
    dispatch(fetchIngredientsBegin());
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => dispatch(fetchIngredientsProgress(res.data.meals)))
      .catch(error => dispatch(fetchIngredientsTerminated(error)));
  };
};
