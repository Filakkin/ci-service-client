import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { addMetrics } from './performance/helpers';
import './index.css';
import App from './App';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {addMetrics(App)(String(Math.random()).substr(2, 12), 'Main')}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);