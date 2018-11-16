import React, {Component} from 'react';
import Cards from './Cards';
import Landing from './Landing';
import '../public/css/styles.css';

class App extends Component {
  render() {
    return (

      <div>
        <Landing />
        <Cards />
      </div>
    )
  }
}

export default App;