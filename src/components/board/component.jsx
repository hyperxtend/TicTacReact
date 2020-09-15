import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Square from '../square';

const StyledBoardRow = styled(Row)`
  height: 10vh;
`;

const Board = ({ squares, onClick }) => (
  <Container>
    <StyledBoardRow>
      <Square value={squares[0]} onClick={() => onClick(0)} />
      <Square value={squares[1]} onClick={() => onClick(1)} />
      <Square value={squares[2]} onClick={() => onClick(2)} />
    </StyledBoardRow>
    <StyledBoardRow>
      <Square value={squares[3]} onClick={() => onClick(3)} />
      <Square value={squares[4]} onClick={() => onClick(4)} />
      <Square value={squares[5]} onClick={() => onClick(5)} />
    </StyledBoardRow>
    <StyledBoardRow>
      <Square value={squares[6]} onClick={() => onClick(6)} />
      <Square value={squares[7]} onClick={() => onClick(7)} />
      <Square value={squares[8]} onClick={() => onClick(8)} />
    </StyledBoardRow>
  </Container>
);

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

Board.defaultProps = {
  squares: [],
  onClick: () => {},
};

export default Board;
