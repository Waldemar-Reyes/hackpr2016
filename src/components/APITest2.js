import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { confirmTransaction } from '../actions';

class APITest2 extends Component {
  constructor() {
    super();
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    const status = nextProps.status;
    if (status === 'COMPLETED') {
      this.context.router.push('/APITest3');
    }
  }

  componentWillMount() {
    const status = this.props.status;
    if (status === 'COMPLETED') {
      this.context.router.push('/APITest3');
    }
  }

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
    status: state.appReducer.status,
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