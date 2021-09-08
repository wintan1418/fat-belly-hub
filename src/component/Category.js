import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesStartAsync } from './actionCategories';

const Categories = props => {
  const Categories = useSelector(state => state.Categories.Categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);
};
