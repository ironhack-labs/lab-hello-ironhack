import React, { Component } from 'react';
import moment from 'moment';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDate: moment()
		};
		this._updateTime = this._updateTime.bind(this);
	}

	componentDidMount() {
		this.timeInterval = setInterval(this._updateTime, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timeInterval);
	}

	render() {
		//const currentDate = moment().format('DD.MM.YYYY');
		console.log('updated');
		return (
			<div className="Main">
				<header>
					<div>
						<img src={require('/../public/ironhack-logo.svg')} />
						<img src={require('/../public/menu-top.svg')} />
					</div>
					<h1>Hello React JS!</h1>
					{this._renderTime()}
					<a className="btn" href="#">
						Awesome!
					</a>
				</header>
			</div>
		);
	}

	_updateTime() {
		this.setState({
			currentDate: moment()
		});
	}
	_renderTime() {
		return <h2>{this.state.currentDate.format('DD.MM.YYYY HH:mm:ss')}</h2>;
	}
	_renderGreeting() {
		const currentDate = moment();

		let greeting;
		if (currentDate.hours() < 12) {
			greeting = <p> Goooood morning!</p>;
		} else {
			greeting = <p>Good afternoon!</p>;
		}
	}
}

export default Main;
