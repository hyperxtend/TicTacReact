import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from './board';

describe('Board', () => {
  it('renders without error', () => {
    const squares = Array(9).fill(null);
    shallow(<Board squares={squares} />);
  });

  it('onClick event works on buttons', () => {
    const onClick = jest.fn();
     const squares = Array(9).fill(null);
     const wrapper = mount(<Board squares={squares} onClick={onClick} />);
    wrapper
      .find('button.square')
      .first()
      .simulate('click');
    expect(onClick).toBeCalledWith(0);
  });
});
