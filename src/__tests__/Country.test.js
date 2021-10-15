import React from 'react';
import Country from '../components/Country';
import { ReduxRenderer, renderWithRedux } from './Mocks/reduxStore';

describe('test the Country component', () => {
  const country = {
    name: 'Morocco',
    flags: 'flag',
  };
  it('matches the snapshot', () => {
    const tree = ReduxRenderer(<Country obj={country} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = renderWithRedux(<Country obj={country} />);
    expect(getByText('Morocco')).not.toBeNull();
  });
});
