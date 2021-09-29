import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

class Dice extends Component {
	render() {
		const { dice, toggleLocked, locked, rollsLeft, isRolling } = this.props;

		return (
			<div className="Dice">
				{dice.map((d, idx) => (
					<Die
						toggleLocked={toggleLocked}
						val={d}
						locked={locked[idx]}
						idx={idx}
						key={idx}
						rollsLeft={rollsLeft}
						isRolling={isRolling}
					/>
				))}
			</div>
		);
	}
}

export default Dice;
