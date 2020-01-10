import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			{!store.isLogIn ? (
				<Fragment>
					<div className="container-fluid">
						<div className="row">
							<div className="col welcome-block">
								<h1>LOGO</h1>
								<p> Little Description KLJDFLKJFASKLDFJLÑKADSF </p>
								<Link to="/demo">
									<button className="btn btn-primary">UNETE YA</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="container-fluid">
						<div className="row">
							<div className="col second-block">SELECCIONA TU JUEGO</div>
						</div>
					</div>
					<div className="container-fluid">
						<div className="row">
							<div className="third-block">TORNEOS COMO LOS QUIERAS</div>
						</div>
					</div>
					<div className="container-fluid">
						<div className="row">
							<div className="fourth-block">DINERO REAL</div>
						</div>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<div className="container-fluid">
						<div className="row">
							<div className="col welcome-block">
								<h1>BIENVENIDO</h1>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};
