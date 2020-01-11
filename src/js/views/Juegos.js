import React, { useState, useEffect, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Juegos = props => {
	const { store, actions } = useContext(Context);
	return (
		<Fragment>
			<div className="jumbotron">
				<h1 className="display-4">JUEGOS </h1>
			</div>

			<nav className="navbar navbar-expand-md navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav list-group-horizontal">
						<Link className="nav-item nav-link mx-3" to="/Juegos">
							Todos
						</Link>
						<Link className="nav-item nav-link mx-3" to="/Juegos/pc">
							PC
						</Link>
						<Link className="nav-item nav-link mx-3" to="/Juegos/xbox-one">
							Xbox One
						</Link>
						<Link className="nav-item nav-link mx-3" to="/Juegos/ps4">
							PS4
						</Link>
						<Link className="nav-item nav-link mx-3" to="/Juegos/nintendo-switch">
							Nintendo Switch
						</Link>
						<Link className="nav-item nav-link mx-3" to="movil">
							Movil
						</Link>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

Juegos.propTypes = {
	match: PropTypes.object
};
