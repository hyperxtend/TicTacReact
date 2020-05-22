import React from 'react';
import { Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';
import calculateWinner from '../../utilities';

const Game = ({
  history,
  stepNumber,
  jumpTo,
  sortMoves,
  xIsNext,
  movesAscendingOrder,
  onClick,
}) => {
  const movesHistory = history;
  const current = movesHistory[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = movesHistory.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Restart';

    return (
      <span key={[move]}>
        <Button size="sm" variant="outline-dark" onClick={() => jumpTo(move)}>
          {desc}
        </Button>
      </span>
    );
  });

  const calculateWinnerStatus = () => {
    if (winner) {
      return <p>{winner.winnerName} is the Winner!</p>;
    }
    if (!winner && stepNumber === 9) {
      return <p>Its a Draw!</p>;
    }
    return <p>Next player is {xIsNext ? 'X' : 'O'}</p>;
  };
  const gameStatus = calculateWinnerStatus(winner);
  return (
    <Container className="game">
      <div className="gameBoard">
        <Board
          squares={current.squares}
          onClick={(squareIndex) => onClick(squareIndex)}
          winnerCombination={winner ? winner.winnerCombination : []}
        />
      </div>
      <div className="gameInfo">
        <div className="playerStatus">{gameStatus}</div>
      </div>
      <span className="playerMoves">
        {movesAscendingOrder ? moves : moves.reverse()}
      </span>
      <Button
        size="sm"
        variant="dark"
        onClick={() => sortMoves()}
        className="sortButton"
      >
        Change order
      </Button>
    </Container>
  );
};

Game.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  jumpTo: PropTypes.func,
  movesAscendingOrder: PropTypes.bool,
  onClick: PropTypes.func,
  sortMoves: PropTypes.func,
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
};

Game.defaultProps = {
  history: [
    {
      squares: [''],
    },
  ],
  jumpTo: () => {},
  movesAscendingOrder: true,
  onClick: () => {},
  sortMoves: () => {},
  stepNumber: 0,
  xIsNext: true,
};

export default Game;
