import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'qa-utilities';

import ScoreBoard from './component';

describe('<ScoreBoard/>', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ScoreBoard />);
  });

  it('checks if table contains for winning rate ', () => {
    const winningRatePlayerX = wrapper
      .find(select('winning-rate-player-x'))
      .children()
      .first()
      .text();
    expect(winningRatePlayerX).toEqual('%');
  });
});
