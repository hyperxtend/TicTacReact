import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import TicTacToeApp from './reducers';
import * as serviceWorker from './serviceWorker';
import PageNavigation from './components/nav-bar';

const store = createStore(TicTacToeApp);
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <PageNavigation />
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);

serviceWorker.unregister();
