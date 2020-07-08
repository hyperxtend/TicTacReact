import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import './index.css';
import PageNavigation from './components/nav-bar';
import * as serviceWorker from './serviceWorker';
import store from './reducers/store';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <PageNavigation />
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);

serviceWorker.unregister();
