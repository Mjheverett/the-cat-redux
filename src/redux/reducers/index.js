import { combineReducers } from 'redux';
import catReducer from './addCat';

export default combineReducers({ cats: catReducer });