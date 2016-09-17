import React from 'react';
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

  renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/favorites">My Favorites</Link>
        </li>,
        <li className="nav-item" key={2}>
          <a className="nav-link" href="#" onClick={() => this.handleSignout()}>Sign Out</a>
        </li>,

        <li className="dropdown" key={3}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li key={3.1}><a href="#">Action</a></li>
            <li key={3.2}><a href="#">Another action</a></li>
            <li key={3.3}><a href="#">Something else here</a></li>
            <li key={3.4} role="separator" className="divider"></li>
            <li key={3.5}><a href="#">Separated link</a></li>
            <li key={3.6} role="separator" className="divider"></li>
            <li key={3.7}><a href="#">One more separated link</a></li>
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
            <Link className="navbar-brand" to="/">Res Mgr</Link>
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
