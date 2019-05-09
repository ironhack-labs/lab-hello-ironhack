import React from "react";
import ReactDOM from "react-dom";
import Parent from "./components/parent"
import Child from "./components/child"

function App() {
	const view = {
		title: "Say Hello to ReactJS",
		description: "You will learn a Frontend framework from scratch, to become an Ninka Developer",
		menuLogo: "../public/images/menu-top.svg",
		ironLogo: "../public/images/ironhack-logo.svg",
		backLogo: "../public/images/react-logo.svg"
	};

	const icons = [
		icon1 = {
			image: "../public/images/icon1",
			title: "Declarative",
			description: "interactive UIs"
		},
		icon2 = {
			image: "../public/images/icon2",
			title: "Components",
			description: "Build encapsulated components that manage their state"
		},
		icon3 = {
			image: "../public/images/icon3",
			title: "Single-Way",
			description: "A set of inmutable values are passed to the component's"
		},
		icon4 = {
			image: "../public/images/icon4",
			title: "JSX",
			description: "Statically-Typed, designedto run on modern browsers"
		}
	];

	return (
		<div className="uk-container">
			<Parent element={view} />

			<div className="uk-child-width-1-4@m" uk-grid>
				icons.forEach(icon => {
					<Child item={icon} />
				});
			</div>

		</div>
	)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);