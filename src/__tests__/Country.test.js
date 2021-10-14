import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Country from '../components/Country';
import store from '../redux/configureStore';

describe('test the Country component', () => {
  const country = {
    name: 'Morocco',
    flags: 'flag',
  };
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Country obj={country} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Country obj={country} />
      </Provider>,
    );
    expect(getByText('Morocco')).not.toBeNull();
  });
});
