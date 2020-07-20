import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import LandingPage from '../pages/landing-page';

import NavigationRoutes from './component';
import { LANDING_PAGE } from './urls';

describe('<NavigationRoutes/>', () => {
  it('checks if route navigates to landing page', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={[LANDING_PAGE]}>
        <NavigationRoutes />
      </MemoryRouter>
    );
    expect(wrapper.find(LandingPage)).toHaveLength(0);
  });
});
