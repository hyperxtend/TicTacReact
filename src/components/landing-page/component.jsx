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
  <Container className="selectionMenu">
    <GameSelection pageName="/VSComputer" selectName="VS Computer" />
    <GameSelection pageName="/VSPlayer" selectName="VS Player" />
    <GameSelection pageName="/ScoreBoard" selectName="Score Board" />
  </Container>
);

const LandingPage = () => (
  <Container className="landingPage">
    <h3 className="gameSelection">Game Selection</h3>
    <SelectionMenu />
  </Container>
);

export default LandingPage;
