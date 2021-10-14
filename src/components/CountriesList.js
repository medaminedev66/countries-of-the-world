import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Country from './Country';
import { selectCountry } from '../redux/countries/countries';
import RandomCountry from './RandomCountry';

function CountriesList() {
  const countries = useSelector((state) => state.countriesReducer);
  const settings = useSelector((state) => state.settingReducer);
  const [state, redirect] = useState({ redirect: false });
  const dispatch = useDispatch();

  const setRedirect = (name) => {
    redirect({
      redirect: true,
    });
    dispatch(selectCountry(name));
  };

  const renderRedirect = () => {
    if (state.redirect) {
      return <Redirect to="/react-capstone/details" />;
    }
    return '';
  };

  const compare = (a, b) => {
    const type = settings[0].selectBy;
    if (a[type] < b[type]) {
      return 1;
    }
    if (a[type] > b[type]) {
      return -1;
    }
    return 0;
  };

  return (
    <div>
      <div className="continent">
        <RandomCountry countries={countries} />
      </div>
      <div className="countries-title">All countries Selected by Alphabets</div>
      <div className="countries">
        {renderRedirect()}
        {countries.sort(compare).map((country) => (
          <div
            key={country.name}
            className="countr"
            onClick={() => setRedirect(country.name)}
            aria-hidden="true"
          >
            <Country obj={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
