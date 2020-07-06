import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import TicTacToeApp from './reducers';
import Game from './components/game';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/nav-bar';

const store = createStore(TicTacToeApp);
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
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
