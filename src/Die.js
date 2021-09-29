import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
	static defaultProps = {
		numWords: ["one", "two", "three", "four", "five", "six"],
		val: 5,
	};

	constructor(props) {
		super(props);

		this.handleToggleLocked = this.handleToggleLocked.bind(this);
	}

	handleToggleLocked() {
		this.props.toggleLocked(this.props.idx);
	}

	render() {
		const { numWords, val, locked, isRolling, rollsLeft } = this.props;

		let classNames = `Die fas fa-dice-${numWords[val - 1]} fa-5x `;
		if (locked) classNames += "Die-locked";
		if (isRolling && !locked) classNames += "Die-rolling";

		return (
			<i
				className={classNames}
				onClick={isRolling || rollsLeft === 0 ? null : this.handleToggleLocked}
				disabled={rollsLeft === 0}
			/>
		);
	}
}

export default Die;
