import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSquare = styled(Button)`
  width: 7vw;
  height: 9vh;
  margin: 0% 1% 0% 1%;
  font-size: 2.5em;
  font-weight: 500;
`;

const Square = ({ onClick, value }) => (
  <StyledSquare
    variant="secondary outline-dark"
    data-qa="square-button"
    onClick={onClick}
  >
    {value}
  </StyledSquare>
);

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Square.defaultProps = {
  onClick: () => {},
  value: '',
};

export default Square;
