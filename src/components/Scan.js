import React, { Component, PropTypes } from 'react';
import QRCode from 'qrcode.react';

class Scan extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2>Scanner</h2>
        <QRCode value="http://facebook.github.io/react/"/>,

      </div>
    );
  }
}

export default Scan;

// default props
Scan.defaultProps = {};

// propTypes
Scan.propTypes = {};