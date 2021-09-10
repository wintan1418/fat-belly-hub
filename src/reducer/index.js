import { combineReducers } from 'redux';
import categoriesReducer from './CategoryReducer';
import ingredientsReducer from './IngredientReducer';
import mealsReducer from './MealReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  ingredients: ingredientsReducer,
});

export default rootReducer;
