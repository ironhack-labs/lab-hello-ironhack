import React, {Component}from 'react'
import './App.css'




class App extends Component {
    render (){
        return(
   <div className="App">
      <div className="Container">
                    <div className="header">

            <div className="logo"><img src="images/ironhack-logo.svg" /></div>                 <div><img src="images/menu-top.svg" /></div> 
                    </div>
                    <div className="content">
                    <div>




                    <h1>Say Hello <br/>to React JS</h1>
                        <p>You will learn a Frontend framework from scratch,to become a ninja developer</p>
                        <br/>
                        <button className="button">Awesome!</button>
                    </div>
                    </div>
                </div>








      <section className="home-buttons">
              <div>
                        <img src="/images/icon1.png" alt="button1"/>
                        <h3>Declarative</h3>
                        <p>React Makes it painless to create interactive UIs.</p>
                    </div>
                              <div>
                        <img src="/images/icon2.png" alt="button2"/>
                        <h3>Components</h3>
                        <p>React Makes it painless to create interactive UIs.</p>
                    </div>
                
                
            <div>
                        <img src="/images/icon3.png" alt="button3"/>
                        <h3>Single-Way</h3>
                        <p>React Makes it painless to create interactive UIs.</p>
                  </div>




                    <div>
                        <img src="/images/icon4.png" alt="button4"/>
                        <h3>JSX</h3>
                        <p>React Makes it painless to create interactive UIs.</p>
                        </div>
               
               
                </section>
            </div>
            
        )
    }
}

export default App;