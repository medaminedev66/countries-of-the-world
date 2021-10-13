import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import loading from '../loading.png';
import { selectCountry } from '../redux/countries/countries';

const RandomCountry = (props) => {
  // const countries = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const randomCountry =
    props.countries[Math.floor(Math.random() * props.countries.length)];
  console.log(randomCountry);
  // useEffect(() => {
  //   const randomCountry =
  //     countries[Math.floor(Math.random() * countries.length)];
  // });
  const renderRedirect = (name) => {
    dispatch(selectCountry(name));
    history.push('/details');
  };

  return (
    <div
      className="Random-country"
      onClick={() => renderRedirect(randomCountry.name)}
    >
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
    </div>
  );
};

export default RandomCountry;
