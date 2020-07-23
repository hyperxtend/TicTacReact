import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';
import Scores from '../score-banner';

import './component.css';
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
  <Container>
    <Scores />
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
  </Container>
);

PlayAgainstFriend.propTypes = {
  history: PropTypes.arrayOf(PropTypes.array),
  onSelectSquare: PropTypes.func,
  previousPlayerMoves: PropTypes.arrayOf(
    PropTypes.shape({
      buttonName: PropTypes.string,
      buttonClick: PropTypes.func,
    })
  ),
  winner: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string),
  xIsNext: PropTypes.bool,
  moveNumber: PropTypes.number,
};

PlayAgainstFriend.defaultProps = {
  history: [],
  onSelectSquare: () => {},
  previousPlayerMoves: [
    {
      buttonName: 'Restart',
      buttonClick: () => {},
    },
  ],
  winner: '',
  squares: [],
  xIsNext: true,
  moveNumber: 0,
};

export default PlayAgainstFriend;
