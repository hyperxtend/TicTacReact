import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Game from './components/game';

ReactDOM.render(<Game />, document.getElementById('root'));
serviceWorker.unregister();
