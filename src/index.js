import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './components/game';
import './index.css';

ReactDOM.render(<Game />, document.getElementById('root'));
serviceWorker.unregister();
