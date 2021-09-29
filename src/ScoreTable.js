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
	constructor(props) {
		super(props);
		this.handlePlayAgain = this.handlePlayAgain.bind(this);
	}

	getTotalScore() {
		let totalScore = 0;
		for (let key in this.props.scores) {
			if (this.props.scores[key]) {
				totalScore += this.props.scores[key];
			}
		}
		return totalScore;
	}

	handlePlayAgain() {
		this.props.playAgain();
	}

	render() {
		const { scores, doScore, isRolling } = this.props;

		let scoreDisplay;
		let finalScores = Object.values(scores);
		if (finalScores.every((x) => x !== undefined)) {
			scoreDisplay = (
				<h2 className="score-display">
					You Scored {this.getTotalScore()}!
					<button
						className="replay-btn"
						type="button"
						onClick={this.handlePlayAgain}
					>
						Play Again?
					</button>
				</h2>
			);
		} else {
			scoreDisplay = (
				<h2 className="score-display">Total Score: {this.getTotalScore()}</h2>
			);
		}

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
								desc={ones.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Twos"
								score={scores.twos}
								doScore={(evt) => doScore("twos", twos.evalRoll)}
								desc={twos.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Threes"
								score={scores.threes}
								doScore={(evt) => doScore("threes", threes.evalRoll)}
								desc={threes.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Fours"
								score={scores.fours}
								doScore={(evt) => doScore("fours", fours.evalRoll)}
								desc={fours.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Fives"
								score={scores.fives}
								doScore={(evt) => doScore("fives", fives.evalRoll)}
								desc={fives.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Sixes"
								score={scores.sixes}
								doScore={(evt) => doScore("sixes", sixes.evalRoll)}
								desc={sixes.desc}
								isRolling={isRolling}
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
								desc={threeOfKind.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Four of Kind"
								score={scores.fourOfKind}
								doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
								desc={fourOfKind.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Full House"
								score={scores.fullHouse}
								doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
								desc={fullHouse.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Small Straight"
								score={scores.smallStraight}
								doScore={(evt) =>
									doScore("smallStraight", smallStraight.evalRoll)
								}
								desc={smallStraight.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Large Straight"
								score={scores.largeStraight}
								doScore={(evt) =>
									doScore("largeStraight", largeStraight.evalRoll)
								}
								desc={largeStraight.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Yahtzee"
								score={scores.yahtzee}
								doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
								desc={yahtzee.desc}
								isRolling={isRolling}
							/>
							<RuleRow
								name="Chance"
								score={scores.chance}
								doScore={(evt) => doScore("chance", chance.evalRoll)}
								desc={chance.desc}
								isRolling={isRolling}
							/>
						</tbody>
					</table>
				</section>
				{scoreDisplay}
			</div>
		);
	}
}

export default ScoreTable;
