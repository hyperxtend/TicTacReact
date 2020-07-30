import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getState, saveState } from './local-storage';

import reducers from './index';

const store = createStore(reducers, getState(), composeWithDevTools());

store.subscribe(() => {
  saveState({
    app: store.getState().app,
  });
});

export default store;
