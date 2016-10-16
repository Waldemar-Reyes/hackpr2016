import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Confirmation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="text-center test-api">
      <center>
      <img src="https://c2.staticflickr.com/9/8273/30260796921_e72350b1d4_o.jpg" width="300px" height="66px"/>
      <br/><br/>
      <img src="https://c2.staticflickr.com/6/5517/29716653873_04ccfc252f_o.png" width="150px" height="150px"/>
      <br/><br/>
      <p>Your transfer has been sent </p>
      <p>You sent $180.00 to User</p>
      <br/>
      <Link to='/clasificados'>
      <button class="button buttonGray">Close</button>
      </Link>
      </center>
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

export default connect(mapStateToProps)(Confirmation);

// default props
Confirmation.defaultProps = {};

// propTypes
Confirmation.propTypes = {};