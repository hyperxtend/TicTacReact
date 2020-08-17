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
  const { app } = store.getState();

  saveStateToLocalStorage({
    app,
  });
});

export default store;
