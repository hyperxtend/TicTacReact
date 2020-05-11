import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import ticTacToeApp from './reducers';
<<<<<<< HEAD:src/index.jsx
import { GamePlay } from './components/game/container';


const store = createStore(ticTacToeApp);
=======
import * as serviceWorker from './serviceWorker';

import GamePlay from './components/game/container';

const store = createStore(ticTacToeApp);
const root = document.getElementById('root');
>>>>>>> fix: Fixed default export and import statements:src/index.js

render(
  <Provider store={store}>
    <GamePlay />
  </Provider>,
<<<<<<< HEAD:src/index.jsx
  document.getElementById('root')
)
=======
  root
);
 serviceWorker.unregister();
>>>>>>> fix: Fixed default export and import statements:src/index.js
