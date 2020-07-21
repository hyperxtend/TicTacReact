import React from 'react';
import { Table } from 'react-bootstrap';

import './component.css';

const PlayerScores = () => (
  <Table className="score-banner">
    <tbody>
      <tr>
        <th className="score-banner-head">Player X Wins:</th>
        <th className="score-banner-head">Draws:</th>
        <th className="score-banner-head">Player O Wins:</th>
      </tr>
      <tr>
        <td className="banner-scores">
          <span id="player-x-score">0</span>
        </td>
        <td className="banner-scores">
          <span id="draw-score">0</span>
        </td>
        <td className="banner-scores">
          <span id="player-o-score">0</span>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default PlayerScores;
