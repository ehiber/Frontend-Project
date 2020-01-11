const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [
				{
					nombre: "Ehiber",
					apellido: "Graterol",
					fecha: "01-02-1994",
					email: "ehiber5@hotmail.com",
					usuario: "ehiber5",
					password: "12345abC!",
					ciudad: "Guatire",
					estado: "Miranda",
					pais: "Venezuela"
				},
				{
					nombre: "Juan",
					apellido: "Perez",
					fecha: "01-02-1994",
					email: "juanperez@hotmail.com",
					usuario: "juanperez",
					password: "123456aB!",
					ciudad: "Guatire",
					estado: "Miranda",
					pais: "Venezuela"
				}
			],

			isLogIn: false
		},
		actions: {
			fetchRegisterUser: user => {
				const store = getStore();

				setStore({
					users: [...store.users, user]
				});
			},

			fetchUserLogIn: (username, password) => {
				const store = getStore();

				for (let i = 0; i < store.users.length; i++) {
					if (
						(store.users[i].usuario === username || store.users[i].email === username) &&
						store.users[i].password === password
					) {
						setStore({
							isLogIn: true
						});
						return true;
					}
				}
				return false;
			},

			fetchUserLogOut: () => {
				const store = getStore();

				setStore({
					isLogIn: false
				});
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
