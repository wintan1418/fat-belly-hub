import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import RecipeList from '../container/Recipe';

describe('Creates a component', () => {
  const middlewares = [thunk];
  const initialState = { meals: ['goat'] };
  const mockStore = configureStore(middlewares);
  let store;
  it('returns correctly', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <RecipeList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
