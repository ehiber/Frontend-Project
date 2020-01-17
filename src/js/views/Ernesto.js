import React from "react";
import { useRouteMatch } from "react-router-dom";

const Ernesto = props => {
	const match = useRouteMatch();
	return <h2>{"Hello, this is params: " + match.params.clue}</h2>;
};

export default Ernesto;
