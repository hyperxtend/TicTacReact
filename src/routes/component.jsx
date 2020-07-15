import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PlayAgainstFriend from '../components/play-against-friend';

import { LANDING_PAGE, COMPUTER, PLAYER, SCORE_BOARD } from './urls';

const NavigationRoutes = () => (
  <Switch>
    <Route path={LANDING_PAGE} data-qa="landing-page" />
    <Route path={COMPUTER} data-qa="vs-computer" />
    <Route path={PLAYER} component={PlayAgainstFriend} data-qa="vs-player" />
    <Route path={SCORE_BOARD} data-qa="score-board" />
  </Switch>
);

export default NavigationRoutes;
