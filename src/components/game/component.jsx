import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

const Game = ({ history, moveNumber, onClick, jumpTo }) => {
  const current = history[moveNumber];
  const moveMap = history.map((eachMove, moveNumber) => {
    const moveHistory = moveNumber ? `Go to move #${moveNumber}` : 'Restart';
    return (
      <Button
        size="sm"
        variant="outline-dark"
        key={[moveNumber]}
        onClick={() => jumpTo(moveNumber)}
      >
        {moveHistory}
      </Button>
    );
  });

  return (
    <Container className="game">
      <div className="playerMoves">{moveMap}</div>
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
  jumpTo: PropTypes.func,
};
Game.defaultProps = {
  history: [
    {
      squares: [],
    },
  ],
  moveNumber: 0,
  onClick: () => {},
  jumpTo: () => {},
};

export default Game;
