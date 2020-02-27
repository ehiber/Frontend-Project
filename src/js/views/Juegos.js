import React, { useState, useEffect, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link, useRouteMatch, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import CardGame from "../component/CardGame.js";

export const Juegos = props => {
	const { store, actions } = useContext(Context);
	const match = useRouteMatch();
	// let gamesToRender = store.games.filter(games => {
	// 	console.log(games.filterGame, match.params.filter);
	// 	return games.filterGame === match.params.filter;
	// });
	let gamesToRender = store.games.filter(game => {
		let shouldRender = false;
		for (let filter of game.filterGame) {
			if (filter == match.params.filter) {
				return (shouldRender = true);
			}
		}
		return shouldRender;
	});

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

			{match.params.filter == undefined ? (
				<div className="container-fluid">
					<div className="row">
						{store.games.map(game => {
							return (
								<CardGame
									key={Math.random()}
									title={game.title}
									plataform={game.plataform}
									portada="https://via.placeholder.com/180x250"
									gameLink={game.gameLink}
								/>
							);
						})}
					</div>
				</div>
			) : (
				<div className="container-fluid">
					<div className="row">
						{gamesToRender.map(game => {
							return (
								<CardGame
									key={Math.random()}
									title={game.title}
									plataform={game.plataform}
									portada="https://via.placeholder.com/180x250"
									gameLink={game.gameLink}
								/>
							);
						})}
					</div>
				</div>
			)}
		</Fragment>
	);
};

Juegos.propTypes = {
	title: PropTypes.string,
	plataform: PropTypes.array,
	portada: PropTypes.string,
	gameLink: PropTypes.string
};
