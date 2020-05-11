import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

import Square from '../square';

 const Board = (props) => {
  
  function renderSquare (int){
    return <Square 
    value={props.squares[int]} 
    onClick={() => props.onClick(int)}/>;
   }
     return ( 
     <Container>
        <Row>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </Row>
        <Row>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </Row>
        <Row>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </Row>
      </Container>
      )
};

Board.propTypes = {
  renderSquare: PropTypes.func,
  int: PropTypes.number,
  squares: PropTypes.array,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Board;

