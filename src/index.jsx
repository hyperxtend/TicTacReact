import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import ticTacToeApp from './reducers';
import GamePlay from './components/game/container';
import * as serviceWorker from './serviceWorker';

const store = createStore(ticTacToeApp);
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <GamePlay />
  </Provider>,
  root
);

serviceWorker.unregister();
