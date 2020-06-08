import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import Game from './component';
import { determineGameStatus } from './controller';

describe('<Game/>', () => {
  let wrapper;
  let onSelectSquare;
  let squares;
  let previousPlayerMoves;
  let playerX;
  let playerO;
  let nextPlayerOStatus;
  let nextPlayerXStatus;
  let drawGame;
  let drawStatus;
  let winnerX;
  let winnerO;
  let winnerXStatus;
  let winnerOStatus;

  beforeAll(() => {
    onSelectSquare = jest.fn();
    playerX = 'Next player is X';
    playerO = 'Next player is O';
    winnerX = 'X is the Winner!';
    winnerO = 'O is the Winner!';
    drawGame = 'Its a Draw!';
    squares = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    previousPlayerMoves = [
      { buttonName: 'Test button 1', buttonClick: jest.fn() },
      { buttonName: 'Test button 2', buttonClick: jest.fn() },
      { buttonName: 'Test button 3', buttonClick: jest.fn() },
      { buttonName: 'Test button 4', buttonClick: jest.fn() },
      { buttonName: 'Test button 5', buttonClick: jest.fn() },
      { buttonName: 'Test button 6', buttonClick: jest.fn() },
      { buttonName: 'Test button 7', buttonClick: jest.fn() },
      { buttonName: 'Test button 8', buttonClick: jest.fn() },
      { buttonName: 'Test button 9', buttonClick: jest.fn() },
      { buttonName: 'Test button 10', buttonClick: jest.fn() },
    ];

    wrapper = shallow(
      <Game
        onSelectSquare={onSelectSquare}
        squares={squares}
        previousPlayerMoves={previousPlayerMoves}
      />
    );

    nextPlayerOStatus = determineGameStatus(null, 1, false);
    nextPlayerXStatus = determineGameStatus(null, 2, true);
    winnerXStatus = determineGameStatus('X', 5, false);
    winnerOStatus = determineGameStatus('O', 6, true);
    drawStatus = determineGameStatus(false, 9, undefined);
  });

  it('checks initial game status rendering', () => {
    const nextPlayer = wrapper
      .find('div.playerStatus')
      .children()
      .first()
      .text();
    expect(nextPlayer).toBe(playerX);
  });

  it('checks if player O is next', () => {
    expect(nextPlayerOStatus).toBe(playerO);
  });

  it('checks if player X is next', () => {
    expect(nextPlayerXStatus).toBe(playerX);
  });

  it('checks if player X is the winner', () => {
    expect(winnerXStatus).toBe(winnerX);
  });

  it('checks if player X is the winner', () => {
    expect(winnerOStatus).toBe(winnerO);
  });

  it('checks if game status for a draw game', () => {
    expect(drawStatus).toBe(drawGame);
  });

  it('renders move history buttons', () => {
    expect(wrapper.find(select('reset-to-move-history')).length).toBe(10);
  });
});
