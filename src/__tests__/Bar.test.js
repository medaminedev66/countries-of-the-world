import React from 'react';
import Bar from '../components/Bar';
import { ReduxRenderer, renderWithRedux } from './Mocks/reduxStore';

describe('test Bar components', () => {
  const title = 'about';
  it('matches the snapshot', () => {
    const tree = ReduxRenderer(<Bar title={title} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = renderWithRedux(<Bar title={title} />);
    expect(queryByTestId('bar')).toBeTruthy();
  });
});
