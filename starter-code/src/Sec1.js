import React, {Component} from "react";

import "./Main.css";

class Sec1 extends Component {
	render() {

		return (
			<section>
				<div className="main-left">
					<h1>Say Hello to ReactJS</h1>

					<p>You will learn a Frontend <br/>
					framework from scratch, to<br/>
					become an Ninja Developer</p>

					<a href="#0">Awesome!</a>
				</div>
				<div className="main-right"></div>
			</section>	
		);
	}
};

export default Sec1;