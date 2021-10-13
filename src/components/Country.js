import React from 'react';
import { PropTypes } from 'prop-types';

function Country(props) {
  const { obj } = props;

  return (
    <div className="country">
      <img className="flag-country" src={obj.flags.png} alt="flag" />
      <h2>{obj.name}</h2>
    </div>
  );
}

Country.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: PropTypes.object.isRequired,
};

export default Country;
