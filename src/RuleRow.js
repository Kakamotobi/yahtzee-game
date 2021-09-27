import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
	render() {
		const { score, name, doScore, dice } = this.props;

		const disabled = score !== undefined;
		const noDice = dice.every((x) => undefined);

		return (
			<tr
				className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
				onClick={disabled && noDice ? null : doScore}
			>
				<td className="RuleRow-name">{name}</td>
				<td className="RuleRow-score">{score}</td>
			</tr>
		);
	}
}

export default RuleRow;
