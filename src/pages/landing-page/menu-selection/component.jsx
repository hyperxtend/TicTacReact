import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

import { COMPUTER, FRIEND, SCORE_BOARD } from '../../../routes/urls';

const StyledMenu = styled(Container)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: fixed;
  margin-top: 3%;
  background-color: #556174;
  border: 1px solid #495464;
  box-shadow: 4px 4px 5px #122338;
`;

const SelectionHeader = styled.h3`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  font-size: 3em;
  font-weight: 700;
  color: #e8e8e8;
  text-shadow: 4px 3px 0px #264b77, 9px 8px 0px #00243f;
  margin-bottom: 3%;
`;

const SelectionButton = styled(Button)`
  width: 20vw;
  margin-bottom: 2%;
  font-weight: 500;
  text-shadow: 3px 3px #495464;
`;

const MenuSelection = () => (
  <StyledMenu data-qa="game-selection-menu">
    <SelectionHeader data-qa="game-selection-header">
      Game Selection
    </SelectionHeader>
    <Link to={COMPUTER}>
      <SelectionButton variant="dark" size="lg" className="selection-button">
        VS Computer
      </SelectionButton>
    </Link>
    <Link to={FRIEND}>
      <SelectionButton variant="dark" size="lg" className="selection-button">
        VS Friend
      </SelectionButton>
    </Link>
    <Link to={SCORE_BOARD}>
      <SelectionButton variant="dark" size="lg" className="selection-button">
        Score Board
      </SelectionButton>
    </Link>
  </StyledMenu>
);

export default MenuSelection;
