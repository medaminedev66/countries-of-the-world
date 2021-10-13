import React from 'react';
import { useHistory } from 'react-router';
import { PropTypes } from 'prop-types';

function Bar(props) {
  const history = useHistory();
  const handler = () => {
    history.push('/');
  };
  const { title } = props;
  return (
    <div className="bar">
      <button type="button" onClick={handler}>
        &lt;
      </button>
      <h2>{title}</h2>
    </div>
  );
}

Bar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Bar;
