import React from 'react';
import { mount } from 'enzyme';

import Board from './board';

describe('<Board/>', () => {

  it('onClick event works on buttons', () => {
    const onClick = jest.fn();
     const squares = Array(9).fill('');
     const wrapper = mount(<Board squares={squares} onClick={onClick} />);
    wrapper
      .find('button.square')
      .first()
      .simulate('click');
    expect(onClick).toBeCalledWith(0);
  });
});
