import React from 'react';
import { mount } from 'enzyme';

import Board from './component';

describe('<Board/>', () => {
  const onClick = jest.fn();
  const squares = Array(9).fill('');
  const wrapper = mount(<Board squares={squares} onClick={onClick} />);

  it('onClick event works on 1st button', () => {
    wrapper.find('button.square').at(0).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('onClick event works on 2nd button', () => {
    wrapper.find('button.square').at(1).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('onClick event works on 3rd button', () => {
    wrapper.find('button.square').at(2).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('onClick event works on 4th button', () => {
    wrapper.find('button.square').at(3).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('onClick event works on 5th button', () => {
    wrapper.find('button.square').at(4).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('onClick event works on 6th button', () => {
    wrapper.find('button.square').at(5).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('onClick event works on 7th button', () => {
    wrapper.find('button.square').at(6).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('onClick event works on 8th button', () => {
    wrapper.find('button.square').at(7).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });

  it('onClick event works on 9th button', () => {
    wrapper.find('button.square').at(8).simulate('click');
    expect(onClick).toBeCalledWith(0);
  });
});
