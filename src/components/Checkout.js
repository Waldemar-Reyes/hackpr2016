import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from'redux';
import { connect } from'react-redux';
import { confirmTransaction } from '../actions';

class Checkout extends Component {

	static contextTypes = {
		router: PropTypes.object
	};

	componentWillReceiveProps(nextProps) {
		const status = nextProps.status;
		if (status === 'COMPLETED') {
			this.context.router.push('/confirmation');
		}
	}

	componentWillMount() {
		const status = this.props.status;
		if (status === 'COMPLETED') {
			this.context.router.push('/confirmation');
		}
	}

	render() {
		const { confirmTransaction } = this.props.actions;
		const { token, phone, amount } = this.props.appState;

		return (
			<div>
			<center>
			<img src="https://c2.staticflickr.com/9/8273/30260796921_e72350b1d4_o.jpg" width="300px" height="66px"/>
			<br/><br/>
			<div>
			<p>Item: Guitarra Electro Acustica Yamaha APX 500</p>
			<img src="https://c3.staticflickr.com/9/8139/30053101010_5c23463146_o.jpg" alt="guitar" style={{width:"250px"}}/>
			<p>Precio $180</p>
			<p>Cuerdas de Metal. Excelente sonido tanto amplificada como sin amplificar. Una excelente guitarra a un precio regalado.<br/>
			Equalizador yamaha y afinador integrado. Super comoda la accion. Esta en buenas condiciones ready para tocar donde quieras.<br/>
			Textea para fotos o info.. Precio $180  Super Barata</p>
			</div>
			<p>Total: <b>$180.00</b></p>
			<button onClick={() => confirmTransaction(
				token,
				phone,
				amount
				)} className="button buttonOrangeShort">Confirm Payment</button><br/>
			<button className="button buttonGray" font>Cancel</button>
			</center>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		appState: state.appReducer,
		status: state.appReducer.status
	}
}

const mapDispatchToProps = (dispatch) => {
	return { actions: bindActionCreators({ confirmTransaction }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

// default props
Checkout.defaultProps = {};

// propTypes
Checkout.propTypes = {};