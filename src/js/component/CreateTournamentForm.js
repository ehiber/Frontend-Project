import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

import { Context } from "../store/appContext";

const CreateTournamentForm = props => {
	const [inputValues, setInputValues] = useState({
		tournament_name: "",
		password: "",
		game_title: "fifa20",
		game_plataform: "ps4",
		deadline: "",
		start_date: "",
		country: "",
		state: "",
		city: "",
		participants: "",
		entrance_fee: "",
		prize: "",
		kind: "league-round_robin"
	});

	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);
	const [isSubmitOk, setIsSubmitOk] = useState(false);
	const regularExpressionName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
	const handleChangeInput = e => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		});
	};

	const validatedName = name => {
		if (name) {
			return regularExpressionName.test(name);
		} else {
			return false;
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (
			validatedName(inputValues.tournament_name) &&
			validatedName(inputValues.country) &&
			validatedName(inputValues.state) &&
			validatedName(inputValues.city)
		) {
			const newTornament = {
				action: "create",
				tournament_name: inputValues.tournament_name,
				password: inputValues.password,
				game_title: inputValues.game_title,
				game_plataform: inputValues.game_plataform,
				deadline: inputValues.deadline,
				start_date: inputValues.start_date,
				country: inputValues.country,
				state: inputValues.state,
				city: inputValues.city,
				participants: inputValues.participants,
				entrance_fee: inputValues.entrance_fee,
				prize: inputValues.prize,
				kind: inputValues.kind
			};

			await actions.fetchRegisterTournament(newTornament);
			setIsSubmitOk(true);
		} else {
			setError(true);
		}
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<div className="form-group row">
					<label htmlFor="inputTournamentNameRegister" className="col-sm-2 col-form-label">
						Nombre del Torneo
					</label>
					<div className="col-sm-10">
						<input
							type="name"
							className="form-control"
							id="inputTournamentNameRegister"
							placeholder="Nombre del Torneo"
							onChange={handleChangeInput}
							value={inputValues.tournament_name}
							name="tournament_name"
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
					<label htmlFor="inputGameTitleRegister" className="col-sm-2 col-form-label">
						Juego
					</label>
					{/* <div className="col-sm-10">
						<input
							type="name"
							className="form-control"
							id="inputGameTitleRegister"
							onChange={handleChangeInput}
							value={inputValues.game_title}
							name="game_title"
						/>
					</div> */}
					<div className="col-sm-10">
						<select
							className="form-control"
							id="inputGameTitleRegister"
							onChange={handleChangeInput}
							value={inputValues.game_plataform}
							name="game_title">
							<option value="fifa20">FIFA 20</option>
						</select>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputGamePlataformRegister" className="col-sm-2 col-form-label">
						Plataforma
					</label>
					{/* <div className="col-sm-10">
						<input
							type="name"
							className="form-control"
							id="inputGamePlataformRegister"
							placeholder="Plataforma"
							onChange={handleChangeInput}
							value={inputValues.game_plataform}
							name="game_plataform"
						/>
					</div> */}
					<div className="col-sm-10">
						<select
							className="form-control"
							id="inputGamePlataformRegister"
							onChange={handleChangeInput}
							value={inputValues.game_plataform}
							name="game_plataform">
							<option value="ps4">PS4</option>
							<option value="xbox-one">Xbox One</option>
							<option value="nintendo-switch">Nintendo Switch</option>
							<option value="pc">PC</option>
							<option value="movil">Móvil</option>
						</select>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputDeadlineRegister" className="col-sm-2 col-form-label">
						Fecha de Cierre de Inscripciones
					</label>
					<div className="col-sm-10">
						<input
							type="date"
							className="form-control"
							id="inputDeadlineRegister"
							placeholder=""
							onChange={handleChangeInput}
							value={inputValues.deadline}
							name="deadline"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputStartDateRegister" className="col-sm-2 col-form-label">
						Fecha de Inicio de Torneo
					</label>
					<div className="col-sm-10">
						<input
							type="date"
							className="form-control"
							id="inputStartDateRegister"
							placeholder=""
							onChange={handleChangeInput}
							value={inputValues.start_date}
							name="start_date"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputCountryRegister" className="col-sm-2 col-form-label">
						Pais
					</label>
					<div className="col-sm-10">
						<input
							type="name"
							className="form-control"
							id="inputCountryRegister"
							placeholder="Pais"
							onChange={handleChangeInput}
							value={inputValues.country}
							name="country"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputStateRegister" className="col-sm-2 col-form-label">
						Estado
					</label>
					<div className="col-sm-10">
						<input
							type="name"
							className="form-control"
							id="inputStateRegister"
							placeholder="Estado"
							onChange={handleChangeInput}
							value={inputValues.state}
							name="state"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputCityRegister" className="col-sm-2 col-form-label">
						Ciudad
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputCityRegister"
							placeholder="Ciudad"
							onChange={handleChangeInput}
							value={inputValues.city}
							name="city"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputParticipantsRegister" className="col-sm-2 col-form-label">
						Participantes
					</label>
					<div className="col-sm-10">
						<input
							type="number"
							className="form-control"
							id="inputParticipantsRegister"
							placeholder="Participantes"
							onChange={handleChangeInput}
							value={inputValues.participants}
							name="participants"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputEntranceFeeRegister" className="col-sm-2 col-form-label">
						Costo de Inscripcion
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputEntranceFeeRegister"
							placeholder="Costo de Inscripcion"
							onChange={handleChangeInput}
							value={inputValues.entrance_fee}
							name="entrance_fee"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputPrizeRegister" className="col-sm-2 col-form-label">
						Premios
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputPrizeRegister"
							placeholder="Premios"
							onChange={handleChangeInput}
							value={inputValues.prize}
							name="prize"
						/>
					</div>
				</div>

				<div className="form-group row">
					<label htmlFor="inputKindRegister" className="col-sm-2 col-form-label">
						Tipo de Torneo
					</label>
					{/* <div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputKindRegister"
							placeholder=""
							onChange={handleChangeInput}
							value={inputValues.kind}
							name="kind"
						/>
					</div> */}
					<div className="col-sm-10">
						<select
							id="inputKindRegister"
							className="form-control"
							onChange={handleChangeInput}
							value={inputValues.kind}
							name="kind">
							<option value="league-round_robin">Round Robin</option>
							<option value="league-round_trip">Liga Ida y Vuelta</option>
						</select>
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Sign in
						</button>
					</div>
					{isSubmitOk && <Redirect to="/" />}
					{error && <div className="col-sm-2">HUBO UN ERROR EN LOS DATOS, REINTENTE</div>}
				</div>
			</form>
		</Fragment>
	);
};

export default CreateTournamentForm;
