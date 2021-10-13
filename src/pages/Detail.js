import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
  const countries = useSelector((state) => state.countriesReducer);

  return (
    <div>
      {countries.map((country) => {
        if (country.selected === true) {
          return (
            <div>
              <div className="head">
                <div className="country-select">
                  <img className="flag" src={country.flags.png} alt="flag" />
                  <h2>{country.name}</h2>
                </div>
              </div>
              <div className="info">
                <h3>capital:</h3>
                <p>{country.capital}</p>
              </div>
              <div className="info">
                <h3>Subregion:</h3>
                <p>{country.subregion}</p>
              </div>
              <div className="info">
                <h3>Region:</h3>
                <p>{country.region}</p>
              </div>
              <div className="info">
                <h3>population:</h3>
                <p>{country.population}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Details;
