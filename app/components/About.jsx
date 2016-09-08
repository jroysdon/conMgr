import React from 'react';
import Parse from 'Parse';


var currentUser = Parse.User.current();
var userName = "";
if (currentUser){
  userName = currentUser.get("nameFirst");
}else{
  userName = "Guest";
};

var About = () => {

// Add Default and initial States

// add update States

  return (
    <div>
      This is the about component.<br/>
    Welcome {userName}

    </div>
  );
};


module.exports = About;
