import React from 'react';
import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LANDING_PAGE } from '../../routes/urls';

const ErrorPageContainer = styled(Container)`
  text-align: center;
  margin-top: 5%;
`;

const ErrorPageHeader = styled.h1`
  font-size: 200px;
  -webkit-text-fill-color: #000;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: darkgrey;
  text-transform: uppercase;
  line-height: 80%;
  text-shadow: 2px 2px #fff, 8px 10px #585c59;
  margin-bottom: 5%;
`;

const ErrorPageMessage = styled.h3`
  font-size: 60px;
  margin-bottom: 5%;
`;

const PageNotFound = () => (
  <ErrorPageContainer>
    <ErrorPageHeader>oops...</ErrorPageHeader>
    <ErrorPageMessage>
      Sorry could not find page you were looking for
    </ErrorPageMessage>
    <Link to={LANDING_PAGE}>
      <Button variant="dark" size="lg">
        Go Home
      </Button>
    </Link>
  </ErrorPageContainer>
);

export default PageNotFound;
