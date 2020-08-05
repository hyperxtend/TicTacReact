import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';
import ScoreBanner from '../../components/score-banner';
import MoveHistory from '../../components/move-history';
import PageHeader from '../../components/page-header';

import { determineGameStatus } from './controller';

const PlayAgainstFriend = ({
  winner,
  moveNumber,
  playerXScore,
  playerOScore,
  drawScore,
  setGameScore,
  previousPlayerMoves,
  onSelectSquare,
  squares,
  xIsNext,
  history,
}) => (
  <Container>
    <PageHeader pageTitle="Playing against Friend" />
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
      <MoveHistory previousPlayerMoves={previousPlayerMoves} />
    </Container>
    <ScoreBanner
      playerXScore={playerXScore}
      playerOScore={playerOScore}
      drawScore={drawScore}
      setGameScore={setGameScore(playerXScore, winner, moveNumber)}
    />
  </Container>
);

PlayAgainstFriend.propTypes = {
  history: PropTypes.arrayOf(PropTypes.array),
  onSelectSquare: PropTypes.func,
  winner: PropTypes.string,
  squares: PropTypes.arrayOf(PropTypes.string),
  xIsNext: PropTypes.bool,
  moveNumber: PropTypes.number,
  previousPlayerMoves: PropTypes.arrayOf(
    PropTypes.shape({
      buttonName: PropTypes.string,
      buttonClick: PropTypes.func,
    })
  ),
  playerXScore: PropTypes.number,
  playerOScore: PropTypes.number,
  drawScore: PropTypes.number,
  setGameScore: PropTypes.func,
};

PlayAgainstFriend.defaultProps = {
  history: [],
  onSelectSquare: () => {},
  winner: '',
  squares: [],
  xIsNext: true,
  moveNumber: 0,
  previousPlayerMoves: [
    {
      buttonName: 'Restart',
      buttonClick: () => {},
    },
  ],
  playerXScore: 0,
  playerOScore: 0,
  drawScore: 0,
  setGameScore: () => {},
};

export default PlayAgainstFriend;
