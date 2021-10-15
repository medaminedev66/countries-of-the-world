import React from 'react';
import CountriesList from '../components/CountriesList';
import { ReduxRenderer, renderWithRedux } from './Mocks/reduxStore';
// import store from '../redux/configureStore';

describe('test the CountriesList component', () => {
  it('matches the snapshot', () => {
    const tree = ReduxRenderer(<CountriesList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = renderWithRedux(<CountriesList />);
    expect(queryByTestId('countries')).toBeTruthy();
  });
});
