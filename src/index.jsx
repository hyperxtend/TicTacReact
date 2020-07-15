import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import LandingPage from './components/landing-page';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/HomePage" component={LandingPage} />
        <Route path="/VSComputer" />
        <Route path="/VSPlayer" component={Game} />
        <Route path="/ScoreBoard" />
        <LandingPage />
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);

serviceWorker.unregister();
