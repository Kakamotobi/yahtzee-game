import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance,
} from "./Rules";

class ScoreTable extends Component {
	render() {
		const { scores, doScore } = this.props;

		return (
			<div className="ScoreTable">
				<section className="ScoreTable-section">
					<h2>Upper</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Ones"
								score={scores.ones}
								doScore={(evt) => doScore("ones", ones.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Twos"
								score={scores.twos}
								doScore={(evt) => doScore("twos", twos.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Threes"
								score={scores.threes}
								doScore={(evt) => doScore("threes", threes.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Fours"
								score={scores.fours}
								doScore={(evt) => doScore("fours", fours.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Fives"
								score={scores.fives}
								doScore={(evt) => doScore("fives", fives.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Sixes"
								score={scores.sixes}
								doScore={(evt) => doScore("sixes", sixes.evalRoll)}
								dice={this.props.dice}
							/>
						</tbody>
					</table>
				</section>
				<section className="ScoreTable-section ScoreTable-section-lower">
					<h2>Lower</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Three of Kind"
								score={scores.threeOfKind}
								doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Four of Kind"
								score={scores.fourOfKind}
								doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Full House"
								score={scores.fullHouse}
								doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Small Straight"
								score={scores.smallStraight}
								doScore={(evt) =>
									doScore("smallStraight", smallStraight.evalRoll)
								}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Large Straight"
								score={scores.largeStraight}
								doScore={(evt) =>
									doScore("largeStraight", largeStraight.evalRoll)
								}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Yahtzee"
								score={scores.yahtzee}
								doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
								dice={this.props.dice}
							/>
							<RuleRow
								name="Chance"
								score={scores.chance}
								doScore={(evt) => doScore("chance", chance.evalRoll)}
								dice={this.props.dice}
							/>
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
