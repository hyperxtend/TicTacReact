import React from 'react';
import { Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';
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
  scoreForPlayerX,
  scoreForPlayerO,
  scoreForDraw,
  movesForPlayers,
  newGame,
  undoMove,
  redoMove,
  squares,
  xIsNext,
  history,
}) => (
  <Container>
    <PageHeader pageTitle="Playing against Computer" />
    <GameContainer>
      <GameBoardContainer>
        <Button onClick={undoMove}>Backwards</Button>
        <Button onClick={redoMove}>Forward</Button>
        <Button onClick={newGame}>New Game</Button>
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
    </GameContainer>
    <ScoreBanner
      winner={winner}
      moveNumber={moveNumber}
      playerXScore={playerXScore}
      playerOScore={playerOScore}
      drawScore={drawScore}
      scoreForPlayerX={scoreForPlayerX}
      scoreForPlayerO={scoreForPlayerO}
      scoreForDraw={scoreForDraw}
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
  newGame: PropTypes.func,
  playerXScore: PropTypes.number,
  playerOScore: PropTypes.number,
  drawScore: PropTypes.number,
  scoreForPlayerX: PropTypes.func,
  scoreForPlayerO: PropTypes.func,
  scoreForDraw: PropTypes.func,
  undoMove: PropTypes.func,
  redoMove: PropTypes.func,
};

PlayAgainstComputer.defaultProps = {
  history: [],
  winner: '',
  movesForPlayers: () => {},
  squares: [],
  xIsNext: true,
  moveNumber: 0,
  newGame: () => {},

  playerXScore: 0,
  playerOScore: 0,
  drawScore: 0,
  scoreForPlayerX: () => {},
  scoreForPlayerO: () => {},
  scoreForDraw: () => {},
  undoMove: () => {},
  redoMove: () => {},
};

export default PlayAgainstComputer;
