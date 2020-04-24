import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
    
    render() {

        const hero = (
            <div className="App heroBg">
                <div className="navBar">
                    <div><img src='/images/ironhack-logo.svg' height="50" width="50" /></div>
                    <div><img src='/images/menu-top.svg' height="30" width="30" /></div>
                </div>
                <div className="heroTitle">
                    <div><h1 className='h1'>Say hello to ReactJS</h1></div>
                    <div><p className='p'>You will learn a Frontend framework from scratch, to become an Ninka Developer</p></div>
                    <div><button>Awesome!</button></div>
                </div>
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
        <div className="body">
            {hero}
            {cards}
        </div>
        );
  }
}
 
export default App;