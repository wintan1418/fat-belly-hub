import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../component/Category';
import RecipeList from './Recipe';
import { fetchIngredientsStartAsync } from '../actions/actionIngredient';

const LandingPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState('Fish');
  const dispatch = useDispatch();

  const handleCategoryChange = category => {
    setState(category);
  };

  useEffect(() => {
    dispatch(fetchIngredientsStartAsync());
  }, []);

  return (
    <div>
      <Categories onCategoryChange={handleCategoryChange} />
      <RecipeList handleChange={handleCategoryChange} />
    </div>
  );
};
export default LandingPage;
