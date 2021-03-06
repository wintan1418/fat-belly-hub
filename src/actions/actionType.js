const CategoriesActionTypes = {
  FETCH_DATA_BEGIN: 'FETCH_DATA_BEGIN',
  FETCH_DATA_PROGRESS: 'FETCH_DATA_PROGRESS',
  FETCH_DATA_TERMINATED: 'FETCH_DATA_TERMINATED',
};

const MealsActionTypes = {
  FETCH_MEALS_BEGIN: 'FETCH_MEALS_BEGIN',
  FETCH_MEALS_PROGRESS: 'FETCH_MEALS_PROGRESS',
  FETCH_MEALS_TERMINATED: 'FETCH_MEALS_TERMINATED',
};

const IngredientsActionTypes = {
  FETCH_INGREDIENTS_BEGIN: 'FETCH_INGREDIENTS_BEGIN',
  FETCH_INGREDIENTS_PROGRESS: 'FETCH_INGREDIENTS_PROGRESS',
  FETCH_INGREDIENTS_TERMINATED: 'FETCH_INGREDIENTS_TERMINATED',
};

export { CategoriesActionTypes, MealsActionTypes, IngredientsActionTypes };
