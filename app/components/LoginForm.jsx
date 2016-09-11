

import React from 'react';
import { reduxForm } from 'redux-form';

class LoginForm extends React.Component {
  // handleFormSubmit = (values) => {
  //   console.log(values);
  // };

  handleFormSubmit: function (values) {
    console.log(values);
      this.props.signInUser(values);
  
  };


  render() {
    const { handleSubmit, fields: { username, password }} = this.props;
    return(
      <div>
          <h3>Login:</h3>
          <form onSubmit={handleSubmit(this.handleFormSubmit)} ref="LoginForm">
            <fieldset className="form-group">
            <label>Username:</label>
            <input {...username} type="text" name="username" ref="username" placeholder="Username" defaultValue = "jroysdon"></input>
            </fieldset>

             <fieldset className="form-group">
            <label>Password:</label>
            <input {...password} type="password" name="password" ref="password" placeholder="Password" defaultValue = "123"></input>
            </fieldset>
            <button className="button expanded">Submit</button>
            <br/>
          <div id="errMsg"></div>
        </form>
      </div>
  );
}
};

export default reduxForm({
  form: 'LoginForm',
  fields: ['username', 'password']
})(LoginForm);
