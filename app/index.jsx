import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './containers/App';

import Main from 'Main';
import About from 'About';
import News from 'News';
import LoginForm from 'LoginForm';
import ForgotPassword from 'ForgotPassword';
import RegisterUser from 'RegisterUser';
import WelcomePrompt from 'WelcomePrompt';

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
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path = "About" component={About}/>
        <Route path = "News" component={News}/>
        <Route path = "LoginForm" component={LoginForm}/>
        <Route path = "ForgotPassword" component={ForgotPassword}/>
        <Route path = "RegisterUser" component={RegisterUser}/>
      </Route>
    </Router>
    <App/>
  </Provider>,
  document.getElementById('app')
);
