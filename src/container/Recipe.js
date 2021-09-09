import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,Image,Card,Container,
} from 'semantic-ui-react';
import { fetchMealsStartAsync } from '../actions/actionMeals';

const RecipeList = props => {
  const {cat } = props;
  const meals = useSelector(state => state.meals.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealsStartAsync(cat));
  }, [cat]);
}