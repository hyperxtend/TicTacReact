import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import PageHeader from './component';

describe('<PageHeader/> ', () => {
  const wrapper = shallow(<PageHeader />);
  it('checks if component h1 element exists', () => {
    const defaultHeader = wrapper.find(select('page-title')).exists();
    expect(defaultHeader).toBe(true);
  });
});
