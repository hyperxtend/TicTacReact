import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import store from './reducers/store';
import NavigationBar from './components/nav-bar';
import NavigationRoutes from './routes/component';
import SiteContainer from './components/site-container';
import { BASE_URL } from './routes/urls';

const root = document.getElementById('root');

render(
  <SiteContainer>
    <Provider store={store}>
      <BrowserRouter basename={BASE_URL}>
        <NavigationBar />
        <NavigationRoutes />
      </BrowserRouter>
    </Provider>
  </SiteContainer>,
  root
);

serviceWorker.unregister();
