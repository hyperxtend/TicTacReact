import React from 'react';
import { mount } from 'enzyme';

import Board from '../board';

import Game from './component';

describe('<Game/>', () => {
  let wrapper;
  const mockOnClick = jest.fn();
  const MoveValuesOne = ['X', '', '', '', '', '', '', '', ''];
  const MoveOne = { squares: MoveValuesOne };

  const MoveValuesTwo = ['X', 'O', '', '', '', '', '', '', ''];
  const MoveTwo = { squares: MoveValuesTwo };

  const MoveValuesThree = ['X', 'O', 'X', '', '', '', '', '', ''];
  const MoveThree = { squares: MoveValuesThree };

  const MoveValuesFour = ['X', 'O', 'X', '', 'O', '', '', '', ''];
  const MoveFour = { squares: MoveValuesFour };

  const MoveValuesFive = ['X', 'O', 'X', '', 'O', '', '', 'X', ''];
  const MoveFive = { squares: MoveValuesFive };

  const MoveValuesSix = ['X', 'O', 'X', '', 'O', 'O', '', 'X', ''];
  const MoveSix = { squares: MoveValuesSix };

  const MoveValuesSeven = ['X', 'O', 'X', 'X', 'O', 'O', '', 'X', ''];
  const MoveSeven = { squares: MoveValuesSeven };

  const MoveValuesEight = ['X', 'O', 'X', 'X', 'O', 'O', '', 'X', 'O'];
  const MoveEight = { squares: MoveValuesEight };

  const MoveValuesNine = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O'];
  const MoveNine = { squares: MoveValuesNine };

  const HistoryOfMoves = [
    MoveOne,
    MoveTwo,
    MoveThree,
    MoveFour,
    MoveFive,
    MoveSix,
    MoveSeven,
    MoveEight,
    MoveNine,
  ];

  beforeAll(() => {
    wrapper = mount(
      <Game history={HistoryOfMoves} moveNumber={8} onClick={mockOnClick} />
    );
  });
  it('checks if board exists', () => {
    expect(wrapper.find(Board).exists()).toBe(true);
  });
  it('checks if board has squares props', () => {
    expect(wrapper.find(Board).props().squares).toEqual(MoveValuesNine);
  });
  it('checks onClick event on button', () => {
    wrapper.find('button.square').at(0).simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });
  it('checks if first square renders an X', () => {
    wrapper.find('button.square').at(0).simulate('click');
    const buttonText = wrapper
      .find('button.square')
      .at(0)
      .children()
      .first()
      .text();
    expect(buttonText).toBe('X');
  });
  it('checks if seconds square renders an O', () => {
    wrapper.find('button.square').at(1).simulate('click');
    const buttonText = wrapper
      .find('button.square')
      .at(1)
      .children()
      .first()
      .text();
    expect(buttonText).toBe('O');
  });
});
