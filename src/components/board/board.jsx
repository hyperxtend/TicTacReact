import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import Square from '../square';


 const Board = (props) => {
  function renderSquare(int) {
    return <Square
      value={props.squares[int]}
      onClick={() => props.onClick(int)}
      />;
  }
    Board.propTypes = {
      renderSquare: PropTypes.func.isRequired,
      int: PropTypes.number.isRequired,
      onClick: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired
    }
    return (
      <Container>
        <Row>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </Row>
        <Row>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </Row>
        <Row>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </Row>
      </Container>
    );
  }
export default Board