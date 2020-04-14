import React from 'react';
import Board from './board';
import { shallow, mount } from 'enzyme';

it('<Board/> renders without error', () => {
  const squares = Array(9).fill(null);
  shallow(<Board squares={squares} />);
});

it('onClick event works on buttons', () => {
  const onClick = jest.fn(),
   squares = Array(9).fill(null),
   wrapper = mount(<Board squares={squares} onClick={onClick} />);
  wrapper
    .find('button.square')
    .first()
    .simulate('click');
  expect(onClick).toBeCalledWith(0);
});
