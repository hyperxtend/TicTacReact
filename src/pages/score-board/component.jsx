import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './component.css';

import { calculateWinningAverage } from './controller';

const ScoreBoard = ({ playerXScore, playerOScore, drawScore, gamesPlayed }) => (
  <Table className="score-table">
    <thead>
      <tr>
        <th className="score-head">Player X</th>
        <th className="score-head" colSpan={3}>
          {' '}
        </th>
        <th className="score-head">Player O</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="score-sub-head">Wins:</th>
        <td className="scores">{playerXScore}</td>
        <th className="score-sub-head">Draws:</th>
        <td className="scores">{drawScore}</td>
        <th className="score-sub-head">Wins:</th>
        <td className="scores">{playerOScore}</td>
      </tr>
      <tr>
        <td className="score-sub-head">Winning Rate:</td>
        <td className="scores">
          {calculateWinningAverage(gamesPlayed, playerXScore)}%
        </td>
        <td className="score-sub-head"> </td>
        <td className="scores"> </td>
        <td className="score-sub-head">Winning Rate:</td>
        <td className="scores">
          {calculateWinningAverage(gamesPlayed, playerOScore)}%
        </td>
      </tr>
    </tbody>
  </Table>
);

ScoreBoard.propTypes = {
  playerXScore: PropTypes.number,
  playerOScore: PropTypes.number,
  drawScore: PropTypes.number,
  gamesPlayed: PropTypes.number,
};

ScoreBoard.defaultProps = {
  playerXScore: 0,
  playerOScore: 0,
  drawScore: 0,
  gamesPlayed: 0,
};

export default ScoreBoard;
