import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';
import GameStatus, { calculateWinner } from '../../utilities';

const moveMap = (history, jumpTo) =>
  history.map((eachMove, move) => {
    const moveHistory = move ? `Go to move #${move}` : 'Restart';
    return (
      <Button
        size="sm"
        variant="outline-dark"
        key={[move]}
        onClick={() => jumpTo(move)}
      >
        {moveHistory}
      </Button>
    );
  });

const Game = ({ history, moveNumber, onClick, xIsNext, jumpTo }) => {
  const current = history[moveNumber];
  const currentSquare = current.squares;
  const winner = calculateWinner(currentSquare);
  return (
    <Container className="game">
      <div className="gameInfo">
        <span className="playerStatus">
          {GameStatus(winner, moveNumber, xIsNext)}
        </span>
        <div className="playerMoves">{moveMap(history, jumpTo)}</div>
      </div>
      <div className="gameBoard">
        <Board
          squares={current.squares}
          onClick={(squareIndex) => onClick(squareIndex)}
        />
      </div>
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
