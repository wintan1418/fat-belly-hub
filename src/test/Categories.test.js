import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Categories from '../component/Category';

describe('Creates a component', () => {
  const middlewares = [thunk];
  const initialState = { categories: [{ categ: 'miscalleneous' }] };
  const mockStore = configureStore(middlewares);
  let store;
  it('returns correctly', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <Categories />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    store = mockStore(initialState);
    render(<Provider store={store}><Categories /></Provider>);
    const element = screen.getByText('Explore!');
    expect(element).toBeInTheDocument();
  });
});
