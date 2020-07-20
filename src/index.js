import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
	<div className="container">
		<section className="bg-dark main">
			<div className="icons flex sp-btw">
				<img
					src="/images/ironhack-logo.svg"
					alt="logo ironhack"
					className="icon"
				/>
				<img src="/images/menu-top.svg" alt="burger icon" className="icon" />
			</div>

			<div className="box-title">
				<h1 className="title">Say hello to ReactJS</h1>
				<p className="box-subtitle">
					You will learn a Frontend framework from scratch, to become a Ninja
					Developper.
				</p>
			</div>

			<div className="btn">Awesome!</div>
		</section>

		<section className="articles flex centered">
			<div className="box">
				<img
					src="/images/icon1.png"
					alt="Article illustration"
					className="illustration"
				/>
				<h2 className="subtitle">Declarative</h2>
				<p className="content">
					React makes it painless to create interactive UIs.
				</p>
			</div>
			<div className="box">
				<img
					src="/images/icon2.png"
					alt="Article illustration"
					className="illustration"
				/>
				<h2 className="subtitle">Components</h2>
				<p className="content">
					Build encapsulated components that manage their state.
				</p>
			</div>
			<div className="box">
				<img
					src="/images/icon3.png"
					alt="Article illustration"
					className="illustration"
				/>
				<h2 className="subtitle">Single-Way</h2>
				<p className="content">
					A set of immutable values are passed to the component's.
				</p>
			</div>
			<div className="box">
				<img
					src="/images/icon4.png"
					alt="Article illustration"
					className="illustration"
				/>
				<h2 className="subtitle">JSX</h2>
				<p className="content">
					Statically-typed designed to run on modern browsers.
				</p>
			</div>
		</section>
	</div>,

	document.getElementById("root")
);
