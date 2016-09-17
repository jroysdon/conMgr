import React from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
import * as Actions from '../actions';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class Login extends React.Component {
  handleFormSubmit = (values) => {
    this.props.signInUser(values);
  };

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

  render() {
    const { handleSubmit, fields: { email, password },submitting} = this.props;

    return(
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Log In</h2>

          { this.renderAuthenticationError() }

          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <fieldset className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
              <label className="control-label">Email</label>
              <input {...email} type="text" placeholder="Email" className="form-control" />
              {email.touched ? <div className="help-block">{email.error}</div> : ''}
            </fieldset>
            <fieldset className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
              <label className="control-label">Password</label>
              <input {...password} type="password" placeholder="Password" className="form-control" />
              {password.touched ? <div className="help-block">{password.error}</div> : ''}
            </fieldset>


            <div className="btn-group btn-group-justified" role="group" aria-label="...">
              <div className="btn-group " role="group">
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? <i/> : <i/>}Log in
                </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default"
                  onClick={() => {
                      browserHistory.push('/ResetPassword');
                  }}>
                  Forgot Password
                </button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-info"
                  onClick={() => {
                      browserHistory.push('/SignUp');
                  }}>
                  Register
                </button>
              </div>
            </div>


          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  }
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate},
  mapStateToProps, Actions)(Login);
