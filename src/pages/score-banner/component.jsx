import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './component.css';

const PlayerScores = ({
  winner,
  setDrawScore,
  setPlayerXScore,
  setPlayerOScore,
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
          <span>{setPlayerXScore(winner)}</span>
        </td>
        <td className="banner-scores">
          <span>{setDrawScore(winner)}</span>
        </td>
        <td className="banner-scores">
          <span>{setPlayerOScore(winner)}</span>
        </td>
      </tr>
    </tbody>
  </Table>
);

PlayerScores.propTypes = {
  winner: PropTypes.string,
  setPlayerXScore: PropTypes.func,
  setPlayerOScore: PropTypes.func,
  setDrawScore: PropTypes.func,
};

PlayerScores.defaultProps = {
  winner: '',
  setPlayerXScore: () => {},
  setPlayerOScore: () => {},
  setDrawScore: () => {},
};

export default PlayerScores;
