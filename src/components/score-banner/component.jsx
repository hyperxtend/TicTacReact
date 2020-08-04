import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './component.css';

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
  <Table className="score-banner">
    <tbody>
      <tr>
        <th className="score-banner-head">Player X Wins:</th>
        <th className="score-banner-head" data-qa="banner-head-draws">
          Draws:
        </th>
        <th className="score-banner-head">Player O Wins:</th>
      </tr>
      <tr>
        <td className="banner-scores">
          <span>{scoreForPlayerX(playerXScore, winner)}</span>
        </td>
        <td className="banner-scores">
          <span>{scoreForDraw(drawScore, winner, moveNumber)}</span>
        </td>
        <td className="banner-scores">
          <span>{scoreForPlayerO(playerOScore, winner)}</span>
        </td>
      </tr>
    </tbody>
  </Table>
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
