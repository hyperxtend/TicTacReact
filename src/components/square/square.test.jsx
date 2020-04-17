import React from 'react';
import { shallow } from 'enzyme';
import Square from './square';

describe('<Square/>', () => {
it('checks if component exists', () => {
  const component = shallow(<Square />);
  expect(component.exists()).toBe(true);
});
});
