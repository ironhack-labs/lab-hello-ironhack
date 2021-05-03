import React from 'react';
import Landing from './Landing';
import Cards from './Cards';
import './App.css'

const App = () => {
  return (
    <div className="page-div">
      
      <Landing />
       <div className="cards-row">
        <Cards cardImage="/images/icon1.png" cardTitle="Declarative" cardText="React makes it painless to create interactive UIs."/>
        <Cards cardImage="/images/icon2.png" cardTitle="Components" cardText="Build encapsulated components that manage their state."/>
        <Cards cardImage="/images/icon3.png" cardTitle="Single Way" cardText="Asset of immutable values are passed to the components."/>
        <Cards cardImage="/images/icon4.png" cardTitle="JSX" cardText="Statically-typed designed to run on modern browsers."/>
      </div>
    </div>
  )
}

// export { App, Component2, Component 3 }
export default App;