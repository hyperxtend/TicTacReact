import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GameFor2Players from '../components/game-for-2-players';

import { LANDING_PAGE, COMPUTER, PLAYER, SCORE_BOARD } from './urls';

const NavigationRoutes = () => (
  <Switch>
    <Route path={LANDING_PAGE} data-qa="landing-page" />
    <Route path={COMPUTER} data-qa="vs-computer" />
    <Route path={PLAYER} component={GameFor2Players} data-qa="vs-player" />
    <Route path={SCORE_BOARD} data-qa="score-board" />
  </Switch>
);

export default NavigationRoutes;
