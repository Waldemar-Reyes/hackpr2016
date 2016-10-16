import React, { Component, PropTypes } from 'react';
import '../../style/clasificadosPhoto.scss';
import { Link } from 'react-router';

class Clasificados extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
<div>
< img className="clasificados" src="https://c2.staticflickr.com/6/5640/30055029760_0e3391942d_o.png" alt="background image"/>
    <Link to="/signin">
      <img className="moveimage" src="https://c2.staticflickr.com/6/5746/30344147985_b48efacb9c_o.png" alt="ATH Movil Logo"/>
    </Link>
</div>
    	);
      
  }
}

export default Clasificados;

// default props
Clasificados.defaultProps = {};

// propTypes
Clasificados.propTypes = {};