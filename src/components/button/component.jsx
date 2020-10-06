import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButtons = styled(Button)`
  transform: scale(1.2);
`;

const GameButtons = ({ onClick, children }) => {
  return (
    <StyledButtons onClick={onClick} className="buttons">
      {children}
    </StyledButtons>
  );
};

GameButtons.defaultProps = {
  onClick: () => {},
  children: '',
};

GameButtons.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default GameButtons;
