import axios from 'axios';
import { MealsActionTypes } from './actionType';

export const fetchMealsBegin = () => ({
  type: MealsActionTypes.FETCH_MEAL_BEGIN,
});

export const fetchMealsProgress = categories => ({
  type: MealsActionTypes.FETCH_MEAL_PROGRESS,
  categories,
});

export const fetchMealsTerminated = error => ({
  type: MealsActionTypes.FETCH_MEAL_TERMINTAED,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchMealsBeginAsync = meals => {
  return dispatch => {
    dispatch(fetchMealsBegin());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => dispatch(fetchMealsProgress(res.data.meals)))
      .catch(error => dispatch(fetchMealsTerminated(error)));
  };
};
