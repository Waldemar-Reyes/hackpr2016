import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authRequest } from '../actions';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      phone: '787-378-4608',
      amount: 12.99,
      username: 'evertec',
      password: 'evertec',
    }
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    const token = nextProps.token;
    if (token) {
      this.context.router.push('/APITest2');
    }
  }

  componentWillMount() {
    const token = this.props.token;
    if (token) {
      this.context.router.push('/APITest2');
    }
  }

  render() {
    const { authRequest } = this.props.action;
    const { username, password, phone, amount } = this.state;
    return (
      <div>
        <center>
          <br/>
          <img src="https://c2.staticflickr.com/6/5472/30309874946_a99c9cf2bc_o.png"/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
            <p>Username:</p>
            <input
              type="text"
              name="user"
              value={username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <br/>
            <br/>

            <p>Password:</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <br/>
            <br/>

            <button
              className="button buttonOrange"
              type="submit"
              onClick={(e) => authRequest(username, password, phone, amount)}
            >
              Log in
            </button>
            <br/>
          </div>
          <br/>
          <button className="button buttonGray">Sign Up</button>
          <br/>
          <button>
            Regain Access
          </button>
        </center>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    appState: state.appReducer,
    token: state.appReducer.token,
  }
};
const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators({ authRequest }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// default props
SignIn.defaultProps = {};

// propTypes
SignIn.propTypes = {};