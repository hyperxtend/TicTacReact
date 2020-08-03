import React from 'react';
import { Col, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './component.css';

import PageHeader from '../../components/page-header';

import calculateWinningAverage from './controller';

const ScoreBoard = ({
  playerXScore,
  playerOScore,
  drawScore,
  gamesPlayed,
  resetGameState,
}) => (
  <div data-qa="score-table">
    <PageHeader pageTitle="Score Board" />
    <Container className="score-table">
      <div className="score-row">
        <Col className="score-head">Player X</Col>
        <Col className="score-head">Player O</Col>
      </div>
      <div className="score-row">
        <Col className="score-sub-head">Wins</Col>
        <Col className="score-sub-head">Draws</Col>
        <Col className="score-sub-head">Wins</Col>
      </div>
      <div className="score-row">
        <Col className="scores" data-qa="player-x-score">
          {playerXScore}
        </Col>
        <Col className="scores" data-qa="score-for-draw">
          {drawScore}
        </Col>
        <Col className="scores" data-qa="player-o-score">
          {playerOScore}
        </Col>
      </div>
      <div className="score-row">
        <Col className="score-sub-head">Winning Rate</Col>
        <Col className="score-sub-head">Winning Rate</Col>
      </div>
      <div className="score-row">
        <Col className="scores" data-qa="winning-rate-player-x">
          {calculateWinningAverage(gamesPlayed, playerXScore)}%
        </Col>

        <Col className="scores" data-qa="winning-rate-player-o">
          {calculateWinningAverage(gamesPlayed, playerOScore)}%
        </Col>
      </div>
      <Button
        variant="warning"
        size="lg"
        className="rest-button"
        data-qa="rest-button"
        onClick={(actionPayload) => resetGameState(actionPayload)}
      >
        Reset Stats
      </Button>
    </Container>
  </div>
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
