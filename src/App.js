import React from 'react';
import Landing from './Landing';
import Cards from './Cards';
import './App.css'

const App = () => {
  return (
    <div className="page-div">
      
      <Landing />
       <div className="cards-row">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

// export { App, Component2, Component 3 }
export default App;