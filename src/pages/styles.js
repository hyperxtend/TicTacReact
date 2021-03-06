import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const GameContainer = styled(Container)`
  display: flex;
  margin-top: 5%;
  justify-content: center;
  padding: 0;
  position: relative;
  left: 5%;
`;

export const GameBoardContainer = styled.div`
  margin-bottom: 5%;
  height: 30vh;
  width: 30vw;
  margin-right: 3%;
  position: relative;
  right: 10%;
`;

export const StyledGameStatus = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.8em;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 5%;
`;
