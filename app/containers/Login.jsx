import React from 'react';
import { reduxForm } from 'redux-form';

class Login extends React.Component {
  handleFormSubmit = (values) => {
    console.log(values);
  };

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return(
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Log In</h2>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <fieldset className="form-group">
              <label>Email</label>
              <input {...email} type="text" placeholder="Email" className="form-control" />
            </fieldset>

            <fieldset className="form-group">
              <label>Password</label>
              <input {...password} type="password" placeholder="Password" className="form-control" />
            </fieldset>

            <button action="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(Login);
