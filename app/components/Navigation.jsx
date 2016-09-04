var React = require('react');
var Parse = require('Parse');
var {Link, IndexLink} = require('react-router');

Parse.initialize("cmparseserver");
Parse.serverURL = "https://cmparseserver.herokuapp.com/parse";

// var currentUser = Parse.User.current();
 var welcomePrompt = "";
//
// if (currentUser) {
//     var welcomePrompt = () => {
//       return (
//         <div>
//           <Link to="/Login" activeClassName="active-link">Login</Link>
//         </div>
//       )
//     }
// } else {
//     // show the signup or login page
//     var welcomePrompt = () => {
//       return (
//         <div>
//           <Link to="/Login" activeClassName="active-link">Login</Link>
//         </div>
//       )
//
//     }
// };

var Navigation = () => {
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
            {welcomePrompt}
          </li>
          <li className="menu-text">
            Created by <a href="http://www.consept.com" target="_blank">Jim Roysdon</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
