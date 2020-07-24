import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getReduxState, saveReduxState } from './local-storage';

import reducers from './index';

const store = createStore(reducers, getReduxState(), composeWithDevTools());

store.subscribe(() => {
  saveReduxState({
    app: store.getState().app,
  });
});

export default store;
