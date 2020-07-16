import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

import { determineGameStatus } from './controller';

const PlayAgainstFriend = ({
  onSelectSquare,
  squares,
  previousPlayerMoves,
  moveNumber,
  xIsNext,
  history,
  winner,
}) => (
  <Container className="game">
    <div className="player-moves">
      <div className="player-status" data-qa="game-status">
        {determineGameStatus(winner, moveNumber, xIsNext)}
      </div>
      {previousPlayerMoves.map(({ buttonName, buttonClick }, index) => (
        <Button
          className="move-history"
          size="sm"
          variant="outline-dark"
          key={`${[index]}-${buttonName}`}
          onClick={buttonClick}
          data-qa="reset-to-move-history"
        >
          {buttonName}
        </Button>
      ))}
    </div>
    <div className="game-board">
      <Board
        squares={squares}
        onClick={(squareIndex) => {
          onSelectSquare(squareIndex, xIsNext, history, moveNumber);
        }}
        data-qa="game-board"
      />
    </div>
  </Container>
);

PlayAgainstFriend.propTypes = {
  history: PropTypes.arrayOf(PropTypes.array),
  moveNumber: PropTypes.number,
  onSelectSquare: PropTypes.func,
  previousPlayerMoves: PropTypes.arrayOf(PropTypes.func),
  squares: PropTypes.arrayOf(PropTypes.string),
  winner: PropTypes.string,
  xIsNext: PropTypes.bool,
};

PlayAgainstFriend.defaultProps = {
  history: [],
  moveNumber: 0,
  onSelectSquare: () => {},
  previousPlayerMoves: [],
  squares: [],
  winner: '',
  xIsNext: true,
};

export default PlayAgainstFriend;
