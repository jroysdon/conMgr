import React from 'react';
import { reduxForm } from 'redux-form';
import * as Actions from '../actions';

const divHideStyle = {
  display: 'none'
}

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

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation ) {
    errors.password = 'Passwords do not match';
  }


  if (!values.username) {
      errors.username = 'Required';
    }
    if (values.address && values.address.length > 50) {
      errors.address = 'Must be fewer than 50 characters';
    }

    // if (values.tel.length > 0 && (!/\d{3}-\d{3}-\d{4}/.test(values.tel))) {
    //   errors.tel = 'Phone must match the form "999-999-9999"';
    // }


  return errors;
};

class Signup extends React.Component {
  handleFormSubmit = (values) => {
    this.props.signUpUser(values);
  };

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

  render() {
    const { handleSubmit, fields: { username, email, password, passwordConfirmation,nameFirst,nameLast,address,city,state,zip,tel,tNc}} = this.props;

    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Sign Up</h2>

          { this.renderAuthenticationError() }

          <form onSubmit={handleSubmit(this.handleFormSubmit)}>

            <fieldset className={`form-group ${username.touched && username.invalid ? 'has-error' : ''}`}>
              <label className="control-label">Username</label>
              <input {...username} type="text" placeholder="Username" className="form-control" />
              {username.touched ? <div className="help-block">{username.error}</div> : ''}
            </fieldset>
            <fieldset className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
              <label className="control-label">Password</label>
              <input {...password} type="password" placeholder="Password" className="form-control" />
              {password.touched ? <div className="help-block">{password.error}</div> : ''}
            </fieldset>
            <fieldset className={`form-group ${passwordConfirmation.touched && passwordConfirmation.invalid ? 'has-error' : ''}`}>
              <label className="control-label">Password Confirmation</label>
              <input {...passwordConfirmation} type="password" placeholder="Confirm Password" className="form-control" />
              {passwordConfirmation.touched ? <div className="help-block">{passwordConfirmation.error}</div> : ''}
            </fieldset>
            <fieldset className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
              <label className="control-label">Email</label>
              <input {...email} type="text" placeholder="Email" className="form-control" />
              {email.touched ? <div className="help-block">{email.error}</div> : ''}
            </fieldset>
            <hr/>

              <fieldset className={`form-group ${nameFirst.touched && nameFirst.invalid ? 'has-error' : ''}`}>
                <label className="control-label">First Name</label>
                <input {...nameFirst} type="text" placeholder="First Name" className="form-control" />
                {nameFirst.touched ? <div className="help-block">{nameFirst.error}</div> : ''}
              </fieldset>
              <fieldset className={`form-group ${nameLast.touched && nameLast.invalid ? 'has-error' : ''}`}>
                <label className="control-label">Last Name</label>
                <input {...nameLast} type="text" placeholder="Last Name" className="form-control" />
                {nameLast.touched ? <div className="help-block">{nameLast.error}</div> : ''}
              </fieldset>
              <fieldset className={`form-group ${address.touched && address.invalid ? 'has-error' : ''}`}>
                <label className="control-label">Address</label>
                <input {...address} type="text" placeholder="Address" className="form-control" />
                {address.touched ? <div className="help-block">{address.error}</div> : ''}
              </fieldset>
              <fieldset className={`form-group ${city.touched && city.invalid ? 'has-error' : ''}`}>
                <label className="control-label">City</label>
                <input {...city} type="text" placeholder="City" className="form-control" />
                {city.touched ? <div className="help-block">{city.error}</div> : ''}
              </fieldset>
              <fieldset className={`form-group ${state.touched && state.invalid ? 'has-error' : ''}`}>
                <label className="control-label">State</label>
                <input {...state} type="text" placeholder="State" className="form-control" />
                {state.touched ? <div className="help-block">{state.error}</div> : ''}
              </fieldset>
              <fieldset className={`form-group ${zip.touched && zip.invalid ? 'has-error' : ''}`}>
                <label className="control-label">Zip-code</label>
                <input {...zip} type="text" placeholder="Zip-Code" className="form-control" />
                {zip.touched ? <div className="help-block">{zip.error}</div> : ''}
              </fieldset>
              <fieldset className={`form-group ${tel.touched && tel.invalid ? 'has-error' : ''}`}>
                <label className="control-label">Phone</label>
                <input {...tel} type="text" placeholder="Phone Number (999-999-9999)" className="form-control" />
                {tel.touched ? <div className="help-block">{tel.error}</div> : ''}
              </fieldset>

            <button action="submit" className="btn btn-primary">Sign up</button>
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
  form: 'signup',
  fields: ['username','email', 'password', 'passwordConfirmation','nameFirst','nameLast','address','city','state','zip','tel','tNc'],
  validate
}, mapStateToProps, Actions)(Signup);
