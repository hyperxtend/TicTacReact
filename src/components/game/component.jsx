import React from 'react';
import { Container } from 'react-bootstrap';

import Board from '../board';

const Game = ({ history, stepNumber }) => {
  const current = history[stepNumber];
  return (
    <Container className="game">
      <Board squares={current.squares} />
    </Container>
  );
};

export default Game;
