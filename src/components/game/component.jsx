import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Board from '../board';

const Game = ({ onSelectSquare, squares, previousPlayerMoves }) => (
  <Container className="game">
    <div className="playerMoves">
      {previousPlayerMoves.map(({ buttonName, buttonClick }, index) => (
        <Button
          className="moveHistory"
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
    <Board
      squares={squares}
      onClick={(squareIndex) => onSelectSquare(squareIndex)}
      data-qa="game-board"
    />
  </Container>
);

Game.propTypes = {
  onSelectSquare: PropTypes.func,
};

Game.defaultProps = {
  onSelectSquare: () => {},
};

export default Game;
