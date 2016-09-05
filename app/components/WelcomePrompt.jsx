var React = require('react');
var {Link, IndexLink} = require('react-router');

var Parse = require('Parse');
Parse.initialize("cmparseserver");
Parse.serverURL = "https://cmparseserver.herokuapp.com/parse";


// var welcomePrompt = "";
//
// Parse.User.logIn("jroysdon@gmail.com" , "12345678").then (function (user){
//   welcomePrompt = Parse.User.current();
//   }, function error (err){
//       console.error(err.message);
//   }
// );
var currentUser = Parse.User.current();
var loginMenu = "";
var nameFirst = "";
//debugger;
if (currentUser) {
  nameFirst = currentUser.get("nameFirst");
    loginMenu = "Welcome " + nameFirst;
  } else {
    loginMenu = '<Link to=\"/Login\" activeClassName=\"active-link\">Login</Link>'
  };
var WelcomePrompt = React.createClass( {
  getDefaultProps: function (){
    return{
     loginMenu: '<Link to=\"/Login\" activeClassName=\"active-link\">Login</Link>'
        // loginMenu: 'Hi'
     }
  },
  getInitialState: function (){
    return {
     loginMenu: this.props.loginMenu
      //  loginMenu: '<Link to=\"/Login\" activeClassName=\"active-link\">Login</Link>'
    }
 },
  handleNewData: function (updates) {
    this.setState(updates);
  },

  render: function() {
// var loginMenu = '<Link to=\"/Login\" activeClassName=\"active-link\">Login</Link>';
   var loginMenu = this.state.loginMenu;
    return (
      <div ref="loginMenu" >
        {loginMenu}{nameFirst}
      </div>
    )}
});

module.exports = WelcomePrompt;
