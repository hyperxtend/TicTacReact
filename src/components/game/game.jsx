import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';

import Board from '../board';
import calculateWinner from '../../utilities';

const Game = (props) => {
    const { history } = props.history;
    const current = history[props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Restart';
      return (
        <span key={[move]} className={(props.stepNumber === move ? 'current' : '')}>
          <Button
            size="sm"
            variant="outline-dark"
            onClick={() => props.jumpTo(move)}
          >
            {desc}
          </Button>
        </span>
      );
    });

    let status;
    if (winner) {
      status = `${winner.winner} is the Winner!`;
    } else {
      status = `Next player is  ${props.xIsNext ? 'X' : 'O'}`;
    }
    if (!winner && props.stepNumber === 9) {
      status = 'It\'s a Draw!';
    }

    return (
      <Container className="game">
        <div className="gameBoard">
          <Board
            squares={current.squares}
            onClick={(i) => props.onClick(i)}
            winnerCombination={(winner ? winner.winnerCombination : [])}
          />
        </div>
        <div className="gameInfo">
          <div className="playerStatus">{status}</div>
          <span className="playerMoves">{props.movesAscOrder ? moves : moves.reverse()}</span>
          <Button size="sm" variant="dark" onClick={() => props.sortMoves()} className="sortButton">
            Change order
          </Button>
        </div>
      </Container>
    );
  };

Game.propTypes = {
  jumpTo: PropTypes.func,
  movesAscOrder: PropTypes.func,
  onClick: PropTypes.func,
  sortMoves: PropTypes.func,
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool
};

Game.defaultProps = {
  jumpTo: () => {},
  movesAscOrder: () => {},
  onClick: () => {},
  sortMoves: () => {},
  stepNumber: 0,
  xIsNext: true
};

export default Game;
