import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './component.css';

const MoveHistory = ({ previousPlayerMoves }) => (
  <div className="player-moves">
    <span className="history-header">Go back to</span>
    {previousPlayerMoves.map(({ buttonName, buttonClick }, index) => (
      <Button
        className="move-history"
        size="sm"
        variant="outline-dark"
        key={`${[index]}-${buttonName}`}
        onClick={buttonClick}
        data-qa="reset-to-move-history"
      >
        {buttonName}
      </Button>
    ))}
  </div>
);

MoveHistory.propTypes = {
  previousPlayerMoves: PropTypes.arrayOf(
    PropTypes.shape({
      buttonName: PropTypes.string,
      buttonClick: PropTypes.func,
    })
  ),
};

MoveHistory.defaultProps = {
  previousPlayerMoves: [
    {
      buttonName: 'Restart',
      buttonClick: () => {},
    },
  ],
};

export default MoveHistory;
