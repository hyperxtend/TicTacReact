import React from 'react';
import { shallow, mount } from 'enzyme';

import Board from './board';

describe('<Board/>', () => {
  it('checks if component exists', () => {
    const squares = Array(9).fill(null);
    const component = shallow(<Board squares={squares} />);
    expect(component.exists()).toBe(true);
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
