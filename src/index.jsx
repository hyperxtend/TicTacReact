import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Game from './components/game';
import * as serviceWorker from './serviceWorker';
import store from './reducers/store';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/HomePage" />
        <Route path="/VSComputer" />
        <Route path="/VSPlayer" component={Game} />
        <Route path="/ScoreBoard" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);

serviceWorker.unregister();
