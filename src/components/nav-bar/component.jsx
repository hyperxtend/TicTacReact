import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import { LANDING_PAGE, COMPUTER, PLAYER, SCORE_BOARD } from '../../routes/urls';

const NavigationBar = () => (
  <Navbar className="navigation-bar">
    <NavLink className="home-link" to={LANDING_PAGE}>
      Tic-Tac-Toe
    </NavLink>
    <NavLink className="nav-link" to={COMPUTER}>
      VS Computer
    </NavLink>
    <NavLink className="nav-link" to={PLAYER}>
      2 Players
    </NavLink>
    <NavLink className="nav-link" to={SCORE_BOARD}>
      Score Board
    </NavLink>
  </Navbar>
);

export default NavigationBar;
