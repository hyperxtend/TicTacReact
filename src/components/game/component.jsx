import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

const Game = ({ history, moveNumber, onClick, jumpTo, xIsNext }) => {
  const current = history[moveNumber];
  const winner = calculateWinner(current.squares);
  const moveMap = history.map((eachMove, move) => {
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
  const GameStatus = () => {
    if (winner) {
      return <p>{winner.winnerName} is the Winner!</p>;
    }
    if (!winner && moveNumber === 9) {
      return <p>Its a Draw!</p>;
    }
    return <p>Next Player is {xIsNext ? 'X' : 'O'}</p>;
  };
  return (
    <Container className="game">
      <div className="gameInfo">
        <span className="playerStatus">{GameStatus()}</span>
        <div className="playerMoves">{moveMap}</div>
      </div>
      <div className="gameBoard">
        <Board
          squares={current.squares}
          onClick={(currentSquare) => onClick(currentSquare)}
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
