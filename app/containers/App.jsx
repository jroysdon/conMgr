import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Footer from 'Footer';
import About from 'About';
import News from 'News';
import LoginForm from 'LoginForm';
import ForgotPassword from 'ForgotPassword';
import RegisterUser from 'RegisterUser';
import WelcomePrompt from 'WelcomePrompt';

// var App  = React.createClass({
class App extends React.Component{

  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path = "About" component={About}/>
          <Route path = "News" component={News}/>
          <Route path = "LoginForm" component={LoginForm}/>
          <Route path = "ForgotPassword" component={ForgotPassword}/>
          <Route path = "RegisterUser" component={RegisterUser}/>
        </Route>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return{
     venues: state.venues
  };
}

export default connect(mapStateToProps)(App);

//module.exports = App;
