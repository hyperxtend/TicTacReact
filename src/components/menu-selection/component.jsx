import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

import { COMPUTER, PLAYER, SCORE_BOARD } from '../../routes/urls';

const MenuSelection = () => (
  <Container className="landing-page-menu">
    <Container className="game-selection-menu">
      <h3 className="game-selection-header">Game Selection</h3>
      <Link to={COMPUTER}>
        <Button variant="dark" size="lg" className="selection-button">
          VS Computer
        </Button>
      </Link>
      <Link to={PLAYER}>
        <Button variant="dark" size="lg" className="selection-button">
          VS Friend
        </Button>
      </Link>
      <Link to={SCORE_BOARD}>
        <Button variant="dark" size="lg" className="selection-button">
          Score Board
        </Button>
      </Link>
    </Container>
  </Container>
);

export default MenuSelection;
