import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import MenuSelection from './menu-selection';

const DescriptionContainer = styled(Container)`
  margin-top: 10%;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const StyledDescription = styled.h3`
  color: #00243f;
  font-weight: 600;
`;

const SubHeader = styled.h5`
  margin-top: 5%;
  color: #00243f;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5em;
  text-shadow: 2px 2px #abb3bc;
}`;

const LandingPage = () => (
  <Container>
    <DescriptionContainer>
      <StyledDescription data-qa="landing-page-description">
        This adaptation of the classic Tic-Tac-Toe where players are able to go
        through their previous moves, play against a friend or against the
        computer
      </StyledDescription>
      <SubHeader data-qa="landing-page-sub-header">
        Choose a selection & start playing!
      </SubHeader>
    </DescriptionContainer>
    <MenuSelection />
  </Container>
);

export default LandingPage;
