import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

const Game = ({ history, moveNumber, onClick }) => {
  const current = history[moveNumber];
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
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  moveNumber: PropTypes.number,
  onClick: PropTypes.func,
};
Game.defaultProps = {
  history: [
    {
      squares: [],
    },
  ],
  moveNumber: 0,
  onClick: () => {},
};

export default Game;
