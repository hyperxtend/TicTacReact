import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import VerseComputer from './components/verse-computer';
import * as serviceWorker from './serviceWorker';
import store from './reducers/store';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <VerseComputer />
  </Provider>,
  root
);

serviceWorker.unregister();
