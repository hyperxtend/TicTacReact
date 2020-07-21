import React from 'react';
import { Table } from 'react-bootstrap';

import { calculatePlayerScore } from './controller';
import './component.css';

const ScoreBoard = ({ winner }) => (
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
        <td className="scores">{calculatePlayerScore(winner)}</td>
        <th className="score-sub-head">Draws:</th>
        <td className="scores">0</td>
        <th className="score-sub-head">Wins:</th>
        <td className="scores">0</td>
      </tr>
      <tr>
        <td className="score-sub-head">Average Wins:</td>
        <td className="scores">0%</td>
        <td className="score-sub-head"> </td>
        <td className="scores"> </td>
        <td className="score-sub-head"> Average Wins:</td>
        <td className="scores">0%</td>
      </tr>
    </tbody>
  </Table>
);

export default ScoreBoard;
