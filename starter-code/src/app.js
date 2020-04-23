import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
  render() {

    const navBar = (
        <div className="navFlex">
        <div className='navbar'><img className='logo' src='/images/ironhack-logo.svg'></img> </div>
        <div className='navbar'><img className='logo' src="/images/menu-top.svg" height="30" width="30" /></div>
        </div>

    )

    const content = (
      
        <div className='content'>
        <div className='content-top'><h1>Say hello to ReactJS</h1> </div>
        <div className='content-middle'>
          <h2>  You will learn a Frondend framework from scratch, to become a Ninka Developer</h2>
            
        </div>
        <div className='content-bottom'><button>Awesome!</button></div>
        
        </div>
       
    )
    
    const cards = (
        <div className="sectionWhite">
            <div className="cards">
                <div><img src="/images/icon1.png" height="200" width="200" /></div> 
                <div><h2 className='h2'>Declarative</h2></div>
                <div><p></p>React makes it painless to create interactive UIs.</div>
            </div>
            <div className="cards">
                <div><img src="/images/icon2.png" height="200" width="200" /></div> 
                <div><h2 className='h2'>Declarative</h2></div>
                <div><p></p>React makes it painless to create interactive UIs.</div>
            </div>
            <div className="cards">
                <div><img src="/images/icon3.png" height="200" width="200" /></div> 
                <div><h2 className='h2'>Declarative</h2></div>
                <div><p></p>React makes it painless to create interactive UIs.</div>
            </div>
            <div className="cards">
                <div><img src="/images/icon4.png" height="200" width="200" /></div> 
                <div><h2 className='h2'>Declarative</h2></div>
                <div><p></p>React makes it painless to create interactive UIs.</div>
            </div>
        </div>
    )


    return (
      <div className="App">
      {navBar}
        {content}
      {cards}
      </div>
    );
  }
}
 
export default App;