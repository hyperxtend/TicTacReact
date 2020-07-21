import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import MenuSelection from './component';

describe('<MenuSelection/>', () => {
  const wrapper = shallow(<MenuSelection />);

  it('check menu selection header', () => {
    const menuHeader = wrapper
      .find(select('game-selection-header'))
      .children()
      .first()
      .text();
    expect(menuHeader).toEqual('Game Selection');
  });
});
