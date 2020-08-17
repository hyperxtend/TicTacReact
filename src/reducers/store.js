import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  getStateFromLocalStorage,
  saveStateToLocalStorage,
} from '../services/local-storage';

import reducers from './index';

const store = createStore(
  reducers,
  getStateFromLocalStorage(),
  composeWithDevTools()
);

store.subscribe(() => {
  const { playerXScore, playerOScore, drawScore } = store.getState().app.status;

  saveStateToLocalStorage({
    app: { playerXScore, playerOScore, drawScore },
  });
});

export default store;
