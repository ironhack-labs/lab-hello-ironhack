import "./App.css";
import Nav from "./Hello/Navigation";
import Card from "./Hello/Card";
import Landing from "./Hello/Landing";

function App() {
	const content = {
		imgOne: "./images/icon1.png",
		imgTwo: "./images/icon2.png",
		imgThree: "./images/icon3.png",
		imgFour: "./images/icon4.png",

		text1: "React makes it painless to create interactive UIs.",
		text2: "Build encapsulated components that manage their state",
		text3: "A set of immutable values are passed to the components",
		text4: "Statically-typed, designed to run on modern browsers",
	};

	return (
		<>
			<Nav />
			<Landing />
			<div className="cards-container">
				<Card
					imgSource={content.imgOne}
					subtitle="Declarative"
					text={content.text1}
				/>
				<Card
					imgSource={content.imgTwo}
					subtitle="Components"
					text={content.text2}
				/>
				<Card
					imgSource={content.imgThree}
					subtitle="Single-Way"
					text={content.text3}
				/>
				<Card imgSource={content.imgFour} subtitle="JSX" text={content.text4} />
			</div>
		</>
	);
}

export default App;
