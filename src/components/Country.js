import React from 'react';
import { PropTypes } from 'prop-types';
import fnum from '../logic/numbers';

function Country(props) {
  const { obj } = props;

  return (
    <div className="country">
      <img className="flag-country" src={obj.flags.png} alt="flag" />
      <p className="h2 p">{obj.name}</p>
      <p className="p">
        pp:&nbsp;
        {fnum(obj.population)}
      </p>
      <p className="p">
        Region:&nbsp;
        {fnum(obj.region)}
      </p>
    </div>
  );
}

Country.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: PropTypes.object.isRequired,
};

export default Country;
