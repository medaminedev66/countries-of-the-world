import React from 'react';

function Country(props) {
  return (
    <div>
      <h2>{props.obj.name}</h2>
      <img src={props.obj.flags.png} alt="flag" />
    </div>
  );
}

export default Country;
