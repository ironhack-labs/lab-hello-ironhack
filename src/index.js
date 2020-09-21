import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const container = {
	display: "block",
	maxWidth: "1400px",
};

const mainContent = {
	color: "white",
};

const navbar = {
	display: "flex",
	justifyContent: "space-between",
};

const featuresWrapper = {
	justifyContent: "space-around",
	marginTop: "100px",
	backgroundColor: "white",
	display: "flex",
};

const element = (
	<div>
		<div style={container}>
			<nav style={navbar}>
				<img src={"../images/ironhack-logo.svg"} />
				<img src={"../images/menu-top.svg"} />
			</nav>
			<section style={mainContent}>
				<h1>Say hello to ReactJS</h1>
				<p>You will learn a Frontend framework from scratch, to become an Ninka Developer</p>
			</section>
			<button>Awesome !</button>
		</div>

		<div style={featuresWrapper}>
			<div className='feature'>
				<img src='../images/icon1.png' alt='' />
				<h3 className='title'>Declarative</h3>
				<p className='description'>React makes it painless to create interactive UIs.</p>
			</div>
			<div className='feature'>
				<img src='../images/icon2.png' alt='' />
				<h3 className='title'>Components</h3>
				<p className='description'>Build encapsulated components that manage their state.</p>
			</div>
			<div className='feature'>
				<img src='../images/icon3.png' alt='' />
				<h3 className='title'>Single-Way</h3>
				<p className='description'>A set of immutable values are passed to the component's</p>
			</div>
			<div className='feature'>
				<img src='../images/icon4.png' alt='' />
				<h3 className='title'>JSX</h3>
				<p className='description'>Statically-typed. designed to run on modern browsers.</p>
			</div>
		</div>
	</div>
);

ReactDOM.render(element, document.getElementById("root"));
