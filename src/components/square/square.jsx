import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Square = (props) => 

    <Button variant="secondary outline-dark" className="square" onClick={props.onClick}>
      {props.value}
    </Button>
    
    Square.propTypes = {
      onClick: PropTypes.func,
      value: PropTypes.string
    };


export default Square;
