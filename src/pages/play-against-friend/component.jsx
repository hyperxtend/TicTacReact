import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';
import Scores from '../score-banner';
import MoveHistory from '../move-history';

import './component.css';

import { determineGameStatus } from './controller';

const PlayAgainstFriend = ({
  onSelectSquare,
  squares,
  moveNumber,
  xIsNext,
  history,
  winner,
}) => (
  <Container>
    <Scores />
    <Container className="game">
      <div className="game-board">
        <div className="player-status" data-qa="game-status">
          {determineGameStatus(winner, moveNumber, xIsNext)}
        </div>
        <Board
          squares={squares}
          onClick={(squareIndex) => {
            onSelectSquare(squareIndex, xIsNext, history, moveNumber);
          }}
          data-qa="game-board"
        />
      </div>
      <MoveHistory />
    </Container>
  </Container>
);

PlayAgainstFriend.propTypes = {
  history: PropTypes.arrayOf(PropTypes.array),
  onSelectSquare: PropTypes.func,
  winner: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string),
  xIsNext: PropTypes.bool,
  moveNumber: PropTypes.number,
};

PlayAgainstFriend.defaultProps = {
  history: [],
  onSelectSquare: () => {},
  winner: '',
  squares: [],
  xIsNext: true,
  moveNumber: 0,
};

export default PlayAgainstFriend;
