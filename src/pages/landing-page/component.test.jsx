import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from './component';

describe('<LandingPage/>', () => {
  const component = shallow(<LandingPage />);

  it('checks description on landing page', () => {
    const descriptionSubHeader = component.find('h3').children().first().text();
    const descriptionContent =
      'This adaptation of the classic Tic-Tac-Toe where players are able to go through their previous moves, play against a friend or against the computer';
    expect(descriptionSubHeader).toEqual(descriptionContent);
  });

  it('checks sub-header under game description', () => {
    const descriptionSubHeader = component.find('h5').children().first().text();
    const subHeader = 'Choose a selection & start playing!';
    expect(descriptionSubHeader).toEqual(subHeader);
  });
});
