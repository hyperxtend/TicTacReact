import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import Game from './component';

describe('<Game/>', () => {
  let wrapper;
  let onSelectSquare;
  let squares;
  let previousPlayerMoves;
  let playerX;
  let playerO;
  let squaresO;
  let comp;

  beforeAll(() => {
    onSelectSquare = jest.fn();
    playerX = 'Next player is X';
    playerO = 'Next player is O';
    squaresO = ['X', '', '', '', '', '', '', '', ''];
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
    comp = shallow(<Game squares={squaresO} />);
  });

  it('renders move history buttons', () => {
    expect(wrapper.find(select('reset-to-move-history')).length).toBe(10);
  });
  it('checks initial game status rendering', () => {
    const gameStatus = wrapper
      .find('div.playerStatus')
      .children()
      .first()
      .text();
    expect(gameStatus).toBe(playerX);
  });
});
