import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const LANDING_PAGE = '/LandingPage';
const COMPUTER = '/Computer';
const PLAYER = '/Player';
const SCORE_BOARD = '/ScoreBoard';

const NavbarLink = (props) => (
  <NavLink className={props.className} to={props.urlPath}>
    {props.linkTitle}
  </NavLink>
);

const NavigationBar = () => (
  <Navbar className="navigation-bar">
    <NavbarLink
      className="home-link"
      urlPath={LANDING_PAGE}
      linkTitle="Tic-Tac-Toe"
    />
    <NavbarLink
      className="nav-link"
      urlPath={COMPUTER}
      linkTitle="VS Computer"
    />
    <NavbarLink className="nav-link" urlPath={PLAYER} linkTitle="VS Player" />
    <NavbarLink
      className="nav-link"
      urlPath={SCORE_BOARD}
      linkTitle="Score Board"
    />
  </Navbar>
);

export default NavigationBar;
