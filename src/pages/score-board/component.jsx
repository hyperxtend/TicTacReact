import React from 'react';
import { Col, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import calculateWinningAverage from './controller';

const ScoreBoardContainer = styled(Container)`
  width: 50vw;
  height: 40vh;
  margin: 0 auto;
  padding: 0;
  margin-top: 5%;
  justify-content: center;
  text-align: center;
  position: relative;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const ScoreBoardRow = styled.div`
  display: flex;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
`;

const TableHead = styled(Col)`
  font-size: 3rem;
  font-weight: 700;
  text-decoration: underline;
`;

const StyledSubHeaders = styled(Col)`
  font-size: 2rem;
  font-weight: 600;
`;

const StyledScores = styled(Col)`
  font-size: 1.7rem;
`;

const ScoreBoard = ({
  playerXScore,
  playerOScore,
  drawScore,
  gamesPlayed,
  resetGameState,
}) => (
  <>
    <ScoreBoardContainer data-qa="score-table">
      <ScoreBoardRow>
        <TableHead>Player X</TableHead>
        <TableHead>Player O</TableHead>
      </ScoreBoardRow>
      <ScoreBoardRow>
        <StyledSubHeaders>Wins</StyledSubHeaders>
        <StyledSubHeaders>Draws</StyledSubHeaders>
        <StyledSubHeaders>Wins</StyledSubHeaders>
      </ScoreBoardRow>
      <ScoreBoardRow>
        <StyledScores data-qa="player-x-score">{playerXScore}</StyledScores>
        <StyledScores data-qa="score-for-draw">{drawScore}</StyledScores>
        <StyledScores data-qa="player-o-score">{playerOScore}</StyledScores>
      </ScoreBoardRow>
      <ScoreBoardRow>
        <StyledSubHeaders>Winning Rate</StyledSubHeaders>
        <StyledSubHeaders>Winning Rate</StyledSubHeaders>
      </ScoreBoardRow>
      <ScoreBoardRow>
        <StyledScores data-qa="winning-rate-player-x">
          {calculateWinningAverage(gamesPlayed, playerXScore)}%
        </StyledScores>
        <StyledScores data-qa="winning-rate-player-o">
          {calculateWinningAverage(gamesPlayed, playerOScore)}%
        </StyledScores>
      </ScoreBoardRow>
      <Button
        variant="warning"
        size="lg"
        data-qa="rest-button"
        onClick={(actionPayload) => resetGameState(actionPayload)}
      >
        Reset Stats
      </Button>
    </ScoreBoardContainer>
  </>
);

ScoreBoard.propTypes = {
  playerXScore: PropTypes.number,
  playerOScore: PropTypes.number,
  drawScore: PropTypes.number,
  gamesPlayed: PropTypes.number,
  resetGameState: PropTypes.func,
};

ScoreBoard.defaultProps = {
  playerXScore: 0,
  playerOScore: 0,
  drawScore: 0,
  gamesPlayed: 0,
  resetGameState: () => {},
};

export default ScoreBoard;
