import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

import Square from '../square';

const Board = ({ squares, onClick }) => (
  <Container>
    <Row>
      <Square value={squares[0]} onClick={() => onClick(0)} />
      <Square value={squares[1]} onClick={() => onClick(1)} />
      <Square value={squares[2]} onClick={() => onClick(2)} />
    </Row>
    <Row>
      <Square value={squares[3]} onClick={() => onClick(3)} />
      <Square value={squares[4]} onClick={() => onClick(4)} />
      <Square value={squares[5]} onClick={() => onClick(5)} />
    </Row>
    <Row>
      <Square value={squares[6]} onClick={() => onClick(6)} />
      <Square value={squares[7]} onClick={() => onClick(7)} />
      <Square value={squares[8]} onClick={() => onClick(8)} />
    </Row>
  </Container>
);

Board.propTypes = {
  squares: PropTypes.func,
  onClick: PropTypes.func,
};

Board.defaultProps = {
  squares: () => {},
  onClick: () => {},
};

export default Board;
