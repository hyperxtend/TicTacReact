import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const LANDING_PAGE = '/LandingPage';
const COMPUTER = '/Computer';
const PLAYER = '/Player';
const SCORE_BOARD = '/ScoreBoard';

const NavigationBar = () => (
  <Navbar className="navigation-bar">
    <NavLink className="home-link" to={LANDING_PAGE}>
      Tic-Tac-Toe
    </NavLink>
    <NavLink className="nav-link" to={COMPUTER}>
      VS Computer
    </NavLink>
    ;
    <NavLink className="nav-link" to={PLAYER}>
      2 Players
    </NavLink>
    ;
    <NavLink className="nav-link" to={SCORE_BOARD}>
      Score Board
    </NavLink>
    ;
  </Navbar>
);

export default NavigationBar;
