import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Loader, Table, Header, Container, Segment, Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchIngredientsStartAsync } from '../actions/actionIngredient';
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
  const keys = Object.values(ingredients)[0];
  const strIngredient = [];
  Object.keys(keys).forEach(e => {
    if (e.includes('strIngredient')) {
      strIngredient.push(keys[e]);
    }
  });

  const strMeasure = [];
  Object.keys(keys).forEach(e => {
    if (e.includes('strMeasure')) {
      strMeasure.push(keys[e]);
    }
  });

  return (
    <Container style={{ display: 'flex', paddingBottom: 50 }}>
      {ingredients.map(e => (
        <Segment key={e.idMeal}>
          <p>
            Category:
            { ''}
            {e.strCategory}
          </p>
          <h2>{ingredients.strMeal}</h2>
          <Image src={e.strMealThumb} size="medium" centered />
          <Container style={{ margin: 30 }}>
            <Table basic="very" called style={{ width: '70%', margin: 'auto' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Ingredients</Table.HeaderCell>
                  <Table.HeaderCell>measurements</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    {strIngredient.map(e => (
                      <Header as="h3" key={`${e}_${Math.random() * 100}`}>
                        {e}
                      </Header>
                    ))}
                  </Table.Cell>
                  <Table.Cell style={{ paddingTOP: 30 }} />
                  {strMeasure.map(m => (
                    <Header as="h3" key={`${m}_${Math.random * 100}`}>
                      {m}
                    </Header>
                  ))}
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>
          <h2 style={{ color: 'lavenderblush' }}>
            Ingredient Instruction
          </h2>
          <p style={{ fontSize: 15 }}>
            {e.strInstructions}
          </p>
          <Link to="/">
            <button type="button" style={{ background: 'grey', color: 'white' }}>
              Click me and i would take you home
            </button>
          </Link>
        </Segment>

      ))}
    </Container>

  );
};

export default IngredientList;
