var React = require('react');
var {Link, IndexLink} = require('react-router');

var Login = () => {
  return (
    <div>
      <div id = "login" >
        <h3>Login:</h3>
      <form>
        <p>
          <label>Username:</label>
          <input type="text"></input>
          <br/>
          <label>Password:</label>
          <input type="password"></input>
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
