import React, {Component} from 'react';
import Main from './Main';
import Cards from './Cards';

class App extends Component {
	render() {
		return (
			<div className="App">
			<Main />
			<Cards />
			</div>
		);
	}
}

export default App;