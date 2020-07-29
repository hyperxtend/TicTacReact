import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';
import MoveHistory from '../../components/move-history';
import ScoreBanner from '../score-banner';

import './component.css';
import { determineGameStatus } from './controller';

const PlayAgainstComputer = ({
  movesForPlayers,
  squares,
  moveNumber,
  xIsNext,
  history,
  winner,
}) => (
  <Container>
    <ScoreBanner />
    <Container className="game">
      <div className="game-board">
        <div className="player-status" data-qa="game-status">
          {determineGameStatus(winner, moveNumber, xIsNext)}
        </div>
        <Board
          squares={squares}
          onClick={(squareIndex) => {
            movesForPlayers(squareIndex, xIsNext, history, moveNumber);
          }}
          data-qa="game-board"
        />
      </div>
      <MoveHistory />
    </Container>
  </Container>
);

PlayAgainstComputer.propTypes = {
  history: PropTypes.arrayOf(PropTypes.array),
  winner: PropTypes.string,
  movesForPlayers: PropTypes.func,
  squares: PropTypes.arrayOf(PropTypes.string),
  xIsNext: PropTypes.bool,
  moveNumber: PropTypes.number,
};

PlayAgainstComputer.defaultProps = {
  history: [],
  winner: '',
  movesForPlayers: () => {},
  squares: [],
  xIsNext: true,
  moveNumber: 0,
};

export default PlayAgainstComputer;
