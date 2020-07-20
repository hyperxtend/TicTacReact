import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/landing-page';
import PlayAgainstFriend from '../pages/play-against-friend';
import ScoreBoard from '../pages/score-board';

import { LANDING_PAGE, COMPUTER, PLAYER, SCORE_BOARD } from './urls';

const NavigationRoutes = () => (
  <Switch>
    <Route
      exact
      path={LANDING_PAGE}
      component={LandingPage}
      data-qa="landing-page"
    />
    <Route path={COMPUTER} data-qa="vs-computer" />
    <Route path={PLAYER} component={PlayAgainstFriend} data-qa="vs-player" />
    <Route path={SCORE_BOARD} component={ScoreBoard} data-qa="score-board" />
  </Switch>
);

export default NavigationRoutes;
