import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

import Square from '../square';


const renderSquare = (int, squares, onClick) =>{
   <Square value={squares[int]} onClick={() => onClick(int)}/>;
}

 const Board = ({squares, onClick}) => 

      <Container>
        <Row>
          {renderSquare(0, squares, onClick)}
          {renderSquare(1, squares, onClick)}
          {renderSquare(2, squares, onClick)}
        </Row>
        <Row>
          {renderSquare(3, squares, onClick)}
          {renderSquare(4, squares, onClick)}
          {renderSquare(5, squares, onClick)}
        </Row>
        <Row>
          {renderSquare(6, squares, onClick)}
          {renderSquare(7, squares, onClick)}
          {renderSquare(8, squares, onClick)}
        </Row>
      </Container> 
      
 Board.propTypes = {
  renderSquare: PropTypes.func,
  int: PropTypes.number,
  squares: PropTypes.array,
  onClick: PropTypes.func,
  value: PropTypes.string
}
   
export default Board;
    