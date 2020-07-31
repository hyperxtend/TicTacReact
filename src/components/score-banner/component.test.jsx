import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import ScoreBanner from './component';

describe('<ScoreBanner/>', () => {
  const wrapper = shallow(<ScoreBanner />);

  it('check menu selection header', () => {
    const menuHeader = wrapper
      .find(select('banner-head-draws'))
      .children()
      .first()
      .text();
    expect(menuHeader).toEqual('Draws:');
  });
});
