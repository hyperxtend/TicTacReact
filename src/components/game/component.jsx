import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

const Game = ({ history, stepNumber }) => {
  const current = history[stepNumber];
  return (
    <Container className="game">
      <Board squares={current} />
    </Container>
  );
};

Game.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  stepNumber: PropTypes.number,
};
Game.defaultProps = {
  history: [],
  stepNumber: 0,
};

export default Game;
