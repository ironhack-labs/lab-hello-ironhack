import React from 'react';
import Nav from './components/Nav';
import Info from './components/Info';
import Feature from './components/Feature';
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="body">
          <div className="info">          
            <Nav/>
            <Info/>
          </div>
          <div className="features">
            <Feature path="/images/icon1.png" title="Declarative" info="React makes it painless to create interactive UIs." />
            <Feature path="/images/icon2.png" title="Components" info="Build encapsulated components that manage their state." /> 
            <Feature path="/images/icon3.png" title="Single Way" info="A set of immutable values are passed to the components." /> 
            <Feature path="/images/icon4.png" title="JSX" info="Statically-type, designed to run on modern browsers." /> 
          </div>
      </div>
    );
  }
}

export default App;