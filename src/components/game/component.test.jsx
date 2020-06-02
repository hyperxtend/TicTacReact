import React from 'react';
import { mount } from 'enzyme';

import Board from '../board';

import Game from './component';

describe('<Game/>', () => {
  let wrapper;
  const mockOnClick = jest.fn();
  const moveValuesOne = ['X', '', '', '', '', '', '', '', ''];
  const moveOne = { squares: moveValuesOne };

  const moveValuesTwo = ['X', 'O', '', '', '', '', '', '', ''];
  const moveTwo = { squares: moveValuesTwo };

  const moveValuesThree = ['X', 'O', 'X', '', '', '', '', '', ''];
  const moveThree = { squares: moveValuesThree };

  const moveValuesFour = ['X', 'O', 'X', '', 'O', '', '', '', ''];
  const moveFour = { squares: moveValuesFour };

  const moveValuesFive = ['X', 'O', 'X', '', 'O', '', '', 'X', ''];
  const moveFive = { squares: moveValuesFive };

  const moveValuesSix = ['X', 'O', 'X', '', 'O', 'O', '', 'X', ''];
  const moveSix = { squares: moveValuesSix };

  const moveValuesSeven = ['X', 'O', 'X', 'X', 'O', 'O', '', 'X', ''];
  const moveSeven = { squares: moveValuesSeven };

  const moveValuesEight = ['X', 'O', 'X', 'X', 'O', 'O', '', 'X', 'O'];
  const moveEight = { squares: moveValuesEight };

  const moveValuesNine = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O'];
  const moveNine = { squares: moveValuesNine };

  const historyOfMoves = [
    moveOne,
    moveTwo,
    moveThree,
    moveFour,
    moveFive,
    moveSix,
    moveSeven,
    moveEight,
    moveNine,
  ];

  beforeAll(() => {
    wrapper = mount(
      <Game history={historyOfMoves} moveNumber={8} onClick={mockOnClick} />
    );
  });
  it('checks if board exists', () => {
    expect(wrapper.find(Board).exists()).toBe(true);
  });
  it('checks if board has squares props', () => {
    expect(wrapper.find(Board).props().squares).toEqual(moveValuesNine);
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
