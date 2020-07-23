import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';

import LandingPage from '../pages/landing-page';
import PlayAgainstComputer from '../pages/play-against-computer';
import PlayAgainstFriend from '../pages/play-against-friend';

import NavigationRoutes from './component';
import { LANDING_PAGE, COMPUTER, FRIEND } from './urls';

const urlPaths = {};

describe('<NavigationRoutes/>', () => {
  beforeAll(() => {
    const wrapper = shallow(<NavigationRoutes />);
    wrapper.find(Route).reduce((_, route) => {
      const routeProps = route.props();
      urlPaths[routeProps.path] = routeProps.component;
      return urlPaths;
    }, {});
  });

  it('checks / url for Landing Page component', () => {
    expect(urlPaths[LANDING_PAGE]).toBe(LandingPage);
  });

  it('checks /Computer url for verse computer component', () => {
    expect(urlPaths[COMPUTER]).toBe(PlayAgainstComputer);
  });

  it('checks /Friend url for verse friend component', () => {
    expect(urlPaths[FRIEND]).toBe(PlayAgainstFriend);
  });
});
