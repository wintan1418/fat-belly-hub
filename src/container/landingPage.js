import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../component/Category'
import RecipeList from './Recipe';
import {fetchIngredientsStartAsync} from '../actions/actionIngredient';

