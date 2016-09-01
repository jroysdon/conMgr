var React = require('react');
var Parse = require('Parse');

var {Link, IndexLink} = require('react-router');

var ForgotPassword = React.createClass({

  onSubmit: function(e){
    e.preventDefault();
  },
  render: function(){
    return (
      <div id="pwReset" >
        <h3>Reset Password</h3>
        <form ref="form" onSubmit = {this.onSubmit} className="password-reset">
          <p>Please enter your email address you used to register. If the email is valid in our system, an email will be sent with a link to reset your password.</p>
          <label>Email:</label>
          <input placeholder="E-Mail" ref="email" type="text" defaultValue="jroysdon@gmail.com" />
          <br/>
          <button className = "button exanded">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = ForgotPassword;
