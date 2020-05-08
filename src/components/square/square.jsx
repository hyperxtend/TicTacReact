import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

 export default function Square(props) { 
  Square.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };
   return(<Button variant="secondary outline-dark" className="square" onClick={props.onClick}>
      {props.value}
    </Button>)
}

