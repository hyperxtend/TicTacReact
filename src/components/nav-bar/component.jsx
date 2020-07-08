import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const NavbarLink = (props) => (
  <NavLink className={props.className} to={props.routePath}>
    {props.linkTitle}
  </NavLink>
);

const NavigationBar = () => (
  <Navbar className="navigationBar">
    <NavbarLink
      className="homeLink"
      routePath="/HomePage"
      linkTitle="Tic-Tac-Toe"
    />
    <NavbarLink
      className="navLink"
      routePath="/VSComputer"
      linkTitle="VS Computer"
    />
    <NavbarLink
      className="navLink"
      routePath="/VSPlayer"
      linkTitle="VS Player"
    />
    <NavbarLink
      className="navLink"
      routePath="/ScoreBoard"
      linkTitle="Score Board"
    />
  </Navbar>
);

export default NavigationBar;
