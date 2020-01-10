import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleLogOut = e => {
		actions.fetchUserLogOut();
	};

	return (
		<Fragment>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">LOGO</span>
				</Link>

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
						<Link className="nav-item nav-link mx-3" to="/">
							Juegos
						</Link>
						<Link className="nav-item nav-link mx-3" to="/">
							Torneos
						</Link>
						<Link className="nav-item nav-link mx-3" to="/">
							Otra Vista
						</Link>
					</div>
				</div>

				<div className="ml-auto">
					{!store.isLogIn ? (
						<Fragment>
							<Link to="/Register">
								<button className="btn btn-success">Registrate</button>
							</Link>

							<Link to="/LogIn">
								<button className="btn btn-primary">Ingresa</button>
							</Link>
						</Fragment>
					) : (
						<Link to="/">
							<button onClick={handleLogOut} className="btn btn-primary">
								Log Out
							</button>
						</Link>
					)}
				</div>
			</nav>
		</Fragment>
	);
};
