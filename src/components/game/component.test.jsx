import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import Game from './component';

describe('<Game/>', () => {
  let wrapper;
  let onSelectSquare;
  let squares;
  let previousPlayerMoves;

  beforeAll(() => {
    onSelectSquare = jest.fn();
    squares = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    previousPlayerMoves = [
      { buttonName: 'Test button 1', buttonClick: jest.fn() },
      { buttonName: 'Test button 2', buttonClick: jest.fn() },
    ];

    wrapper = shallow(
      <Game
        onSelectSquare={onSelectSquare}
        squares={squares}
        previousPlayerMoves={previousPlayerMoves}
      />
    );
  });

  it('renders move history buttons', () => {
    expect(wrapper.find(select('reset-to-move-history')).length).toBe(2);
  });
});
