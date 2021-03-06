import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid, Image, Card, Container,
} from 'semantic-ui-react';
import { fetchMealsBeginAsync } from '../actions/actionMeals';
import './Recipe.css';

const RecipeList = props => {
  const { cat } = props;
  const meals = useSelector(state => state.meals.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealsBeginAsync(cat));
  }, [cat]);

  return (
    <Container textalign="center" style={{ marginTop: 40 }}>
      <Grid columns={3}>
        <Grid.Row>
          {meals && meals.map(meal => (
            <Grid.Column
              key={meal.strMeal}
              style={{ marginTop: '20' }}
              as={Link}
              to={{
                pathname: `/ingredients/${meal.idMeal}`,
                id: meal.idMeal,
              }}
            >
              <Card className="cad">
                <Image src={meal.strMealThumb} />
                <Card.Content className="con">
                  <Card.Description style={{ color: 'purple' }}>
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

RecipeList.propTypes = {
  cat: PropTypes.string,
};

RecipeList.defaultProps = {
  cat: '',
};
export default RecipeList;
