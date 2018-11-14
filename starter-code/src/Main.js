import React, {Component} from 'react';
import './styles/Main.css';

class Main extends Component {
	render(){
		return (
			<div className='main' >
				<img id='react-logo-one' className='react-logo' src='images/react-logo.svg'></img>
				<img id='react-logo-two' className='react-logo' src='images/react-logo.svg'></img>
				<img id='react-logo-three' className='react-logo' src='images/react-logo.svg'></img>
				<img id='react-logo-four' className='react-logo' src='images/react-logo.svg'></img>
				<img id='react-logo-five' className='react-logo' src='images/react-logo.svg'></img>
				<img id='react-logo-six' className='react-logo' src='images/react-logo.svg'></img>
				<div className='nav'>
					<img src='images/ironhack-logo.svg'></img>
					<img src='images/menu-top.svg'></img>
				</div>
				<div className='main-text'>
					<h1>Say hello to <br/>ReactJS</h1>
					<div>
						<p>You will learn a Frontend <br/> framework from scratch, to <br/> become a Ninja Developer</p>
					</div>
					<div className='btn'>
						<span>Awesome!</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Main;