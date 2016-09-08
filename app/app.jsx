import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import {Provider}  from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
