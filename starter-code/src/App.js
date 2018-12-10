import React from 'react'
// import "./App.css"
import '../public/styles/styles.css'

class App extends React.Component {

render (){
  return ( 
    <div id="total" >
  
   <section id="top-section">
<header className="header">

<img src="../images/ironhack-logo.svg"/>
    <img src="../images/menu-top.svg"/>

</header>
    <section id="textos">
      <h1>Say Hello to React JS</h1>
    <p>
      You will learn a Frontend framework from scratch,
       to become a ninja Developer.
    </p>

    <button>Awesome!</button>
    </section>
    </section>
  <section id = "bottom">
  
  <div>
  <img src="../images/icon1.png"/>
  <p id="header">Declarative</p>
  <p className ="text">React Makes it painless to create interactive UIs.</p>
  </div>

  <div>
  <img src="../images/icon2.png"/>
  <p id="header">Components</p>
  <p className ="text">Build encapsulated components that manage their state.</p>
    </div>
    <div>
    <img src="../images/icon3.png"/>
    <p id="header">Single-Way</p>
    <p className ="text">A set of inmutable values are passed to the component's.</p>
    </div>
    <div>
    <img src="../images/icon4.png"/>
    <p id="header">JSX</p>
    <p className ="text">Statically-typed designed to run on modern browsers.</p>
    
    </div>
  
  </section>
  
    </div>
  )
}

};

export default App;

