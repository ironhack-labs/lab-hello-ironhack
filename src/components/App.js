import React, {Component} from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Feature from "./Feature";

class App extends Component {
	render() {
		const features = [
			{
				img: "../images/icon1.png",
				title: "Declarative",
				text: "React makes it painless to create interaective UIs.",
			},
			{
				img: "../images/icon2.png",
				title: "Components",
				text: "Build encapsulated components that manage their state.",
			},
			{
				img: "../images/icon3.png",
				title: "Single-Way",
				text: "A set of immutable values are passed to the components.",
			},
			{
				img: "../images/icon4.png",
				title: "JSX",
				text: "Statically-typed, designed to run on modern browsers.",
			},
		];
		const listFeatures = features.map((feature, index) => (
			<Feature
				key={index}
				img={feature.img}
				title={feature.title}
				text={feature.text}
			/>
		));
		return (
			<div className="content">
				<Navbar />
				<section id="hero" className="dark-bg">
					<h1>
						Say hello to <br />
						ReactJS
					</h1>
					<p className="sub-h1">
						You will learn a Frontend framework from scratch, to become a Ninja
						Developer.
					</p>
					<Button />
					<div className="images">
						<img src="../images/react-logo.svg" alt="React logo" />
						<img src="../images/react-logo.svg" alt="React logo" />
						<img src="../images/react-logo.svg" alt="React logo" />
					</div>
				</section>
				<section id="features">{listFeatures}</section>
			</div>
		);
	}
}

export default App;
