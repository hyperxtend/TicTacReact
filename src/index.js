import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import ticTacToeApp from './reducers';

import { GamePlay } from './components/game/container';


const store = createStore(ticTacToeApp)

render(
  <Provider store={store}>
    <GamePlay />
  </Provider>,
  document.getElementById('root')
)