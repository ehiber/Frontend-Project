import React, { useState, useContext, Fragment } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const OneGame = props => {
	const { store, actions } = useContext(Context);
	const match = useRouteMatch();
	let history = useHistory();
	let oneGameObject = "";
	const [show, setShow] = useState({
		firstParam: false,
		secondParam: false
	});

	const handleClose = () =>
		setShow({
			firstParam: false,
			secondParam: false
		});
	const handleShow = secondParam =>
		setShow({
			firstParam: true,
			secondParam: secondParam
		});

	store.games.map(game => {
		if (game.gameLink == match.params.game) {
			oneGameObject = game.title;
		}
	});

	const handleClick = async tournamentId => {
		if (store.isLogIn == false) {
			history.push("/login");
		} else {
			let isOk = await actions.fetchInscription(tournamentId);

			if (isOk) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		}
	};

	return (
		<Fragment>
			<div className="jumbotron">
				<h1 className="display-4">{oneGameObject} </h1>
			</div>

			<table className="table table-striped">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Privado</th>
						<th scope="col">Plataforma</th>
						<th scope="col">Cierra</th>
						<th scope="col">Fecha de Inicio</th>
						<th scope="col">Pais</th>
						<th scope="col">Estado</th>
						<th scope="col">Ciudad</th>
						<th scope="col">Entrada</th>
						<th scope="col">Costo Inscripcion</th>
						<th scope="col">Premios</th>
						<th scope="col">Tipo de Torneo</th>
						<th scope="col">Inscribete</th>
					</tr>
				</thead>
				<tbody>
					{store.tournaments.map(tournament => {
						if (tournament.game_title == match.params.game)
							return (
								<tr key={Math.random()}>
									<th scope="row">{tournament.tournament_name}</th>
									<td>{tournament.password == "" || tournament.password == null ? "No" : "Si"}</td>
									<td>{tournament.game_plataform}</td>
									<td>{tournament.deadline}</td>
									<td>{tournament.start_date}</td>
									<td>{tournament.country}</td>
									<td>{tournament.state}</td>
									<td>{tournament.city}</td>
									<td>{tournament.participants}</td>
									<td>{tournament.entrance_fee}</td>
									<td>{tournament.prize}</td>
									<td>{tournament.kind}</td>
									<td>
										<button
											onClick={() => {
												handleClick(tournament.id);
											}}
											className="btn btn-primary btn-lg"
											href="#"
											role="button">
											Inscribirme
										</button>
									</td>
								</tr>
							);
					})}
				</tbody>
			</table>

			<Modal show={show.firstParam} onHide={handleClose}>
				{show.secondParam ? (
					<Fragment>
						<Modal.Header closeButton>
							<Modal.Title>Felicidades</Modal.Title>
						</Modal.Header>
						<Modal.Body>Te Has INSCRITO con éxito</Modal.Body>
						<Modal.Footer>
							<Button variant="primary" onClick={handleClose}>
								OK!
							</Button>
						</Modal.Footer>
					</Fragment>
				) : (
					<Fragment>
						<Modal.Header closeButton>
							<Modal.Title>Sigue intentando</Modal.Title>
						</Modal.Header>
						<Modal.Body>No has podido inscribirte, intenta en otro torneo!</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Ok :(
							</Button>
						</Modal.Footer>
					</Fragment>
				)}
			</Modal>
		</Fragment>
	);
};

export default OneGame;
