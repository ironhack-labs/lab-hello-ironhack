import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "./Menu.js";

// render(content, destination);
ReactDOM.render(
	<div className="content">
		<Menu />

		<div className="container p-5">
			<div className="col-sm-6 text-light">
				<h1 className="display-4">Say Hello to React JS</h1>
				<p className="lead">
					You will learn a Frontend framework from scratch, to become a ninja
					developer who see typos everywhere !
				</p>
				<Button variant="light">Get Started</Button>
			</div>
		</div>

		<section className="p-4 m-0 h-100 bg-white">
			<Row>
				{/*  NOT DRY.. */}
				<Col className="text-center">
					<img
						src="../images/icon1.png"
						className="mx-auto d-block h-50 mb-2"
					/>
					<h5>Declarative</h5>
					<p className="text-muted text-justify lead">
						React makes it painless to create interactive UIs.
					</p>
				</Col>

				<Col className="text-center">
					<img
						src="../images/icon2.png"
						className="mx-auto d-block h-50 mb-2"
					/>
					<h5>Component</h5>
					<p className="text-muted text-justify lead">
						Build encapsulated component that manage their state.
					</p>
				</Col>

				<Col className="text-center">
					<img
						src="../images/icon3.png"
						className="mx-auto d-block h-50 mb-2"
					/>
					<h5>Component</h5>
					<p className="text-muted text-justify lead">
						A set of immutable values are passed to the component's.{" "}
					</p>
				</Col>

				<Col className="text-center">
					<img
						src="../images/icon4.png"
						className="mx-auto d-block h-50 mb-2"
					/>
					<h5>JSX</h5>
					<p className="text-muted text-justify lead">
						Statically-typed, designed to run on modern browsers.
					</p>
				</Col>
			</Row>
		</section>
	</div>,
	document.getElementById("root")
);
