import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const GameSelection = (props) => (
  <Link to={props.pageName}>
    <Button variant="dark" size="lg" className="selection-button">
      {props.selectName}
    </Button>
  </Link>
);

const SelectionMenu = () => (
  <Container className="game-selection-menu">
    <h3 className="game-selection-header">Game Selection</h3>
    <GameSelection pageName="/VSComputer" selectName="VS Computer" />
    <GameSelection pageName="/VSFriend" selectName="VS Friend" />
    <GameSelection pageName="/ScoreBoard" selectName="Score Board" />
  </Container>
);

const GameDescription = () => (
  <Container className="game-description">
    <h3>
      This adaptation of the classic Tic-Tac-Toe where players are able to go
      through their previous moves, play against a friend or against the
      computer
    </h3>
    <h5>Choose a selection & start playing!</h5>
  </Container>
);

const LandingPage = () => (
  <Container>
    <GameDescription />
    <Container className="landing-page-menu">
      <SelectionMenu />
    </Container>
  </Container>
);

export default LandingPage;
