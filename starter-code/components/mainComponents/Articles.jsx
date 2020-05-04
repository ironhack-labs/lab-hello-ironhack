import React from 'react';
import SmallSection from "./SmallSection";

const articles = () => {
	return (
		<div className="main-section">
			<SmallSection
				img="/images/icon1.png"
				title="Declarative"
				text="React makes it painless to create interactive UIs."
			/>
			<SmallSection
				img="/images/icon2.png"
				title="Components"
				text="Build encapsulated components that manage their state."
			/>
			<SmallSection
				img="/images/icon3.png"
				title="Single-Way"
				text="A set of immutable values are passed to the component's."
			/>
			<SmallSection
				img="/images/icon4.png"
				title="JSX"
				text="Statically-typed, designed to run on modern browsers."
			/>
		</div>
	);
};

export default articles;
