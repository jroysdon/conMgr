var React = require('react');
var {Link, IndexLink} = require('react-router');

var RegisterUser = () => {
  return (
    <div>
      <h2>Register </h2>
      <p></p>
         <form>
           <table>
             <tr>
               <td><label for="username">Username: </label></td>
               <td><input type="text" name="username" id="username" placeholder="Enter a Username"/></td>
               </tr>
             <tr>
               <td><label for="password">Password: </label></td>
               <td><input name="password" id="password" type="password" placeholder="Enter a Password" /></td>
             </tr>
             <tr>
               <td><label for="cPassword">Confirm Password: </label></td>
               <td><input id="cPassword" name="cPassword" type="password" placeholder="Confirm your password"/></td>
             </tr>
             <tr>
               <td><label for="email">Email:</label></td>
               <td><input type="email" name="email" id="email"placeholder="Email (must be Unique)"/></td>
             </tr>
             <tr>
               <td><label for="nameFirst">First Name:</label></td>
               <td><input type="text" name="nameFirst" id="nameFirst"placeholder="First Name"/></td>
             </tr>
             <tr>
               <td><label for="nameLast">Last Name:</label></td>
               <td><input type="text" name="nameLast" id="nameLast" placeholder="Last Name"/></td>
             </tr>
             <tr>
               <td><label for="address">Address:</label></td>
               <td><input type="text" name="address" id="address" placeholder="Address, including Apt or Suite #"/></td>
             </tr>
             <tr>
               <td><label for="city">City:</label></td>
               <td><input type="text" name="city" id="city" placeholder="City"/></td>
             </tr>
             <tr>
               <td><label for="state">State:</label></td>
               <td><select name="state" id="state">
                   <option value="AL">Alabama</option>
                   <option value="AK">Alaska</option>
                   <option value="AZ">Arizona</option>
                   <option value="AR">Arkansas</option>
                   <option value="CA">California</option>
                   <option value="CO">Colorado</option>
                   <option value="CT">Connecticut</option>
                   <option value="DE">Delaware</option>
                   <option value="DC">District Of Columbia</option>
                   <option value="FL">Florida</option>
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
                 </select></td>
             </tr>
             <tr>
               <td><label for="zip">Zip:</label></td>
               <td><input type="text" name="zip" id="zip" placeholder="Zip Code"/></td>
             </tr>
             <tr>
               <td><label for="tel">Tel:</label></td>
               <td><input type="tel" name="tel" id="tel" placeholder="Telephone Number"/></td>
             </tr>
           </table>
           <p>
             <input type="checkbox" name="checkbox" id="checkbox"/>
             <label for="checkbox"> By checking this box, you agree to abide by our <a href="">terms and conditions</a>.</label>
             <br/>
             <input type="submit"/>
             <input type="reset"/>
             <br/>
           </p>
         </form>
     </div>
  );
};

module.exports = RegisterUser;
