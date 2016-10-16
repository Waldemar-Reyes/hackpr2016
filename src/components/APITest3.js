import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class APITest3 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="text-center test-api">
        <div>
          <h2>API test</h2>
          Transaction was successful!
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

export default connect(mapStateToProps)(APITest3);

// default props
APITest3.defaultProps = {};

// propTypes
APITest3.propTypes = {};