import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid, Image, Card, Container,
} from 'semantic-ui-react';
import { fetchMealsStartAsync } from '../actions/actionMeals';

const RecipeList = props => {
  const { cat } = props;
  const meals = useSelector(state => state.meals.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealsStartAsync(cat));
  }, [cat]);

return (
  container textalign="center" style={{marginTop: 40}}>
  <Grid columns={3}>
    <Grid.Row>
      {meals && meals.map(meal => (
        <Grid.column
      )

      )}
    </Grid.Row>
  </Grid>
)

};
