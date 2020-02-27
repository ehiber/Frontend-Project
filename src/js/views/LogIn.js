import React, { useState, useContext, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const LogIn = () => {
	const [inputValues, setInputValues] = useState({
		username: "",
		password: ""
	});
	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);

	const handleChangeInput = e => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value.trim()
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (actions.fetchUserLogIn(inputValues.username, inputValues.password)) {
		} else {
			setError(true);
		}
	};

	return (
		<Fragment>
			<div className="login-gaming">
				<form className="form-login-gaming" onSubmit={handleSubmit}>
					<div className="form-group row">
						<label htmlFor="inputUsername" className="col-sm-5 col-form-label">
							Ingrese Su Usuario o E-Mail
						</label>
						<div className="col-sm-7">
							<input
								type="name"
								className="form-control"
								id="inputUsername"
								placeholder="Usuario o E-Mail"
								onChange={handleChangeInput}
								value={inputValues.username}
								name="username"
							/>
						</div>
					</div>

					<div className="form-group row">
						<label htmlFor="inputPassword" className="col-sm-5 col-form-label">
							Password
						</label>
						<div className="col-sm-7">
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								placeholder="Ingrese su Password"
								onChange={handleChangeInput}
								value={inputValues.password}
								name="password"
							/>
						</div>
					</div>

					<div className="form-group row">
						<div className="col-sm-12">
							<button type="submit" className="btn btn-primary">
								Log in
							</button>
						</div>
						{store.isLogIn && <Redirect to="/" />}
						{error && <div className="col-sm-2">HUBO UN ERROR EN LOS DATOS, REINTENTE</div>}
					</div>
				</form>
			</div>
		</Fragment>
	);
};
