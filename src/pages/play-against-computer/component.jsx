import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';

import { determineGameStatus } from './controller';

const PlayAgainstComputer = ({
  movesForPlayers,
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
          movesForPlayers(squareIndex, xIsNext, history, moveNumber);
        }}
        data-qa="game-board"
      />
    </div>
  </Container>
);

PlayAgainstComputer.propTypes = {
  movesForPlayers: PropTypes.func,
  squares: PropTypes.arrayOf(PropTypes.string),
  xIsNext: PropTypes.bool,
  moveNumber: PropTypes.number,
};

PlayAgainstComputer.defaultProps = {
  movesForPlayers: () => {},
  squares: [],
  xIsNext: true,
  moveNumber: 0,
};

export default PlayAgainstComputer;