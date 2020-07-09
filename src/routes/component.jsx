import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VersePlayer from '../components/verse-player';

import { LandingPage, Computer, Player, ScoreBoard } from './urls';

const NavigationRoutes = () => (
  <Switch>
    <Route path={LandingPage} data-qa="landing-page" />
    <Route path={Computer} data-qa="vs-computer" />
    <Route path={Player} component={VersePlayer} data-qa="vs-player" />
    <Route path={ScoreBoard} data-qa="score-board" />
  </Switch>
);

export default NavigationRoutes;
