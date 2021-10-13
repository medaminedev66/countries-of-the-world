import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import loading from '../loading.png';

const RandomCountry = (props) => {
  // const countries = useSelector((state) => state.countriesReducer);
  const randomCountry =
    props.countries[Math.floor(Math.random() * props.countries.length)];
  console.log(randomCountry);
  // useEffect(() => {
  //   const randomCountry =
  //     countries[Math.floor(Math.random() * countries.length)];
  // });

  return (
    <>
      <div className="country-select">
        <img
          className="flag"
          src={randomCountry ? randomCountry.flags.png : loading}
          alt="flag"
        />
        <h2>{randomCountry ? randomCountry.name : 'Picking...'}</h2>
      </div>
      <p>
        {' '}
        Click on {randomCountry ? randomCountry.name : 'Load...'} to discover
      </p>
    </>
  );
};

export default RandomCountry;
