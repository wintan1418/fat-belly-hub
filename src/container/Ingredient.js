import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Loader, Table, Header, Container, Segment, Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchIngredientsStartAsync } from '../actions/getIngredients';
import '../App.css';

const IngredientList = () => {
  const ingredients = useSelector(state => state.ingredients.ingredients);
  const dispatch = useDispatch();

  const { pathname } = window.location;

  const id = pathname.split('/ingredients/')[1];

  useEffect(() => {
    dispatch(fetchIngredientsStartAsync(id));
  }, []);

  if (!ingredients) {
    return <Loader active inline="centered" />;
  }
  const Keys = Object.values(ingredients)[0];
  const strIngredient = [];
  Object.keys(Keys).forEach(e => {
    if (e.includes('strIngredient')) {
      strIngredient.push(Keys[e]);
    }
  });

  const strMeasure = [];
  Object.keys(keys).forEach(e => {
    if (e.includes('strMeasure')) {
      strMeasure.push(Keys[e]);
    }
  });
};
