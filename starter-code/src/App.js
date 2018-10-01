import React from "react";
import {Footer} from "./footerItem.js";
import {Content} from "./content.js";

export const App = () => {
	return (
		<section>
			<Content/>
			<section className="footer">
				<Footer src="/images/icon1.png" heading="Declarative" text="React makes it painless to create interactive UIs."/>
				<Footer src="/images/icon2.png" heading="Components" text="Build encapsulated components that manage their state."/>
				<Footer src="/images/icon3.png" heading="Single-Way" text="A set of immutable values are passed to the component's"/>
				<Footer src="/images/icon4.png" heading="JSX" text="Statically-typed designed to run on modern browsers."/>
			</section>
		</section>
	)
}

