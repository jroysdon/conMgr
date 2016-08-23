var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Footer = require('Footer');
var About = require('About');
var News = require('News');
var Login = require('Login');
var ForgotPassword = require('ForgotPassword');
var RegisterUser = require('RegisterUser');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path = "About" component={About}/>
      <Route path = "News" component={News}/>
      <Route path = "Login" component={Login}/>
      <Route path = "ForgotPassword" component={ForgotPassword}/>
      <Route path = "RegisterUser" component={RegisterUser}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
