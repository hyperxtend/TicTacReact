import styled from 'styled-components';

export const GameBoardContainer = styled.div`
  margin: 0px auto;
  display: flex;
  padding-left: 25%;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: self-start;
  margin-top: 5%;
  margin-bottom: 5%;
  button:nth-child(2) {
    margin-left: 2%;
    margin-right: 15%;
  }
  button:last-child {
    margin-left: 17%;
  }
`;

export const StyledGameStatus = styled.div`
  color: #fff;
  font-size: 32pt;
  font-weight: 700;
`;
