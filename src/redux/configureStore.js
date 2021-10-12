import { applyMiddleware, combineReducers, createStore } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { countriesReducer } from './countries/countries';

const reducer = combineReducers({
  countriesReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
