import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: #0a0b0c;
  margin-top: 3%;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.5rem;
  opacity: 0.7;
  text-transform: capitalize;
`;

const PageHeader = ({ pageTitle }) => (
  <StyledHeading data-qa="page-title">{pageTitle}</StyledHeading>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string,
};

PageHeader.defaultProps = {
  pageTitle: '',
};

export default PageHeader;
