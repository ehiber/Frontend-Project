const getState = ({ getStore, getActions, setStore }) => {
	const APIurlRegisterUser = "https://3000-e87e17e1-c7d7-4d4a-b494-92d6c1ca3689.ws-us02.gitpod.io/register/";
	const APIurlLogInUser = "https://3000-e87e17e1-c7d7-4d4a-b494-92d6c1ca3689.ws-us02.gitpod.io/login/";
	const APIurlBaseHandleTournament = "https://3000-e87e17e1-c7d7-4d4a-b494-92d6c1ca3689.ws-us02.gitpod.io/user/";
	const APIurlGETTournament = "https://3000-e87e17e1-c7d7-4d4a-b494-92d6c1ca3689.ws-us02.gitpod.io/tournaments/";

	return {
		store: {
			loggedInUser: {},

			games: [
				{
					title: "Clash Royale",
					gameLink: "clash-royale",
					plataform: ["Movil"],
					filterGame: ["movil"],
					id: ""
				},
				{
					title: "Fornite",
					gameLink: "fornite",
					plataform: ["Móvil", "PC", "PS4", "XBOX One"],
					filterGame: ["movil", "pc", "ps4", "xbox-one"],
					id: ""
				},
				{
					title: "FIFA 20",
					gameLink: "fifa20",
					plataform: ["Móvil", "PC", "PS4", "XBOX One", "Nintendo Switch"],
					filterGame: ["movil", "pc", "ps4", "xbox-one", "nintendo-switch"],
					id: ""
				},
				{
					title: "League of Legends",
					gameLink: "league-of-legends",
					plataform: ["PC"],
					filterGame: ["pc"],
					id: ""
				},
				{
					title: "Rocket League",
					gameLink: "league-of-leagends",
					plataform: ["PC", "PS4", "XBOX One", "Nintendo Switch"],
					filterGame: ["pc", "ps4", "xbox-one", "nintendo-switch"],
					id: ""
				}
			],

			tournaments: [],

			isLogIn: false
		},
		actions: {
			fetchRegisterUser: async newUser => {
				const store = getStore();

				let successfulRegistration = false;

				try {
					let response = await fetch(APIurlRegisterUser + newUser["username"], {
						method: "POST",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: JSON.stringify(newUser)
					});

					if (response.ok) {
						successfulRegistration = true;
					} else if (response.stats == 400) {
						console.log("user exists");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}

				setStore({
					loggedInUser: newUser
				});

				return successfulRegistration;
			},

			fetchUserLogIn: async (username, password) => {
				const store = getStore();

				let successfulLogIn = false;

				let body_to_send = {
					password: password
				};

				try {
					let response = await fetch(APIurlLogInUser + username, {
						method: "POST",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: JSON.stringify(body_to_send)
					});

					if (response.status == 200) {
						let responseBody = await response.json();
						let responseBodyJSON = JSON.parse(responseBody["user"]);

						setStore({ loggedInUser: responseBodyJSON });

						setStore({
							isLogIn: true
						});

						successfulLogIn = true;
					} else if (response.status == 400) {
						console.log("CREDENCIALES NO VALIDAS");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}

				return successfulLogIn;
			},

			fetchUserLogOut: () => {
				const store = getStore();

				setStore({
					isLogIn: false
				});
				setStore({
					loggedInUser: {}
				});
			},

			fetchRegisterTournament: async newTornament => {
				const store = getStore();

				let successfulRegistrationTournament = false;

				try {
					let response = await fetch(APIurlBaseHandleTournament + store.loggedInUser.id + "/tournaments", {
						method: "POST",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: JSON.stringify(newTornament)
					});

					if (response.ok) {
						successfulRegistrationTournament = true;
					} else if (response.stats == 400) {
						console.log("hubo un error");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}

				setStore({
					tournaments: [...store.tournaments, newTornament]
				});

				return successfulRegistrationTournament;
			},

			fetchGetTournaments: async () => {
				const store = getStore();
				try {
					let response = await fetch(APIurlGETTournament, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});

					if (response.ok) {
						let responseBody = await response.json();

						let responseBodyJSON = JSON.parse(responseBody["tournaments"]);

						setStore({ tournaments: responseBodyJSON });
					} else if (response.stats == 400) {
						console.log("hubo un error");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
			},

			fetchInscription: async tournamentId => {
				let successfulInscriptionTournament = false;
				let newDate = new Date();
				try {
					let response = await fetch(
						APIurlBaseHandleTournament + store.loggedInUser.id + "/tournaments/" + tournamentId,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/JSON"
							},
							body: JSON.stringify({
								action: "take part",
								status: "sin pagar",
								date_inscription: newDate
							})
						}
					);
					let responsePrueba = response.json;
					console.log(responsePrueba);
					if (response.ok) {
						successfulInscriptionTournament = true;
					} else if (response.status == 400) {
						console.log("hubo un error");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}

				return successfulInscriptionTournament;
			}

			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
