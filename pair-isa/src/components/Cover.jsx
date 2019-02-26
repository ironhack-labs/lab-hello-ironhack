import React, {Component} from 'react'

class Cover extends Component {
	render () {
		return (
			<div id="cover">
				<div>
					<h1>Say hello to ReactJS</h1>
					<h3>You will learn a frontend framework from scratch, to become a Ninja Developer</h3>
					<button>Awesome!</button>
				</div>
				<img src={'images/react-logo.svg'} alt={"react logo"}/>
			</div>
		)
	}
}

export default Cover