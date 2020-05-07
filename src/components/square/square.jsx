import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

 export default function Square(props) { 
  
   return(<Button variant="secondary outline-dark" className="square" onClick={props.onClick}>
      {props.value}
    </Button>)
};

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

