import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../component/RegisterForm";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<RegisterForm />
					</div>
				</div>
			</div>
		</Fragment>
	);
};
