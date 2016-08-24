var React = require('react');
var Parse = require('Parse');

var {Link, IndexLink} = require('react-router');

var ForgotPassword = React.createClass({

  onSubmit: function(e){
    e.preventDefault();
    Parse.initialize("conMgr","giggle");
    Parse.serverURL = 'http://localhost:1337/parse';
    var email = this.refs.email.value;
    Parse.User.requestPasswordReset(email, {
      success: function() {
      // Password reset request was sent successfully
      alert("Success");
      },
      error: function(error) {
        // Show the error message somewhere
        alert("Error: " + error.code + " " + error.message);
      }
    });

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
