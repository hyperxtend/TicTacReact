import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export const LandingPage = '/LandingPage';
export const Computer = '/Computer';
export const Player = '/Player';
export const ScoreBoard = '/ScoreBoard';

const NavbarLink = (props) => (
  <Link className={props.className} to={props.urlPath}>
    {props.linkTitle}
  </Link>
);

const NavigationBar = () => (
  <Navbar className="navigationBar">
    <NavbarLink
      className="homeLink"
      urlPath={LandingPage}
      linkTitle="Tic-Tac-Toe"
    />
    <NavbarLink
      className="navLink"
      urlPath={Computer}
      linkTitle="VS Computer"
    />
    <NavbarLink className="navLink" urlPath={Player} linkTitle="VS Player" />
    <NavbarLink
      className="navLink"
      urlPath={ScoreBoard}
      linkTitle="Score Board"
    />
  </Navbar>
);

export default NavigationBar;
