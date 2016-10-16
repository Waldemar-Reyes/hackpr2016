import React, { Component, PropTypes } from 'react';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {

    return (
      <div>
     	<center>
      		<br/>
     		<img src="https://c2.staticflickr.com/6/5472/30309874946_a99c9cf2bc_o.png"/>
      		<br/><br/><br/><br/>
      		<form action="checkout.html">
     			Username: <input type="text" name="user"/><br/><br/>
     			Password: <input type="password" name="password"/><br/><br/>
      			<input class="button buttonOrange" type="submit" value="Log In"/><br/>
     		</form>
			<a href="https://www.athmovil.com/web/registration.htm" target="_blank">
				<button class="button buttonGray">Sign Up</button>
			</a>
			<br/>
			<a href="https://www.athmovil.com/web/forgotPassword.htm" target="_blank">Regain Access
			</a>
		</center>
      </div>
    );
  }
}

export default SignIn;

// default props
SignIn.defaultProps = {};

// propTypes
SignIn.propTypes = {};