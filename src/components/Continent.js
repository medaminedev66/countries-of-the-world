import React from 'react';
import { useSelector } from 'react-redux';

function Continent() {
  const countries = useSelector((state) => state.countriesReducer);
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  return (
    <>
      <div className="country-select">
        <img className="flag" src={randomCountry.flags.png} alt="flag" />
        <h2>{randomCountry.name}</h2>
      </div>
      <p> Click on {randomCountry.name} to discover</p>
    </>
  );
}

export default Continent;
