import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardGame = ({ title, plataform, portada, gameLink }) => {
	return (
		<Fragment>
			<div className="col-sm-3">
				<Link to={"/juego/" + gameLink}>
					<img src={portada} />
				</Link>
				<h2>{title}</h2>
				<h3>{plataform.toString()}</h3>
			</div>
		</Fragment>
	);
};

export default CardGame;

CardGame.propTypes = {
	title: PropTypes.string,
	plataform: PropTypes.array,
	portada: PropTypes.string,
	gameLink: PropTypes.string
};
