import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MoveHistoryContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-left: 3%;
  text-align: center;
  box-shadow: 0 0px 2px #00000029, 0 1px 3px #00000029;
  padding: 2%;
`;

const HistoryHeader = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 5%;
  font-weight: 600;
  color: #22272c;
  letter-spacing: 2px;
`;

const MoveHistory = ({ previousPlayerMoves }) => (
  <MoveHistoryContainer>
    <HistoryHeader>Go back to</HistoryHeader>
    {previousPlayerMoves.map(({ buttonName, buttonClick }, index) => (
      <Button
        size="sm"
        variant="outline-dark"
        key={`${[index]}-${buttonName}`}
        onClick={buttonClick}
        data-qa="reset-to-move-history"
      >
        {buttonName}
      </Button>
    ))}
  </MoveHistoryContainer>
);

MoveHistory.propTypes = {
  previousPlayerMoves: PropTypes.arrayOf(
    PropTypes.shape({
      buttonName: PropTypes.string,
      buttonClick: PropTypes.func,
    })
  ),
};

MoveHistory.defaultProps = {
  previousPlayerMoves: [
    {
      buttonName: 'Restart',
      buttonClick: () => {},
    },
  ],
};

export default MoveHistory;
