import React from 'react';
import Parse from 'Parse';
import {Link, IndexLink} from 'react-router';

var Navigation = React.createClass({

  render: function () {


    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              <IndexLink to="/" activeClassName="active-link">Convention Manager</IndexLink>
            </li>
            <li>
              <IndexLink to="/News" activeClassName="active-link">News</IndexLink>
            </li>
            <li>
              <Link to="/About" activeClassName="active-link">About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <Link to="/LoginForm" activeClassName="active-link">Login</Link>
            </li>
            <li className="menu-text">
              Created by <a href="http://www.consept.com" target="_blank">Jim Roysdon</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
