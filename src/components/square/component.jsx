import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './component.css';

const Square = ({ onClick, value }) => (
  <Button variant="secondary outline-dark" className="square" onClick={onClick}>
    {value}
  </Button>
);

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Square.defaultProps = {
  onClick: () => {},
  value: '',
};

export default Square;
