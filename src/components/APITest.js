import React, { Component, PropTypes } from 'react';

class APITest extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {

    return (
      <div className="text-center test-api">
        <form action="">
          <h2>API test</h2>
          <label htmlFor="">Telefono</label>
          <input type="text"/>
          <br/>
          <label htmlFor="">ammount</label>
          <input type="text"/>
          <br/>
          <button>Buy now!</button>
        </form>
      </div>
    );
  }
}

export default APITest;

// default props
APITest.defaultProps = {};

// propTypes
APITest.propTypes = {};