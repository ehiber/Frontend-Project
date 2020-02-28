import React, { Component } from "react";

export const Footer = () => (
	// <!-- Footer -->
	<footer className="page-footer font-small blue-grey lighten-5">
		{/* style="background-color: #21d192;" */}
		<div>
			<div className="container">
				{/* <!-- Grid row--> */}
				<div className="row py-4 d-flex align-items-center">
					{/* <!-- Grid column --> */}
					<div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
						<h6 className="mb-0">Conectate con nuestras redes sociales</h6>
					</div>
					{/* <!-- Grid column -->

				<!-- Grid column --> */}
					<div className="col-md-6 col-lg-7 text-center text-md-right">
						{/* <!-- Facebook --> */}
						<a className="fb-ic">
							<i className="fab fa-facebook-f white-text mr-4"> </i>
						</a>
						{/* <!-- Twitter --> */}
						<a className="tw-ic">
							<i className="fab fa-twitter white-text mr-4"> </i>
						</a>
						{/* <!-- Google +--> */}
						<a className="gplus-ic">
							<i className="fab fa-google-plus-g white-text mr-4"> </i>
						</a>
						{/* <!--Linkedin --> */}
						<a className="li-ic">
							<i className="fab fa-linkedin-in white-text mr-4"> </i>
						</a>
						{/* <!--Instagram--> */}
						<a className="ins-ic">
							<i className="fab fa-instagram white-text"> </i>
						</a>
					</div>
					{/* <!-- Grid column --> */}
				</div>
				{/* <!-- Grid row--> */}
			</div>
		</div>

		{/* <!-- Footer Links --> */}
		<div className="container text-center text-md-left mt-5">
			{/* <!-- Grid row --> */}
			<div className="row mt-3 dark-grey-text">
				{/* <!-- Grid column --> */}
				<div className="col-md-3 col-lg-4 col-xl-3 mb-4">
					{/* <!-- Content --> */}
					<h6 className="text-uppercase font-weight-bold">Gaming</h6>
					{/* style="width: 60px;" */}
					<hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
					<p>Somos la mejor plataforma para que te conviertas en un ProPlayer</p>
				</div>
				{/* <!-- Grid column -->

			<!-- Grid column --> */}
				<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
					{/* <!-- Links --> */}
					<h6 className="text-uppercase font-weight-bold">Vistas</h6>
					{/* style="width: 60px;" */}
					<hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
					<p>
						<a className="dark-grey-text" href="/juegos">
							Juegos
						</a>
					</p>
					<p>
						<a className="dark-grey-text" href="torneos">
							Torneos
						</a>
					</p>
				</div>
				{/* <!-- Grid column -->

			<!-- Grid column --> */}
				<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
					{/* <!-- Links --> */}
					<h6 className="text-uppercase font-weight-bold">Links importantes</h6>
					{/* style="width: 60px;" */}
					<hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
					<p>
						<a className="dark-grey-text" href="/login">
							Tu Cuenta
						</a>
					</p>
				</div>
				{/* <!-- Grid column -->

			<!-- Grid column --> */}
				<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
					{/* <!-- Links --> */}
					<h6 className="text-uppercase font-weight-bold">Contact</h6>
					{/* style="width: 60px;" */}
					<hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
					<p>
						<i className="fas fa-home mr-3" /> Guatire
					</p>
					<p>
						<i className="fas fa-envelope mr-3" /> ehiber5@hotmail.com
					</p>
					<p>
						<i className="fas fa-phone mr-3" /> +58 424 1332977
					</p>
				</div>
				{/* <!-- Grid column --> */}
			</div>
			{/* <!-- Grid row --> */}
		</div>
		{/* <!-- Footer Links -->

		<!-- Copyright --> */}
		<div className="footer-copyright text-center text-black-50 py-3">
			© 2020 Copyright:
			<a className="dark-grey-text" href="/">
				{" "}
				Gaming
			</a>
		</div>
	</footer>
);
