import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';
import MoveHistory from '../../components/move-history';
import ScoreBanner from '../../components/score-banner';
import PageHeader from '../../components/page-header';
import { GameContainer, GameBoardContainer, StyledGameStatus } from '../styles';

import { determineGameStatus } from './controller';

const PlayAgainstComputer = ({
  winner,
  moveNumber,
  playerXScore,
  playerOScore,
  drawScore,
  setGameScore,
  previousPlayerMoves,
  movesForPlayers,
  squares,
  xIsNext,
  history,
}) => (
  <Container>
    <PageHeader pageTitle="Playing against Computer" />
    <GameContainer>
      <GameBoardContainer>
        <StyledGameStatus data-qa="game-status">
          {determineGameStatus(winner, moveNumber, xIsNext)}
        </StyledGameStatus>
        <Board
          squares={squares}
          onClick={(squareIndex) => {
            movesForPlayers(squareIndex, xIsNext, history, moveNumber);
          }}
          data-qa="game-board"
        />
      </GameBoardContainer>
      <MoveHistory previousPlayerMoves={previousPlayerMoves} />
    </GameContainer>
    <ScoreBanner
      playerXScore={playerXScore}
      playerOScore={playerOScore}
      drawScore={drawScore}
      setGameScore={setGameScore(playerXScore, winner, moveNumber)}
    />
  </Container>
);

PlayAgainstComputer.propTypes = {
  history: PropTypes.arrayOf(PropTypes.array),
  winner: PropTypes.string,
  movesForPlayers: PropTypes.func,
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

PlayAgainstComputer.defaultProps = {
  history: [],
  winner: '',
  movesForPlayers: () => {},
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

export default PlayAgainstComputer;
