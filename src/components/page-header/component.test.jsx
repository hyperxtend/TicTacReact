import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import PageHeader from './component';

describe('<PageHeader/> ', () => {
  const wrapper = shallow(<PageHeader />);
  it('checks if component contain h1 element', () => {
    const defaultHeader = wrapper
      .find(select('page-title'))
      .hasClass('page-title');
    expect(defaultHeader).toBe(true);
  });
});
