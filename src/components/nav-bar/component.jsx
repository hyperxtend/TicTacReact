import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const NavbarLink = (props) => (
  <NavLink className={props.className} to={props.pageName}>
    {props.linkTitle}
  </NavLink>
);

const NavigationBar = () => (
  <Navbar className="navigationBar">
    <NavbarLink
      className="homeLink"
      pageName="/HomePage"
      linkTitle="Tic-Tac-Toe"
    />
    <NavbarLink
      className="navLink"
      pageName="/VSComputer"
      linkTitle="VS Computer"
    />
    <NavbarLink
      className="navLink"
      pageName="/VSPlayer"
      linkTitle="VS Player"
    />
    <NavbarLink
      className="navLink"
      pageName="/ScoreBoard"
      linkTitle="Score Board"
    />
  </Navbar>
);

export default NavigationBar;
