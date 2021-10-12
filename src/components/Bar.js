import React from 'react';
import { useHistory } from 'react-router';

function Bar() {
  const history = useHistory();
  const handler = () => {
    //Redirect to another route
    history.push('/');
  };
  return (
    <div className="bar">
      <button onClick={handler}>&lt;</button>
      <h2>Title</h2>
    </div>
  );
}

export default Bar;
