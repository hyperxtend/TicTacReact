import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import TicTacToeApp from './reducers';
import Game from './components/game';
import * as serviceWorker from './serviceWorker';

const store = createStore(TicTacToeApp);
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  root
);

serviceWorker.unregister();
