import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import VSPlayer from '../vs-player';

const NavbarLink = (props) => (
  <NavLink
    className={props.className}
    to={props.urlPath}
    component={props.component}
  >
    {props.linkTitle}
  </NavLink>
);

const NavbarRoutes = (props) => (
  <Route path={props.urlPath} component={props.component} />
);

const NavigationBar = () => (
  <Navbar className="navigationBar">
    <NavbarLink
      className="homeLink"
      urlPath="/LandingPage"
      linkTitle="Tic-Tac-Toe"
    />
    <NavbarLink
      className="navLink"
      urlPath="/VSComputer"
      linkTitle="VS Computer"
    />
    <NavbarLink className="navLink" urlPath="/VSPlayer" linkTitle="VS Player" />
    <NavbarLink
      className="navLink"
      urlPath="/ScoreBoard"
      linkTitle="Score Board"
    />
  </Navbar>
);

const PageNavigation = () => (
  <div>
    <NavigationBar />
    <NavbarRoutes urlPath="/LandingPage" data-qa="landing-page" />
    <NavbarRoutes urlPath="/VSComputer" data-qa="vs-computer" />
    <NavbarRoutes
      urlPath="/VSPlayer"
      component={VSPlayer}
      data-qa="vs-player"
    />
    <NavbarRoutes urlPath="/ScoreBoard" data-qa="score-board" />
  </div>
);

export default PageNavigation;
