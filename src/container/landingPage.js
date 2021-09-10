import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../component/Category';
import RecipeList from './Recipe';
import { fetchIngredientsStartAsync } from '../actions/actionIngredient';
import '../App.css';

const LandingPage = () => {
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
      <RecipeList handleChange={handleCategoryChange} cat={state} />
    </div>
  );
};
export default LandingPage;
