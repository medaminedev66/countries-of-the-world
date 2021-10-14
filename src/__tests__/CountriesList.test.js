import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CountriesList from '../components/CountriesList';
import store from '../redux/configureStore';

describe('test the CountriesList component', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CountriesList />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <CountriesList />
      </Provider>,
    );
    expect(queryByTestId('countries')).toBeTruthy();
  });
});
