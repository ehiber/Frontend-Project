import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Register } from "./views/Register.js";
import { LogIn } from "./views/LogIn.js";
import { Juegos } from "./views/Juegos";
import JuegosPC from "./views/JuegosPC";
import JuegosXO from "./views/JuegosXO";
import { Torneos } from "./views/Torneos";
import injectContext from "./store/appContext";
import Ernesto from "./views/Ernesto";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

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
						<Route path="/ernesto/:clue" component={Ernesto} />
						<Route path="/torneos" component={Torneos} />

						{/* <Route exact path="/juegos/ruta" component={JuegosPC} />
						<Route exact path="/juegos/xbox-one" component={JuegosXO} /> */}

						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
