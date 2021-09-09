const CategoriesActionTypes = {
  FETCH_DATA_START: 'FETCH_DATA_BEGIN',
  FETCH_DATA_SUCCEESS: 'FETCH_DATA_PROGRESS',
  FETCH_DATA_FAILURE: 'FETCH_DATA_TERMINATED',
};

const MealsActionTypes = {
  FETCH_MEALS_START: 'FETCH_MEALS_BEGIN',
  FETCH_MEALS_SUCCEESS: 'FETCH_MEALS_PROGRESS',
  FETCH_MEALS_FAILURE: 'FETCH_MEALS_TERMINATED',
};

const IngredientsActionTypes = {
  FETCH_INGREDIENTS_START: 'FETCH_INGREDIENTS_BEGIN',
  FETCH_INGREDIENTS_SUCCEESS: 'FETCH_INGREDIENTS_PROGRESS',
  FETCH_INGREDIENTS_FAILURE: 'FETCH_INGREDIENTS_TERMINATED',
};

export { CategoriesActionTypes, MealsActionTypes, IngredientsActionTypes };
