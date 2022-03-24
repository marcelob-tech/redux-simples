import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

function generateNumber(min, max) {
	let number = Math.floor(Math.random() * (max - min + 1)) + min;
	return number;
}
const Sorteio = (props) => {
	const { min, max } = props;
	let number = generateNumber(min,max);

	return (
		<Card title="Sorteio" purple>
		<div className="Sorteio">
			<span>
			<strong>Resultado:</strong>
			<strong>{number}</strong>
			</span>
		</div>
		</Card>
	);
};

function mapStateToProps(state) {
	return {
		min: state.numeros.min,
		max: state.numeros.max,
	};
	}

export default connect(mapStateToProps)(Sorteio);
