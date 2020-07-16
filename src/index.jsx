import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import store from './reducers/store';
import LandingPage from './components/landing-page';
import PlayAgainstFriend from './components/play-against-friend';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/HomePage" component={LandingPage} />
        <Route path="/VSComputer" />
        <Route path="/VSPlayer" component={PlayAgainstFriend} />
        <Route path="/ScoreBoard" />
        <LandingPage />
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);

serviceWorker.unregister();
