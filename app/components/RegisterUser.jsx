var React = require('react');
var ReactDOM = require('react-dom')
var Parse = require('Parse');
var {Link, IndexLink} = require('react-router');

var RegisterUser = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    var cPassword = this.refs.cPassword.value;
    var email = this.refs.email.value;
    var nameFirst = this.refs.nameFirst.value;
    var nameLast = this.refs.nameLast.value;
    var address = this.refs.address.value;
    var city = this.refs.city.value;
    var state = this.refs.state.value;
    var zip = this.refs.zip.value;
    var tel = this.refs.tel.value;
//    var dob = this.refs.dob.value;
    var tNc = this.refs.tNc.checked;

    if (password != cPassword || password ===""){
      alert("Password is empty or Passwords do not match");
      return;
    }

    if(!tNc){
      alert("You must agree to the Terms and Conditions before registering");
      return;

    }

Parse.initialize("conMgr","giggle");
Parse.serverURL = 'http://localhost:1337/parse';
var user = new Parse.User();
user.set("username", username);
user.set("password", password);
user.set("email", email);

// other fields can be set just like with Parse.Object
user.set("nameFirst", nameFirst);
user.set("nameLast", nameLast);
user.set("address", address);
user.set("city", city);
user.set("state", state);
user.set("zipcode", zip);
user.set("phoneNumber", tel);
user.set("tNc", tNc);
user.set("emailverified",false)
//user.set("dob", dob);

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

  },
 render: function() {
  return (
    <div>
      <h2>Register </h2>
      <p></p>
         <form ref="form" onSubmit={this.onSubmit}>
               <input defaultValue = "jroysdon" type="text" name="username" ref="username" id="username" placeholder="Enter a Username"/>
               <input defaultValue ="123" name="password" ref="password" id="password" type="password" placeholder="Enter a Password" />
               <input defaultValue ="123" id="cPassword" ref="cPassword" name="cPassword" type="password" placeholder="Confirm your password"/>
               <input defaultValue = "jroysdon@gmail.com" type="email" ref="email" name="email" id="email"placeholder="Email (must be Unique)"/>
               <input defaultValue = "Jim" type="text" ref="nameFirst" name="nameFirst" id="nameFirst"placeholder="First Name"/>
               <input defaultValue = "Roysdon" type="text" ref="nameLast" name="nameLast" id="nameLast" placeholder="Last Name"/>
               <input defaultValue = "123 Here" type="text" ref="address" name="address" id="address" placeholder="Address, including Apt or Suite #"/>
               <input defaultValue = "Tampa" type="text" ref="city" name="city" id="city" placeholder="City"/>
               <select name="state" ref="state" id="state" defaultValue="FL">
                   <option value="AL">Select a State</option>
                   <option value="AL">Alabama</option>
                   <option value="AK">Alaska</option>
                   <option value="AZ">Arizona</option>
                   <option value="AR">Arkansas</option>
                   <option value="CA">California</option>
                   <option value="CO">Colorado</option>
                   <option value="CT">Connecticut</option>
                   <option value="DE">Delaware</option>
                   <option value="DC">District Of Columbia</option>
                   <option value="FL" >Florida</option>
                   <option value="GA">Georgia</option>
                   <option value="HI">Hawaii</option>
                   <option value="ID">Idaho</option>
                   <option value="IL">Illinois</option>
                   <option value="IN">Indiana</option>
                   <option value="IA">Iowa</option>
                   <option value="KS">Kansas</option>
                   <option value="KY">Kentucky</option>
                   <option value="LA">Louisiana</option>
                   <option value="ME">Maine</option>
                   <option value="MD">Maryland</option>
                   <option value="MA">Massachusetts</option>
                   <option value="MI">Michigan</option>
                   <option value="MN">Minnesota</option>
                   <option value="MS">Mississippi</option>
                   <option value="MO">Missouri</option>
                   <option value="MT">Montana</option>
                   <option value="NE">Nebraska</option>
                   <option value="NV">Nevada</option>
                   <option value="NH">New Hampshire</option>
                   <option value="NJ">New Jersey</option>
                   <option value="NM">New Mexico</option>
                   <option value="NY">New York</option>
                   <option value="NC">North Carolina</option>
                   <option value="ND">North Dakota</option>
                   <option value="OH">Ohio</option>
                   <option value="OK">Oklahoma</option>
                   <option value="OR">Oregon</option>
                   <option value="PA">Pennsylvania</option>
                   <option value="RI">Rhode Island</option>
                   <option value="SC">South Carolina</option>
                   <option value="SD">South Dakota</option>
                   <option value="TN">Tennessee</option>
                   <option value="TX">Texas</option>
                   <option value="UT">Utah</option>
                   <option value="VT">Vermont</option>
                   <option value="VA">Virginia</option>
                   <option value="WA">Washington</option>
                   <option value="WV">West Virginia</option>
                   <option value="WI">Wisconsin</option>
                   <option value="WY">Wyoming</option>
                 </select>
               <input defaultValue = "33618" type="text" ref="zip" name="zip" id="zip" placeholder="Zip Code"/>
               <input defaultValue = "813-555-1212" type="tel" ref="tel" name="tel" id="tel" placeholder="Telephone Number"/>
                <p>
             <input type="checkbox" ref="tNc" name="tNc" id="tNc"/  >
             <label for="checkbox"> By checking this box, you agree to abide by our <a href="">terms and conditions</a>.</label>
             <br/>
             <button className = "button expanded" >Submit</button>
             <br/>
           </p>
         </form>
     </div>
   );
 }
 });


module.exports = RegisterUser;
