import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

import { previousPlayerMoves } from './controller';

const Game = ({ history, moveNumber, onClick, jumpTo }) => {
  const current = history[moveNumber];
  const currentSquare = current.squares;
  return (
    <Container className="game">
      <div className="playerMoves">
        {previousPlayerMoves(history, jumpTo).map(
          ({ buttonName, onClick: buttonClick }, index) => (
            <Button
              className="moveHistory"
              size="sm"
              variant="outline-dark"
              key={`${index}-${buttonName}`}
              onClick={buttonClick}
            >
              {buttonName}
            </Button>
          )
        )}
      </div>
      <Board squares={currentSquare} onClick={(int) => onClick(int)} />
    </Container>
  );
};

Game.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  moveNumber: PropTypes.number,
  onClick: PropTypes.func,
  jumpTo: PropTypes.func,
};

Game.defaultProps = {
  history: [
    {
      squares: [],
    },
  ],
  moveNumber: 0,
  onClick: () => {},
  jumpTo: () => {},
};

export default Game;
