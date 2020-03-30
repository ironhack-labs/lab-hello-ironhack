import React, { Component } from 'react';
import './App.css';


const Welcome = () => {
  return(
      <section className={'welcome'}>
          <div className={'header'}>
              <img src={'./images/ironhack-logo.svg'}/>
              <img src={'./images/menu-top.svg'}/>
          </div>
          <h1>Say hello to ReactJS</h1>
          <h2>You will learn a Frontend framework from scratch, to become a Ninja Developer.</h2>
          <button>Awesome!</button>
      </section>
  )
};



const Card = (props) => {
	return (
		<div className={'card'}>
			<img src={props.icon}/>
			<h3>{props.title}</h3>
			<h4>{props.text}</h4>
		</div>
	);
};

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Welcome/>
				<section className={'icons'}>
					<Card
						icon={'./images/icon1.png'}
						title={'Declarative'}
						text={'React makes it painless to create interactive UIs.'}/>
                    <Card
                        icon={'./images/icon2.png'}
                        title={'Components'}
                        text={'Build encapsulated components that manage their state'}/>
                    <Card
                        icon={'./images/icon3.png'}
                        title={'Single-Way'}
                        text={'A set of immutable values are passed to the components.'}/>
                    <Card
                        icon={'./images/icon4.png'}
                        title={'JSX'}
                        text={'Statically-typed, designed to run on modern browsers.'}/>
				</section>
			</div>
		);
	}
}

export default App;
