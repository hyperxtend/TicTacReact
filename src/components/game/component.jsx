import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

import { determineGameStatus } from './controller';

const Game = ({
  onSelectSquare,
  squares,
  previousPlayerMoves,
  moveNumber,
  xIsNext,
  winner,
}) => (
  <Container className="game">
    <div className="playerMoves">
      <div className="playerStatus" data-qa="game-status">
        {determineGameStatus(winner, moveNumber, xIsNext)}
      </div>
      {previousPlayerMoves.map(({ buttonName, buttonClick }, index) => (
        <Button
          className="moveHistory"
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
    <div className="gameBoard">
      <Board
        squares={squares}
        onClick={(squareIndex) => onSelectSquare(squareIndex)}
        data-qa="game-board"
      />
    </div>
  </Container>
);
Game.propTypes = {
  onSelectSquare: PropTypes.func,
  squares: PropTypes.arrayOf(PropTypes.string),
  xIsNext: PropTypes.bool,
  moveNumber: PropTypes.number,
};

Game.defaultProps = {
  onSelectSquare: () => {},
  squares: [],
  xIsNext: true,
  moveNumber: 0,
};

export default Game;
