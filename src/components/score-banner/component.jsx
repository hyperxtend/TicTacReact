import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './component.css';

const ScoreBanner = ({ playerXScore, playerOScore, drawScore }) => (
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
          <span>{playerXScore}</span>
        </td>
        <td className="banner-scores">
          <span>{drawScore}</span>
        </td>
        <td className="banner-scores">
          <span>{playerOScore}</span>
        </td>
      </tr>
    </tbody>
  </Table>
);

ScoreBanner.propTypes = {
  playerXScore: PropTypes.number,
  playerOScore: PropTypes.number,
  drawScore: PropTypes.number,
};

ScoreBanner.defaultProps = {
  playerXScore: 0,
  playerOScore: 0,
  drawScore: 0,
};

export default ScoreBanner;
