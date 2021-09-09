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

  return (
    <Container style={{ display: 'flex', paddingBottom: 50 }}>
      {ingredients.map(e => (
        <Segment Key={e.idMeal}>
          <p>
            Category:
            { ''}
            {e.strCategory}
          </p>
          <h2>{ingredients.strMeal}</h2>
          <Image src={ingredients.strMealThumb} size="medium" centered/>
          <Container style={{margin: 30}}>
            <Table basic="very" called style={{width: '70%', margin: 'auto'}}>
              <Table.Header>
                <Table.Row>
                  
                </Table.Row>
                </Table.Header> 
            </Table>
          </Container>
        </Segment>

      ))}
    </Container>

  );
};
