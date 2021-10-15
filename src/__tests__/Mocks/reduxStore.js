import { combineReducers, createStore } from 'redux';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  countriesReducer,
});

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) => ({ ...render(<Provider store={store}>{component}</Provider>) });

const ReduxRenderer = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) => ({ ...renderer.create(<Provider store={store}>{component}</Provider>) });

export { renderWithRedux, ReduxRenderer };
