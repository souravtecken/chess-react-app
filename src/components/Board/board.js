import React, { Component, Fragment } from "react";
import Square from "./square";
//import initialiseChessBoard from "../../helper/initialiseBoard";

export default class Board extends Component {
	state = {
		board: [
			"r",
			"n",
			"b",
			"q",
			"k",
			"b",
			"n",
			"r",
			"p",
			"p",
			"p",
			"p",
			"p",
			"p",
			"p",
			"p",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			" ",
			"P",
			"P",
			"P",
			"P",
			"P",
			"P",
			"P",
			"P",
			"R",
			"N",
			"B",
			"Q",
			"K",
			"B",
			"N",
			"R",
		],
	};
	clicked = () => {
		alert("Clicked");
	};
	renderSquare = (piece, colour, i, j) => {
		return (
			<Square
				clicked={this.clicked}
				piece={piece}
				colour={colour}
				key={i * 8 + j}
			/>
		);
	};

	render() {
		const isEven = (i) => !(i % 2);
		const board = [];
		for (let i = 0; i < 8; i++) {
			const rows = [];
			for (let j = 0; j < 8; j++) {
				const color =
					(isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
						? "White"
						: "Black";
				rows.push(
					this.renderSquare(this.state.board[i * 8 + j], color, i, j),
				);
			}
			board.push(<div key={64 * i}>{rows}</div>);
		}
		return <Fragment>{board}</Fragment>;
	}
}