import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

import { Context } from "../store/appContext";

const RegisterForm = props => {
	const [inputValues, setInputValues] = useState({
		nombre: "",
		apellido: "",
		fecha: "",
		email: "",
		confirmaremail: "",
		usuario: "",
		password: "",
		confirmapassword: "",
		ciudad: "",
		estado: "",
		pais: ""
	});
	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);
	const regularExpressionName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
	const handleChangeInput = e => {
		if (
			e.target.name === "nombre" ||
			e.target.name === "apellido" ||
			e.target.name === "ciudad" ||
			e.target.name === "estado" ||
			e.target.name === "pais"
		) {
			setInputValues({
				...inputValues,
				[e.target.name]: e.target.value.trim()
			});
		} else {
			setInputValues({
				...inputValues,
				[e.target.name]: e.target.value.trim()
			});
		}
	};

	const validatedName = name => {
		if (name) {
			return regularExpressionName.test(name);
		} else {
			return false;
		}
	};

	const validatedEMail = email => {
		if (email) {
			return /[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(email);
		} else {
			return false;
		}
	};

	const validatedUser = user => {
		if (user) {
			return /^[a-z0-9_-]{3,16}$/.test(user);
		} else {
			return false;
		}
	};

	const validatedPassword = password => {
		if (password) {
			return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(password);
		} else {
			return false;
		}
	};

	const validatedConfirm = (param1, param2) => {
		return param1 === param2;
	};

	async const handleSubmit = e => {
		e.preventDefault();

		if (
			validatedName(inputValues.nombre) &&
			validatedName(inputValues.apellido) &&
			validatedName(inputValues.pais) &&
			validatedName(inputValues.ciudad) &&
			validatedName(inputValues.estado) &&
			validatedPassword(inputValues.password) &&
			validatedEMail(inputValues.email) &&
			validatedUser(inputValues.usuario) &&
			validatedConfirm(inputValues.email, inputValues.confirmaremail) &&
			validatedConfirm(inputValues.password, inputValues.confirmapassword)
		) {
			const newUser = {
				nombre: inputValues.nombre,
				apellido: inputValues.apellido,
				fecha: inputValues.fecha,
				email: inputValues.email,
				usuario: inputValues.usuario,
				password: inputValues.password,
				ciudad: inputValues.ciudad,
				estado: inputValues.estado,
				pais: inputValues.pais
			};

			await actions.fetchRegisterUser(newUser);
			actions.fetchUserLogIn(newUser.username, newUser.password);
			
		} else {
			setError(true);
		}
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<div className="form-group row">
					<label htmlFor="inputNombreRegister" className="col-sm-2 col-form-label">
						Nombre
					</label>
					<div className="col-sm-10">
						<input
							type="name"
							className="form-control"
							id="inputNombreRegister"
							placeholder="Nombre"
							onChange={handleChangeInput}
							value={inputValues.nombre}
							name="nombre"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputApellidoRegister" className="col-sm-2 col-form-label">
						Apellido
					</label>
					<div className="col-sm-10">
						<input
							type="name"
							className="form-control"
							id="inputApellidoRegister"
							placeholder="Apellido"
							onChange={handleChangeInput}
							value={inputValues.apellido}
							name="apellido"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputFechaDeNacimientoRegister" className="col-sm-2 col-form-label">
						Fecha de Nacimiento
					</label>
					<div className="col-sm-10">
						<input
							type="date"
							className="form-control"
							id="inputFechaDeNacimientoRegister"
							onChange={handleChangeInput}
							value={inputValues.fecha}
							name="fecha"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputE-MailRegister" className="col-sm-2 col-form-label">
						E-Mail
					</label>
					<div className="col-sm-10">
						<input
							type="email"
							className="form-control"
							id="inputE-MailRegister"
							placeholder="E-Mail"
							onChange={handleChangeInput}
							value={inputValues.email}
							name="email"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputConfirmarE-MailRegister" className="col-sm-2 col-form-label">
						Confirmar E-Mail
					</label>
					<div className="col-sm-10">
						<input
							type="email"
							className="form-control"
							id="inputConfirmarE-MailRegister"
							placeholder="Confirmar E-Mail"
							onChange={handleChangeInput}
							value={inputValues.confirmaremail}
							name="confirmaremail"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputUsuarioRegister" className="col-sm-2 col-form-label">
						Usuario
					</label>
					<div className="col-sm-10">
						<input
							type="user"
							className="form-control"
							id="inputUsuarioRegister"
							placeholder="Ingrese Su Usuario"
							onChange={handleChangeInput}
							value={inputValues.usuario}
							name="usuario"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputPasswordRegister" className="col-sm-2 col-form-label">
						Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							id="inputPasswordRegister"
							placeholder="Password"
							onChange={handleChangeInput}
							value={inputValues.password}
							name="password"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputConfirmPasswordRegister" className="col-sm-2 col-form-label">
						Confirm Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							id="inputConfirmPasswordRegister"
							placeholder="Confirm Password"
							onChange={handleChangeInput}
							value={inputValues.confirmapassword}
							name="confirmapassword"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputCiudadRegister" className="col-sm-2 col-form-label">
						Ciudad
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputCiudadRegister"
							placeholder="Ciudad"
							onChange={handleChangeInput}
							value={inputValues.ciudad}
							name="ciudad"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputEstadoRegister" className="col-sm-2 col-form-label">
						Estado
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputEstadoRegister"
							placeholder="Estado"
							onChange={handleChangeInput}
							value={inputValues.estado}
							name="estado"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputPaisRegister" className="col-sm-2 col-form-label">
						Pais
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputPaisRegister"
							placeholder="Pais"
							onChange={handleChangeInput}
							value={inputValues.pais}
							name="pais"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="textareaDescripcionRegister" className="col-sm-2 col-form-label">
						Descripcion
					</label>
					<div className="col-sm-10">
						<textarea className="form-control" id="textareaDescripcionRegister" rows="3" />
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Sign in
						</button>
					</div>
					{store.isLogIn && <Redirect to="/" />}
					{error && <div className="col-sm-2">HUBO UN ERROR EN LOS DATOS, REINTENTE</div>}
				</div>
			</form>
		</Fragment>
	);
};

export default RegisterForm;
