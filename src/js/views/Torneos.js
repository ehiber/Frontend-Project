import React, { useState, useEffect, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Torneos = props => {
	const { store, actions } = useContext(Context);

	let history = useHistory();

	const handleClick = () => {
		if (store.isLogIn == false) {
			history.push("/login");
		} else {
			history.push("/create-tournament");
		}
	};

	return (
		<Fragment>
			<div className="row">
				<div className="col-6">
					<div className="jumbotron">
						<h1 className="display-4">CREA UN TORNEO </h1>

						<hr className="my-4" />

						<span onClick={handleClick} className="btn btn-primary btn-lg" href="#" role="button">
							QUIERO ORGANIZAR
						</span>
					</div>
				</div>
				<div className="col-6">
					<div className="jumbotron">
						<h1 className="display-4">PARTICIPA EN UN TORNEO </h1>

						<hr className="my-4" />

						<Link to="/juegos">
							<span className="btn btn-primary btn-lg" href="#" role="button">
								QUIERO PARTICIPAR
							</span>
						</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Torneos.propTypes = {
	match: PropTypes.object
};
