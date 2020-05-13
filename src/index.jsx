import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import ticTacToeApp from './reducers';
<<<<<<< HEAD
<<<<<<< HEAD:src/index.jsx
import { GamePlay } from './components/game/container';


const store = createStore(ticTacToeApp);
=======
import * as serviceWorker from './serviceWorker';

=======
import * as serviceWorker from './serviceWorker';
>>>>>>> e3b0c9b03b5930a9799f3ef2b3d483eadb8941eb
import GamePlay from './components/game/container';

const store = createStore(ticTacToeApp);
const root = document.getElementById('root');
<<<<<<< HEAD
>>>>>>> fix: Fixed default export and import statements:src/index.js
=======
>>>>>>> e3b0c9b03b5930a9799f3ef2b3d483eadb8941eb

render(
  <Provider store={store}>
    <GamePlay />
  </Provider>,
<<<<<<< HEAD
<<<<<<< HEAD:src/index.jsx
  document.getElementById('root')
)
=======
  root
);
 serviceWorker.unregister();
>>>>>>> fix: Fixed default export and import statements:src/index.js
=======
  root
);
 serviceWorker.unregister();
>>>>>>> e3b0c9b03b5930a9799f3ef2b3d483eadb8941eb
