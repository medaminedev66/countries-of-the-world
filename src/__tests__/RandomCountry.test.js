import React from 'react';
import RandomCountry from '../components/RandomCountry';
import { ReduxRenderer, renderWithRedux } from './Mocks/reduxStore';

describe('test the RandomCountry component', () => {
  const countries = [{ name: 'Morocco', flags: 'mr' }];
  it('matches the snapshot', () => {
    const tree = ReduxRenderer(
      <RandomCountry countries={countries} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = renderWithRedux(
      <RandomCountry countries={countries} />,
    );
    expect(queryByTestId('Random-country')).toBeTruthy();
  });
});
