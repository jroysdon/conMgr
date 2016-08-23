var React = require('react');
var Parse = require('Parse');
var {Link, IndexLink} = require('react-router');

Parse.initialize("ddddddd","hhhhh");
var currentUser = Parse.User.current();

function tryLogin(){
  debugger;
  Parse.User.logIn("myname", "mypass", {
    success: function(user) {
      // Do stuff after successful login.

    },
    error: function(user, error) {
      // The login failed. Check error to see why.
      alert(error);
    }
  });
}
var Login = () => {
  return (
    <div>
      <div id = "login" >
        <h3>Login:</h3>
      <form onSubmit="tryLogin();">
        <p>
          <label>Username:</label>
          <input type="text" name="username"></input>
          <br/>
          <label>Password:</label>
          <input type="password" name="password"></input>
          <br/>
          <input type="submit"/>
          <input type="reset"/>
          <br/>
          <Link to="/ForgotPassword" activeClassName="active-link">Reset Password</Link> / <Link to="/RegisterUser" activeClassName="active-link">Register</Link>
        </p>
        <div id="errMsg">Error message will go here</div>

      </form>
      </div>
    </div>
  );
};


module.exports = Login;
