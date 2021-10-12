import React from 'react';
import Country from './Country';
import { useSelector } from 'react-redux';

function CountriesList(props) {
  const countries = useSelector((state) => state.countriesReducer);
  console.log(countries);
  const showDetail = () => {
    return 1;
  };
  return (
    <div className="countries" onClick={showDetail}>
      {countries.map((country) => (
        <Country obj={country} />
      ))}
    </div>
  );
}

export default CountriesList;
