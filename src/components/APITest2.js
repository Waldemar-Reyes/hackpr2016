import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { confirmTransaction } from '../actions';

class APITest2 extends Component {
  // Send Token, phone amount
  constructor() {
    super();
  }

  static contextTypes = {
    router: PropTypes.object
  };

  // componentWillReceiveProps(nextProps) {
  //   const token = nextProps.token;
  //   if (token) {
  //     this.context.router.push('/APITest2');
  //   }
  // }
  //
  // componentWillMount() {
  //   const token = this.props.token;
  //   if (token) {
  //     this.context.router.push('/APITest2');
  //   }
  // }

  render() {
    const { confirmTransaction } = this.props.actions;
    const { token, phone, amount } = this.props.appState;
    return (
      <div className="text-center test-api">
        <div>

          <h2>API test</h2>
          <button onClick={() => confirmTransaction(
            token,
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
  }
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ confirmTransaction }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(APITest2);

// default props
APITest2.defaultProps = {};

// propTypes
APITest2.propTypes = {};