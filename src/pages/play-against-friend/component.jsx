import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../../components/board';
import ScoresBanner from '../../components/score-banner';
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

const PlayAgainstFriend = ({
  winner,
  moveNumber,
  playerXScore,
  playerOScore,
  drawScore,
  scoreForPlayerX,
  scoreForPlayerO,
  scoreForDraw,
  onSelectSquare,
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
        <img src={NewGame} alt="new-game-button" />
      </Button>
    </StatusContainer>
    <GameBoardContainer>
      <Board
        squares={squares}
        onClick={(squareIndex) => {
          onSelectSquare(squareIndex, xIsNext, history, moveNumber);
        }}
        data-qa="game-board"
      />
    </GameBoardContainer>
    <ScoresBanner
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

PlayAgainstFriend.propTypes = {
  history: PropTypes.arrayOf(PropTypes.array),
  onSelectSquare: PropTypes.func,
  winner: PropTypes.string,
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

PlayAgainstFriend.defaultProps = {
  history: [],
  past: [],
  future: [],
  onSelectSquare: () => {},
  winner: '',
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

export default PlayAgainstFriend;
