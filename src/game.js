import React, { Component } from "react";
import Board from "./components/Board/board";
import "./index.css";

class Game extends Component {
	render() {
		return (
			<div className="Board">
				<Board />
			</div>
		);
	}
}

export default Game;
