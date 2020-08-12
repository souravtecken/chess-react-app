import React from "react";
import classes from "./Square.module.css";

export default function Square(props) {
	const lol = { backgroundColor: "red" };
	return (
		<button
			onClick={props.clicked}
			className={[classes.Square, classes[props.colour]].join(" ")}
		>
			{props.piece}
		</button>
	);
}
