import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';
import ScoreBanner from '../../components/score-banner';
import Button from '../../components/button';
import {
  GameBoardContainer,
  StatusContainer,
  StyledGameStatus,
} from '../../components/containers';
import ForwardsArrow from '../../assets/game-play-assets/btn_redo.png';
import BackwardsArrow from '../../assets/game-play-assets/btn_undo.png';
import NewGame from '../../assets/game-play-assets/btn_new_game.png';

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
    <StatusContainer>
      <Button onClick={undoMove}>
        <img src={BackwardsArrow} alt="backwards-arrow" />
      </Button>
      <Button onClick={redoMove}>
        <img src={ForwardsArrow} alt="forwards-arrow" />
      </Button>
      <StyledGameStatus data-qa="game-status">
        {determineGameStatus(winner, moveNumber, xIsNext)}
      </StyledGameStatus>
      <Button onClick={newGame}>
        <img src={NewGame} alt="forwards-arrow" />
      </Button>
    </StatusContainer>
    <GameBoardContainer>
      <Board
        squares={squares}
        onClick={(squareIndex) => {
          movesForPlayers(squareIndex, xIsNext, history, moveNumber);
        }}
        data-qa="game-board"
      />
    </GameBoardContainer>
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
  past: PropTypes.arrayOf(PropTypes.array),
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
  past: [],
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
