import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/landing-page';
import PlayAgainstFriend from '../pages/play-against-friend';
import PlayAgainstComputer from '../pages/play-against-computer';

import { LANDING_PAGE, COMPUTER, FRIEND, SCORE_BOARD } from './urls';

const NavigationRoutes = () => (
  <Switch>
    <Route
      exact
      path={LANDING_PAGE}
      component={LandingPage}
      data-qa="landing-page"
    />
    <Route
      path={COMPUTER}
      component={PlayAgainstComputer}
      data-qa="vs-computer"
    />
    <Route path={FRIEND} component={PlayAgainstFriend} data-qa="vs-friend" />
    <Route path={SCORE_BOARD} data-qa="score-board" />
  </Switch>
);

export default NavigationRoutes;
