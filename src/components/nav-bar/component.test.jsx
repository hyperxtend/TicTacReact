import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from './component';

describe('<NavigationBar />', () => {
  const component = shallow(<NavigationBar />);

  it('checks if navigation bar exists', () => {
    expect(component.exists()).toBe(true);
  });
});
