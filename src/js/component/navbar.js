import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
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

			<div className="collapse navbar-collapse" id="navbarNav">
				<div className="navbar-nav list-group-horizontal">
					<Link className="nav-item nav-link mx-3 active" to="/">
						Juegos
					</Link>
					<Link className="nav-item nav-link mx-3 active" to="/">
						Torneos
					</Link>
					<Link className="nav-item nav-link mx-3 active" to="/">
						Otra Vista
					</Link>
				</div>
			</div>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success">Registrate</button>
				</Link>

				<Link to="/demo">
					<button className="btn btn-primary">Ingresa</button>
				</Link>
			</div>
		</nav>
	);
};
