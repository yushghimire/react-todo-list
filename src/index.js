import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.css';
import store from './utils/store';
import Routes from './routes/index.js';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,

    document.getElementById('root')
  );
};

render();
