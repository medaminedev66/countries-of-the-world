import { combineReducers, createStore } from 'redux';
import { countriesReducer } from './countries/countries';

const reducer = combineReducers({
  countriesReducer,
});

const store = createStore(reducer);
