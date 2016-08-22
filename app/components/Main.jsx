var React = require('react');
var Navigation = require('Navigation');
var Footer = require('Footer');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

module.exports = Main;
