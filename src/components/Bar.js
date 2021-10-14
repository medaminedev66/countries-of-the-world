import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Modal, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { selectedBy } from '../redux/countries/settings';

function Bar(props) {
  const { title } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const handler = () => {
    history.push('/countries-of-the-world/');
  };

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };
  const select = (type) => {
    setShow(false);
    dispatch(selectedBy(type));
  };

  return (
    <div>
      <div className="bar" data-testid="bar">
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size="2x"
          onClick={handler}
        />
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faCog}
          size="2x"
          onClick={() => handleShow(true)}
        />
      </div>
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={handleClose}
        text="dark"
        bg="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title text="primary">Select country by:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item onClick={() => select('name')}>
              Name (Z-A)
            </ListGroup.Item>
            <ListGroup.Item onClick={() => select('population')}>
              population
            </ListGroup.Item>
            <ListGroup.Item onClick={() => select('region')}>
              Region
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}

Bar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Bar;
