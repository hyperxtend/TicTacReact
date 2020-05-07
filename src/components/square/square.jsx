import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';

 const Square = (props) => 

    <Button variant="secondary outline-dark" className="square" onClick={props.onClick}>
      {props.value}
    </Button>
    
    Square.propTypes = {
      onClick: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired
    };


export default Square;