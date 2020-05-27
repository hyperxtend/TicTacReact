import React from 'react';
import { shallow } from 'enzyme';

import Game from './component';

describe('<Game/>', () => {
  it('checks if component exists', () => {
    const component = shallow(<Game />);
    expect(component.exists()).toBe(true);
  });
});
