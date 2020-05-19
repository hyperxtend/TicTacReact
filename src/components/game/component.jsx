import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';

import Board from '../board';
import calculateWinner from '../../utilities';


const Game = ({ history,
  jumpTo,
  movesAscendingOrder,
  onClick,
  sortMoves,
  stepNumber,
  xIsNext },
  props) => {
    const { moveHistory } = props.history;
    const current = moveHistory[stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Restart';
      return (
        <span key={[move]} className={(stepNumber === move ? 'current' : '')}>
          <Button
            size="sm"
            variant="outline-dark"
            onClick={() => jumpTo(move)}
          >
            {desc}
          </Button>
        </span>
      );
    });

    let status = calculateWinnerStatus(winner);

    function calculateWinnerStatus() {
        if (winner) {
          status = `${winner.winnerName} is the Winner!`;
        } else {
          status = `Next player is  ${xIsNext ? 'X' : 'O'}`;
        }
        if (!winner && stepNumber === 9) {
          status = 'It\'s a Draw!';
        }
    }
    return (
      <Container className="game">
        <div className="gameBoard">
          <Board
            squares={current.squares}
            onClick={(i) => onClick(i)}
            winnerCombination={(winner ? winner.winnerCombination : [])}
          />
        </div>
        <div className="gameInfo">
          <div className="playerStatus">{status}</div>
          <span className="playerMoves">{movesAscendingOrder ? moves : moves.reverse()}</span>
          <Button size="sm" variant="dark" onClick={() => sortMoves()} className="sortButton">
            Change order
          </Button>
        </div>
      </Container>
    );
  };

  Game.propTypes = {
    jumpTo: PropTypes.func,
    movesAscendingOrder: PropTypes.func,
    onClick: PropTypes.func,
    sortMoves: PropTypes.func,
    stepNumber: PropTypes.number,
    xIsNext: PropTypes.bool
  };

Game.defaultProps = {
  jumpTo: () => {},
  movesAscendingOrder: () => {},
  onClick: () => {},
  sortMoves: () => {},
  stepNumber: 0,
  xIsNext: true
};

export default Game;
