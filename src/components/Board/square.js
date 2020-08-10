import React from "react";
import classes from "./Square.module.css";

export default function Square(props) {
	return (
		<button
			onClick={props.clicked}
			className={[classes.Square, classes[props.colour]].join(" ")}
		>
			{props.piece}
		</button>
	);
}
