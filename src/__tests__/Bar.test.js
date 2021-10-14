import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Bar from '../components/Bar';

describe('test the Quote components', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Bar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Router>
        <Bar />
      </Router>,
    );
    expect(queryByTestId('bar')).toBeTruthy();
  });
});
