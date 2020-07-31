import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import MoveHistory from './component';

describe('<MoveHistory/>', () => {
  let wrapper;
  let history;
  let previousPlayerMoves;

  beforeAll(() => {
    history = [
      Array(9).fill(''),
      ['X', '', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', 'X', '', '', '', ''],
      ['X', 'O', '', '', 'X', 'O', '', '', ''],
      ['X', 'O', 'X', '', 'X', 'O', '', '', ''],
      ['X', 'O', 'X', '', 'X', 'O', '', '', 'O'],
      ['X', 'O', 'X', '', 'X', 'O', '', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X', 'O', '', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'X', 'O'],
    ];
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
      <MoveHistory
        previousPlayerMoves={previousPlayerMoves}
        history={history}
      />
    );
  });

  it('renders move history buttons', () => {
    expect(wrapper.find(select('reset-to-move-history')).length).toBe(10);
  });
});
