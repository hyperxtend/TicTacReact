import React from 'react';
import { mount } from 'enzyme';
import { select } from 'qa-utilities';

import Board from './component';

describe('<Board/>', () => {
  const onClick = jest.fn();
  const squares = Array(9).fill('');
  const wrapper = mount(<Board squares={squares} onClick={onClick} />);

  it('onClick event works on 1st button', () => {
    wrapper.find(select('square-button')).at(0).simulate('click');
    expect(onClick).toBeCalledTimes(1);
  });

  it('onClick event works on 2nd button', () => {
    wrapper.find(select('square-button')).at(1).simulate('click');
    expect(onClick).toBeCalledTimes(2);
  });

  it('onClick event works on 3rd button', () => {
    wrapper.find(select('square-button')).at(2).simulate('click');
    expect(onClick).toBeCalledTimes(3);
  });

  it('onClick event works on 4th button', () => {
    wrapper.find(select('square-button')).at(3).simulate('click');
    expect(onClick).toBeCalledTimes(4);
  });

  it('onClick event works on 5th button', () => {
    wrapper.find(select('square-button')).at(4).simulate('click');
    expect(onClick).toBeCalledTimes(5);
  });

  it('onClick event works on 6th button', () => {
    wrapper.find(select('square-button')).at(5).simulate('click');
    expect(onClick).toBeCalledTimes(6);
  });

  it('onClick event works on 7th button', () => {
    wrapper.find(select('square-button')).at(6).simulate('click');
    expect(onClick).toBeCalledTimes(7);
  });

  it('onClick event works on 8th button', () => {
    wrapper.find(select('square-button')).at(7).simulate('click');
    expect(onClick).toBeCalledTimes(8);
  });

  it('onClick event works on 9th button', () => {
    wrapper.find(select('square-button')).at(8).simulate('click');
    expect(onClick).toBeCalledTimes(9);
  });
});
