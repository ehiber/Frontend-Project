import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";
import logo from "../../img/LOGO_GAMING.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			{!store.isLogIn ? (
				<Fragment>
					<div className="container-fluid home-box">
						<div className="row">
							<div className="col welcome-block">
								<h1 className="headline-welcome-block">¿CANSAD@ DE JUGAR Y NO GANAR DINERO?</h1>
								<p className="p-welcome-block">Cambiemos eso</p>
								<p className="p-welcome-block">TOMA EL CONTROL</p>
								<Link to="/register">
									<button className="btn btn-primary">UNETE YA</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="container-fluid home-box">
						<div className="row second-block">
							<div className="col-sm-6 img-second-block">
								<img src={logo} />
							</div>
							<div className="col-sm-6 text-second-block">
								<h2>¿Qué es Gaming?</h2>
								<p>
									Somos una plataforma cazatalentos dedicada a los eSports (competiciones de
									videojuegos) a través de torneos organizados por Gaming o cualquier usuario
								</p>
							</div>
						</div>
					</div>
					<div className="container-fluid home-box">
						<div className="row third-block">
							<div className="col-sm-6 img-third-block">
								<img src={logo} />
							</div>
							<div className="col-sm-6 text-third-block">
								<h2>TORNEOS COMO LOS QUIERAS</h2>
								<p>
									Organiza o participa en torneos de manera clásica o personalizada en diversas
									plataformas
								</p>
							</div>
						</div>
					</div>
					<div className="container-fluid home-box">
						<div className="row fourth-block">
							<div className="col-sm-6 img-fourth-block">
								<img src={logo} />
							</div>
							<div className="col-sm-6 text-fourth-block">
								<h2>DINERO REAL</h2>
								<p>
									Juega con dinero real para obtener recompesas en dinero real, eventualmente habran
									torneos gratuitos con recompesas en dinero real, esperalos.
								</p>
							</div>
						</div>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<div className="container-fluid">
						<div className="row">
							<div className="col welcome-block">
								<h1>
									BIENVENIDO {store.loggedInUser.name} {store.loggedInUser.last_name}
								</h1>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};
