import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../actions';

import NavBar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class Header extends React.Component {
  handleSignout() {
    this.props.signOutUser();
  }

  renderName(){
    // debugger;
    return[
      // this.State.nameFirst
    ]

  }

  renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/favorites">My Favorites</Link>
        </li>,

        <li className="dropdown" key={3}>
          <a href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">
              Welcome
              <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li key={3.1}>
              <Link className="nav-link" to="/EditProfile">
                Edit Profile
              </Link>
            </li>
            <li key={3.2}>
              <Link className="nav-link" to="/Convention">
                Edit Convention
              </Link>
            </li>
              <li key={3.5} role="separator" className="divider"></li>
            <li key={3.9}>
              <a className="nav-link" href="#" onClick={() => this.handleSignout()}>Sign Out</a>
            </li>
          </ul>
        </li>

      ]
    } else {
      return [
        <li className="nav-item" key={4}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>,
        <li className="nav-item" key={5}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Convention Mgr</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            { this.renderAuthLinks() }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(Header);
