// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const App = props => {
  return (
    <div>
      { props.children }
    </div>
  );
};

export default App;