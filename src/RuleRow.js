import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
	render() {
		const { score, doScore, name, desc, isRolling } = this.props;

		const disabled = score !== undefined;

		return (
			<tr
				className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
				onClick={disabled || isRolling ? null : doScore}
			>
				<td className="RuleRow-name">{name}</td>
				<td className="RuleRow-score">{disabled ? score : desc}</td>
			</tr>
		);
	}
}

export default RuleRow;
