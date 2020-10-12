import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScoreBannerTable = styled(Table)`
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: center;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ScoreBannerHeader = styled.th`
  font-size: 1.3rem;
  text-decoration: underline;
`;
const ScoreBannerScores = styled.td`
  text-align: center;
  font-size: 1.6rem;
`;

const ScoreBanner = ({
  winner,
  moveNumber,
  playerXScore,
  playerOScore,
  drawScore,
  scoreForPlayerX,
  scoreForPlayerO,
  scoreForDraw,
}) => (
  <ScoreBannerTable data-qa="score-banner">
    <tbody>
      <tr>
        <ScoreBannerHeader data-qa="banner-player-x-header">
          Player X Wins:
        </ScoreBannerHeader>
        <ScoreBannerHeader data-qa="banner-game-draws-header">
          Draws:
        </ScoreBannerHeader>
        <ScoreBannerHeader data-qa="banner-player-o-header">
          Player O Wins:
        </ScoreBannerHeader>
      </tr>
      <tr>
        <ScoreBannerScores data-qa="banner-player-x-score">
          {scoreForPlayerX(playerXScore, winner)}
        </ScoreBannerScores>
        <ScoreBannerScores data-qa="banner-draw-score">
          {scoreForDraw(drawScore, winner, moveNumber)}
        </ScoreBannerScores>
        <ScoreBannerScores data-qa="banner-player-o-score">
          {scoreForPlayerO(playerOScore, winner)}
        </ScoreBannerScores>
      </tr>
    </tbody>
  </ScoreBannerTable>
);

ScoreBanner.propTypes = {
  winner: PropTypes.string,
  moveNumber: PropTypes.number,
  playerXScore: PropTypes.number,
  playerOScore: PropTypes.number,
  drawScore: PropTypes.number,
  scoreForPlayerX: PropTypes.func,
  scoreForPlayerO: PropTypes.func,
  scoreForDraw: PropTypes.func,
};

ScoreBanner.defaultProps = {
  winner: '',
  moveNumber: 0,
  playerXScore: 0,
  playerOScore: 0,
  drawScore: 0,
  scoreForPlayerX: () => {},
  scoreForPlayerO: () => {},
  scoreForDraw: () => {},
};

export default ScoreBanner;
