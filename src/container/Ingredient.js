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
  
};
