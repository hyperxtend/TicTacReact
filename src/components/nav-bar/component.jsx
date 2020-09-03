import React from 'react';
import styled from 'styled-components';

import { LANDING_PAGE, COMPUTER, FRIEND, SCORE_BOARD } from '../../routes/urls';

const StyledNavBar = styled.nav`
  width: 100vw;
  display: flex;
  background: #22272c;
  min-height: 10vh;
  align-items: center;
  position: relative;
`;

const StyledNavLink = styled.a`
  color: #e8e8e8;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: x-large;
  font-weight: 800;
  position: relative;
  margin-right: 5%;
  left: 30%;

  &:hover {
    color: #8c9ea3;
    border-bottom: 5px solid #bbbbbe;
    text-decoration: none;
  }
`;

const NavigationBar = () => (
  <StyledNavBar className="navigation-bar">
    <StyledNavLink className="home-link" href={LANDING_PAGE}>
      Tic-Tac-Toe
    </StyledNavLink>
    <StyledNavLink className="nav-link" href={COMPUTER}>
      VS Computer
    </StyledNavLink>
    <StyledNavLink className="nav-link" href={FRIEND}>
      VS Friend
    </StyledNavLink>
    <StyledNavLink className="nav-link" href={SCORE_BOARD}>
      Score Board
    </StyledNavLink>
  </StyledNavBar>
);

export default NavigationBar;
