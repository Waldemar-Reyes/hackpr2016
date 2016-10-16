import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authRequest } from '../actions';

class APITest extends Component {
  render() {
    const { authRequest } = this.props.actions;
    console.log('app props', this.props);
    return (
      <div className="text-center test-api">
        <div>

          <h2>API test</h2>

          <label htmlFor="">Telefono</label>
          <input type="text"
                 placeholder="787-763-3541"
                 value="787-763-3541"
          />

          <br/>
          <label htmlFor="">ammount</label>
          <input type="text"
                 placeholder="24.45"
                 value="24.45"
          />
          <br/>
          <button onClick={authRequest}>
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
  return { actions: bindActionCreators({ authRequest }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(APITest);

// default props
APITest.defaultProps = {};

// propTypes
APITest.propTypes = {};