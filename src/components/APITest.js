import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authRequest } from '../actions';

class APITest extends Component {
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
    const { authRequest } = this.props.actions;
    const { username, password, phone, amount } = this.state;
    return (
      <div className="text-center test-api">
        <div>

          <h2>API test</h2>
          <label htmlFor="">Usrename</label>
          <input type="text"
                 placeholder="Enter Username"
                 onChange={(e) => this.setState({ username: e.target.value })}
                 value={this.state.username}
          />

          <label htmlFor="">Password</label>
          <input type="password"
                 placeholder="Enter Password"
                 onChange={(e) => this.setState({ password: e.target.value })}
                 value={this.state.password}
          />


          <label htmlFor="">Telefono</label>
          <input type="text"
                 placeholder="787-555-5555"
                 onChange={(e) => this.setState({ phone: e.target.value })}
                 value={this.state.phone}
          />

          <br/>
          <label htmlFor="">ammount</label>
          <input type="text"
                 placeholder="Enter Ammount"
                 onChange={(e) => this.setState({ amount: e.target.value })}
                 value={this.state.amount}
          />
          <br/>
          <button onClick={() => authRequest(
            username,
            password,
            phone,
            amount
          )}>
            Buy now!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appReducer,
    token: state.appReducer.token,
  }
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ authRequest }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(APITest);

// default props
APITest.defaultProps = {};

// propTypes
APITest.propTypes = {};