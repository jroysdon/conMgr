var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div id="pwReset" >
      <h3>Reset Password</h3>
      <p>Please enter your email address you used to register. If the email is valid in our system, an email will be sent with a link to reset your password.</p>
        <label>Email:</label>
        <input type="text"/>
        <br/>
        <input  type="submit"/>
        <input type="Reset"/>
    </div>
  );
};

module.exports = Navigation;
