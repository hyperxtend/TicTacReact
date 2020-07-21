import React from 'react';
import { shallow } from 'enzyme';

import Square from './component';

describe('<Square/>', () => {
  it('checks if component exists', () => {
    const component = shallow(<Square />);
    expect(component.exists()).toBe(true);
  });
});
