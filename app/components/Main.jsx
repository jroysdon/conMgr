import React from 'react';
import Parse from 'Parse';
import Navigation from 'Navigation';



Parse.initialize("cmparseserver");
Parse.serverURL = "https://cmparseserver.herokuapp.com/parse";

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="row">
        <div className = "column small-centered medium-6 large-4">
          {props.children}
            <hr/>
              List data will go here

        </div>
      </div>

    </div>
  );
}

module.exports = Main;
