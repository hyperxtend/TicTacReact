import React from 'react';
import { shallow } from 'enzyme';

import MenuSelection from './component';

describe('<MenuSelection/>', () => {
  const component = shallow(<MenuSelection />);

  it('check menu selection header', () => {
    const menuHeader = component
      .find('h3.game-selection-header')
      .children()
      .first()
      .text();
    expect(menuHeader).toEqual('Game Selection');
  });
});
