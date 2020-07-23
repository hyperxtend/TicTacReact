import React from 'react';
import { Container } from 'react-bootstrap';

import './component.css';

import MenuSelection from './menu-selection';

const LandingPage = () => (
  <Container>
    <Container className="game-description">
      <h3 data-qa="landing-page-description">
        This adaptation of the classic Tic-Tac-Toe where players are able to go
        through their previous moves, play against a friend or against the
        computer
      </h3>
      <h5 data-qa="landing-page-sub-header">
        Choose a selection & start playing!
      </h5>
    </Container>
    <MenuSelection />
  </Container>
);

export default LandingPage;
