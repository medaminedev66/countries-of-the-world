import React, { useState } from 'react';
import Country from './Country';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { selectCountry } from '../redux/countries/countries';

function CountriesList(props) {
  const countries = useSelector((state) => state.countriesReducer);
  const history = useHistory();
  const [state, redirect] = useState({ redirect: false });
  const dispatch = useDispatch();

  const setRedirect = (name) => {
    redirect({
      redirect: true,
    });
    dispatch(selectCountry(name));
  };

  // console.log(countries);
  // const showDetail = () => {
  //   return <Redirect to="/details" />;
  // };

  const renderRedirect = () => {
    if (state.redirect) {
      return <Redirect to="/details" />;
      // history.push('/details');
    }
  };

  return (
    <div className="countries">
      {renderRedirect()}
      {countries.map((country) => (
        <div onClick={() => setRedirect(country.name)}>
          <Country obj={country} />
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
