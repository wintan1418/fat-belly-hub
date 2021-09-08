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

  const handleChange = e => {
    props.onCategoryChange(e.target.value);
  };

  return (
    <div>
      <h3>choose from the outlined category</h3>
      <select className="category" placeholder="choose from here" onChange={handleChange} />
      {Categories && Categories.map(c => (
        <option key={c.idCate} value={c.strCategory}>
          {c.strCategory}
        </option>
      ))}
    </div>
  );
};
