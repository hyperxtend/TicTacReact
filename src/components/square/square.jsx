import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

 function Square (props) {
  Square.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }
  return (
    <Button
    variant="secondary outline-dark"
    className="square"
    onClick={props.onClick}>
      {props.value}
    </Button>
  );
}


export default Square;