import React from 'react';
import Parse from 'Parse';
import {Link, IndexLink} from 'react-router';

var LoginForm = React.createClass({

  onSubmit: function (e){
     e.preventDefault();
    var currentUser = Parse.User.current();
    if (!currentUser){
      var username = this.refs.username.value;
      var password = this.refs.password.value;
      Parse.User.logIn(username, password, {
        success: function(user) {
          // Do stuff after successful login.
          debugger;
          console.log("Signed in");
        },
        error: function(username, error) {
          // The login failed. Check error to see why.
          debugger;
          this.refs.errMsg.innerHTML = error.message;
        }
      });
    } else {
      console.log(currentUser.get("nameFirst"));
    };
  },

  render: function (){
    return(
      <div>
        <div id = "login" >
          <h3>Login:</h3>
        <form onSubmit={this.onSubmit} ref="form">
          <p>
            <label>Username:</label>
            <input type="text" name="username" ref="username" placeholder="Username" defaultValue = "jroysdon"></input>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" ref="password" placeholder="Password" defaultValue = "123"></input>
            <br/>
            <button className="button expanded">Submit</button>
            <br/>
            <Link to="/ForgotPassword" activeClassName="active-link">Reset Password</Link> / <Link to="/RegisterUser" activeClassName="active-link">Register</Link>
          </p>
          <div id="errMsg"></div>

        </form>
        </div>
      </div>
  );
}
});


module.exports = LoginForm;
