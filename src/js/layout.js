import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Register } from "./views/Register.js";
import { LogIn } from "./views/LogIn.js";
import { Juegos } from "./views/Juegos";
import { Torneos } from "./views/Torneos";
import injectContext from "./store/appContext";
import OneGame from "./views/OneGame";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import CreateTournamentForm from "./component/CreateTournamentForm";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={LogIn} />
						<Route path="/juegos/:filter?" component={Juegos} />
						<Route exact path="/juego/:game" component={OneGame} />
						<Route path="/torneos" component={Torneos} />
						<Route path="/create-tournament" component={CreateTournamentForm} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
