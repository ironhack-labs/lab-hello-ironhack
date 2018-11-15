import React, {Component} from 'react';
import Cards from './Cards';
import Landing from './Landing';

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