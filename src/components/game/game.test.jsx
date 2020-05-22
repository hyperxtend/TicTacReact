import React from 'react';
import { shallow } from 'enzyme';

import Game from './component';

describe('<Game/>', () => {
  it('checks if component exists', () => {
    const component = shallow(<Game />);
    expect(component.exists()).toBe(true);
  });

  it('status is correct', () => {
    const comp = shallow(<Game />);
    const firstPlayer = comp.find('div.gameInfo').children().first().text();
    expect(firstPlayer).toEqual('Next player is X');
  });
});
