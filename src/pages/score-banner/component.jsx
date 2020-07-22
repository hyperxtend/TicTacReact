import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './component.css';
import {
  handleDrawScore,
  handlePlayerOScore,
  handlePlayerXScore,
} from './controller';

const PlayerScores = ({
  winner,
  playerXScore,
  playerOScore,
  moveNumber,
  scoreDraw,
}) => (
  <Table className="score-banner">
    <tbody>
      <tr>
        <th className="score-banner-head">Player X Wins:</th>
        <th className="score-banner-head">Draws:</th>
        <th className="score-banner-head">Player O Wins:</th>
      </tr>
      <tr>
        <td className="banner-scores">
          <span id="player-x-score">
            {handlePlayerXScore(winner, playerXScore)}
          </span>
        </td>
        <td className="banner-scores">
          <span id="draw-score">
            {handlePlayerOScore(winner, playerOScore)}
          </span>
        </td>
        <td className="banner-scores">
          <span id="player-o-score">
            {handleDrawScore(winner, moveNumber, scoreDraw)}
          </span>
        </td>
      </tr>
    </tbody>
  </Table>
);

PlayerScores.propTypes = {
  winner: PropTypes.string,
  playerOScore: PropTypes.number,
  playerXScore: PropTypes.number,
  scoreDraw: PropTypes.number,
};

PlayerScores.defaultProps = {
  winner: '',
  playerOScore: 0,
  playerXScore: 0,
  scoreDraw: 0,
};

export default PlayerScores;
