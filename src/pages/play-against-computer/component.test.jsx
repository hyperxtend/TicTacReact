import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import PlayAgainstComputer from './component';

describe('<PlayAgainstComputer/>', () => {
  let wrapper;
  let movesForPlayers;
  let squares;
  let previousPlayerMoves;
  let playerX;

  beforeAll(() => {
    movesForPlayers = jest.fn();
    playerX = 'Next player is X';
    squares = ['X', '', 'O', 'X', '', 'O', 'O', '', 'X'];
    previousPlayerMoves = [
      { buttonName: 'Test button 1', buttonClick: jest.fn() },
      { buttonName: 'Test button 2', buttonClick: jest.fn() },
      { buttonName: 'Test button 3', buttonClick: jest.fn() },
      { buttonName: 'Test button 4', buttonClick: jest.fn() },
    ];

    wrapper = shallow(
      <PlayAgainstComputer
        movesForPlayers={movesForPlayers}
        squares={squares}
        previousPlayerMoves={previousPlayerMoves}
      />
    );
  });

  it('checks initial game status rendering', () => {
    const nextPlayer = wrapper
      .find('div.player-status')
      .children()
      .first()
      .text();
    expect(nextPlayer).toBe(playerX);
  });

  it('renders move history buttons', () => {
    expect(wrapper.find(select('reset-to-move-history')).length).toBe(4);
  });
});
