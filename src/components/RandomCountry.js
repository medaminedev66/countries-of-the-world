import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { PropTypes } from 'prop-types';
import loading from '../loading.png';
import { selectCountry } from '../redux/countries/countries';

const RandomCountry = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { countries } = props;
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  const renderRedirect = (name) => {
    dispatch(selectCountry(name));
    history.push('/react-capstone/details');
  };

  return (
    <div
      className="Random-country"
      onClick={() => renderRedirect(randomCountry.name)}
      aria-hidden="true"
      data-testid="Random-country"
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
        Let&apos;s discover&nbsp;
        <span>{randomCountry ? randomCountry.name : '?'}</span>
      </p>
    </div>
  );
};

RandomCountry.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  countries: PropTypes.array.isRequired,
};
export default RandomCountry;
