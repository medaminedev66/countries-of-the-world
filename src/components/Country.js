import React from 'react';

function Country(props) {
  return (
    <div className="country">
      <img className="flag-country" src={props.obj.flags.png} alt="flag" />
      <h2>{props.obj.name}</h2>
    </div>
  );
}

export default Country;
