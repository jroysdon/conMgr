var React = require('react');
var Parse = require('Parse');
var {Link, IndexLink} = require('react-router');


var LoginForm = React.createClass({

onSubmit: function (e){
  },
  render: function (){
    return(
      <div>
        <div id = "login" >
          <h3>Login:</h3>
        <form onSubmit={this.onSubmit} ref="form">
          <p>
            <label>Username:</label>
            <input type="text" name="username" ref="username" placeholder="Username"></input>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" ref="password" placeholder="Password"></input>
            <br/>
            <button className="button expanded">Submit</button>
            <br/>
            <Link to="/ForgotPassword" activeClassName="active-link">Reset Password</Link> / <Link to="/RegisterUser" activeClassName="active-link">Register</Link>
          </p>
          <div id="errMsg">Error message will go here</div>

        </form>
        </div>
      </div>
  );
}
});


module.exports = LoginForm;
