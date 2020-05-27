import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

const Game = ({ history, stepNumber, onClick }) => {
  const current = history[stepNumber];
  return (
    <Container className="game">
      <Board
        squares={current.squares}
        onClick={(currentSquare) => onClick(currentSquare)}
      />
    </Container>
  );
};

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  squares: PropTypes.arrayOf(PropTypes.string),
  stepNumber: PropTypes.number,
};

Game.defaultProps = {
  history: [{}],
  squares: [''],
  stepNumber: 0,
};

export default Game;
