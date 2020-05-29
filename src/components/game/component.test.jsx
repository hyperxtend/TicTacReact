import React from 'react';
import { shallow, mount } from 'enzyme';

import Board from '../board';

import Game from './component';

describe('<Game />', () => {
  let game;
  let board;
  beforeAll(() => {
    game = shallow(<Game />);
    board = shallow(<Board />);
  });
  it('checks if game component exists', () => {
    expect(game.exists()).toBe(true);
  });
  it('checks if board component exists', () => {
    expect(board.exists()).toBe(true);
  });
});

describe('<Game/>', () => {
  let wrapper;
  const mockOnClick = jest.fn();
  const MOVE_VALUES_ONE = ['X', '', '', '', '', '', '', '', ''];
  const MOVE_ONE = { squares: MOVE_VALUES_ONE };

  const MOVE_VALUES_TWO = ['X', 'O', '', '', '', '', '', '', ''];
  const MOVE_TWO = { squares: MOVE_VALUES_TWO };

  const MOVE_VALUES_THREE = ['X', 'O', 'X', '', '', '', '', '', ''];
  const MOVE_THREE = { squares: MOVE_VALUES_THREE };

  const MOVE_VALUES_FOUR = ['X', 'O', 'X', '', 'O', '', '', '', ''];
  const MOVE_FOUR = { squares: MOVE_VALUES_FOUR };

  const MOVE_VALUES_FIVE = ['X', 'O', 'X', '', 'O', '', '', 'X', ''];
  const MOVE_FIVE = { squares: MOVE_VALUES_FIVE };

  const MOVE_VALUES_SIX = ['X', 'O', 'X', '', 'O', 'O', '', 'X', ''];
  const MOVE_SIX = { squares: MOVE_VALUES_SIX };

  const MOVE_VALUES_SEVEN = ['X', 'O', 'X', 'X', 'O', 'O', '', 'X', ''];
  const MOVE_SEVEN = { squares: MOVE_VALUES_SEVEN };

  const MOVE_VALUES_EIGHT = ['X', 'O', 'X', 'X', 'O', 'O', '', 'X', 'O'];
  const MOVE_EIGHT = { squares: MOVE_VALUES_EIGHT };

  const MOVE_VALUES_NINE = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O'];
  const MOVE_NINE = { squares: MOVE_VALUES_NINE };

  const HISTORY_OF_MOVES = [
    MOVE_ONE,
    MOVE_TWO,
    MOVE_THREE,
    MOVE_FOUR,
    MOVE_FIVE,
    MOVE_SIX,
    MOVE_SEVEN,
    MOVE_EIGHT,
    MOVE_NINE,
  ];

  beforeAll(() => {
    wrapper = mount(
      <Game history={HISTORY_OF_MOVES} moveNumber={8} onClick={mockOnClick} />
    );
  });
  it('checks if board exists', () => {
    expect(wrapper.find(Board).exists()).toBe(true);
  });
  it('checks if board has squares props', () => {
    expect(wrapper.find(Board).props().squares).toEqual(MOVE_VALUES_NINE);
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
    console.log('Button1: ', wrapper.find('button.square').at(0).html());
    console.log('Button2: ', wrapper.find('button.square').at(1).html());
    console.log('Button3: ', wrapper.find('button.square').at(2).html());
    console.log('Button4: ', wrapper.find('button.square').at(3).html());
    console.log('Button5: ', wrapper.find('button.square').at(4).html());
    console.log('Button6: ', wrapper.find('button.square').at(5).html());
    console.log('Button7: ', wrapper.find('button.square').at(6).html());
    console.log('Button8: ', wrapper.find('button.square').at(7).html());
    console.log('Button9: ', wrapper.find('button.square').at(8).html());
  });
});
