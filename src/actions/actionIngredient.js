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
