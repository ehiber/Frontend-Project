import React, { useState, useEffect, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";
import { Context } from "../store/appContext";
import JuegosPC from "./JuegosPC";
import JuegosXO from "./JuegosXO";
import JuegosM from "./JuegosM";
import JuegosPS from "./JuegosPS";
import JuegosNS from "./JuegosNS";

export const Juegos = props => {
	const { store, actions } = useContext(Context);
	const match = useRouteMatch();
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
						<Link className="nav-item nav-link mx-3" to="/juegos/pc">
							PC
						</Link>
						<Link className="nav-item nav-link mx-3" to="/juegos/xbox-one">
							Xbox One
						</Link>
						<Link className="nav-item nav-link mx-3" to="/juegos/ps4">
							PS4
						</Link>
						<Link className="nav-item nav-link mx-3" to="/juegos/nintendo-switch">
							Nintendo Switch
						</Link>
						<Link className="nav-item nav-link mx-3" to="/juegos/movil">
							Movil
						</Link>
					</div>
				</div>
			</nav>
			<h2>{"Hola soy juegos con el filtro " + match.params.filter}</h2>
			{/* <Switch>
				<Route exact path={match.path + "/:filter"}>
					
				</Route>
				<Route exact path={match.path}>
					<h2>Hola, no hay filtro</h2>
				</Route>
				<Route exact path="/juegos/ps4" component={JuegosPS} />
				<Route exact path="/juegos/nintendo-switch" component={JuegosNS} />
				<Route exact path="/juegos/movil" component={JuegosM} />
				<Route render={() => <h1>Not found!</h1>} />
			</Switch> */}
		</Fragment>
	);
};

// Juegos.propTypes = {
// 	match: PropTypes.object
// };
