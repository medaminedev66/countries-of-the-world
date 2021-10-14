import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RandomCountry from '../components/RandomCountry';
import store from '../redux/configureStore';

describe('test the RandomCountry component', () => {
  const countries = [
    { name: 'Morocco', flags: 'mr' },
    { name: 'Usa', flags: 'US' },
  ];
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RandomCountry countries={countries} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <RandomCountry countries={countries} />
      </Provider>,
    );
    expect(queryByTestId('Random-country')).toBeTruthy();
  });
});
