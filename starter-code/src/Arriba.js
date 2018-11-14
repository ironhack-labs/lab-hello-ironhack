import React, { Component } from 'react';

import './Arriba.css';

class Arriba extends Component {
	render() {
		return (
			<div className="arriba">
				<ul>
					<li>
						<img src="images/ironhack-logo.svg" />
					</li>
					<li className="menu">
						<img src="images/menu-top.svg" />
					</li>
				</ul>
				<ul>
					<li>
						<div className="text">
							<h1 className="title">Say hello to ReactJS</h1>

							<p>
								You will learn a Frontend framework from
								scratch, to becaome an Ninka Developer.
							</p>

							<button>Awesome!</button>
						</div>
					</li>
                        <img src="images/react-logo.svg" />
					<li />
				</ul>
			</div>
		);
	}
}

export default Arriba;
