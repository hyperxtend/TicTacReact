import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const GameSelection = (props) => (
  <Link to={props.pageName}>
    <Button variant="dark" size="lg" className="selectionButton">
      {props.selectName}
    </Button>
  </Link>
);

const SelectionMenu = () => (
  <Container className="gameSelectionMenu">
    <h3 className="gameSelectionHeader">Game Selection</h3>
    <GameSelection pageName="/VSComputer" selectName="VS Computer" />
    <GameSelection pageName="/VSPlayer" selectName="VS Player" />
    <GameSelection pageName="/ScoreBoard" selectName="Score Board" />
  </Container>
);

const GameDescription = () => (
  <Container className="gameDescription">
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
    <Container className="landingPageMenu">
      <SelectionMenu />
    </Container>
  </Container>
);

export default LandingPage;
