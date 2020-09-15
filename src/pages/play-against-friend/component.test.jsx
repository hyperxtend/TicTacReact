import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import PlayAgainstFriend from './component';

describe('<PlayAgainstFriend/>', () => {
  let wrapper;
  let onSelectSquare;
  let squares;
  let previousPlayerMoves;
  let playerX;

  beforeAll(() => {
    onSelectSquare = jest.fn();
    playerX = 'Next player is X';
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
      <PlayAgainstFriend
        onSelectSquare={onSelectSquare}
        squares={squares}
        previousPlayerMoves={previousPlayerMoves}
      />
    );
  });

  it('checks initial game status rendering', () => {
    const nextPlayer = wrapper
      .find(select('game-status'))
      .children()
      .first()
      .text();
    expect(nextPlayer).toBe(playerX);
  });
});
