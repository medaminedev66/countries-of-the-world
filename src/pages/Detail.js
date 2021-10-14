import React from 'react';
import { useSelector } from 'react-redux';
import Bar from '../components/Bar';

function Details() {
  const countries = useSelector((state) => state.countriesReducer);

  return (
    <div>
      <Bar title="Selected country" />
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
              <div className="countries-title">
                {country.name}
                &apos;s information
              </div>
              <div className="info">
                <h3>Capital:</h3>
                <p>{country.capital}</p>
              </div>
              <div className="info">
                <h3>Independent:</h3>
                <p>{country.independent ? 'Yes' : 'No'}</p>
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
                <h3>Population:</h3>
                <p>{country.population}</p>
              </div>
              <div className="info">
                <h3>Time zone:</h3>
                <p>{country.timezones}</p>
              </div>
              <div className="info">
                <h3>Currency:</h3>
                <p>
                  {country.currencies
                    ? country.currencies[0].name
                    : 'not exist'}
                </p>
              </div>
            </div>
          );
        }
        return '';
      })}
    </div>
  );
}

export default Details;
