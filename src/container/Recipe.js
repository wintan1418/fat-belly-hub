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
    <Container textalign="center" style={{ marginTop: 40 }}>
      <Grid columns={3}>
        <Grid.Row>
          {meals && meals.map(meal => (
            <Grid.Column
              Key={meal.strMeal}
              style={{ marginTop: 20 }}
              as={link}
              to={{
                pathname: `/ingredients/${meal, idMeal}`,
                id: meal.idMeal,
              }}
            >
              <Card>
                <Image src={meal.strMealThumb} />
                <Card.Content>
                  <Card.Description>
                    {meal.strMeal}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>

          ))}
        </Grid.Row>
      </Grid>
    </Container>

  );
};
