import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

const Game = ({ history, moveNumber }) => {
  const current = history[moveNumber];
  return (
    <Container className="game">
      <Board squares={current.squares} />
    </Container>
  );
};

Game.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  moveNumber: PropTypes.number,
};
Game.defaultProps = {
  history: [
    {
      squares: [],
    },
  ],
  moveNumber: 0,
};

export default Game;
