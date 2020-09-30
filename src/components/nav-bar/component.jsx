import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { LANDING_PAGE, COMPUTER, FRIEND, SCORE_BOARD } from '../../routes/urls';

const StyledNavBar = styled.nav`
  width: 100vw;
  display: flex;
  background: #22272c;
  min-height: 10vh;
  align-items: center;
  position: relative;

  @media (max-width: 1290px) {
    flex-direction: column;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #e8e8e8;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: x-large;
  font-weight: 800;
  position: relative;
  margin-right: 5%;
  left: 30%;

  &:nth-child(1) {
    left: 10%;
  }

  &:hover {
    color: #8c9ea3;
    border-bottom: 5px solid #bbbbbe;
    text-decoration: none;
  }

  &.active {
    border-bottom: 5px solid #bbbbbe;
  }

  @media (max-width: 1290px) {
   left: 5%;

   &:nth-child(1) {
    left: 5%;
  }
    }
  }
`;

const NavigationBar = () => (
  <StyledNavBar>
    <StyledNavLink to={LANDING_PAGE}>Tic-Tac-Toe</StyledNavLink>
    <StyledNavLink to={COMPUTER}>VS Computer</StyledNavLink>
    <StyledNavLink to={FRIEND}>VS Friend</StyledNavLink>
    <StyledNavLink to={SCORE_BOARD}>Score Board</StyledNavLink>
  </StyledNavBar>
);

export default NavigationBar;
