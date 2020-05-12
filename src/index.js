import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import serviceWorker from './serviceWorker';
import Game from './components/game';

ReactDOM.render(<Game />, document.getElementById('root'));
serviceWorker.unregister();
