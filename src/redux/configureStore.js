import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { countriesReducer } from './countries/countries';
import { settingReducer } from './countries/settings';

const reducer = combineReducers({
  countriesReducer,
  settingReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
