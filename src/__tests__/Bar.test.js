import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Bar from '../components/Bar';

import store from '../redux/configureStore';

describe('test Bar components', () => {
  const title = 'about';
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Bar title={title} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Bar title={title} />
      </Provider>,
    );
    expect(queryByTestId('bar')).toBeTruthy();
  });
});
