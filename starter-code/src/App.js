import React, {Component} from 'react'
import '../public/styles/styles.css'

class App extends Component{
    render(){
        return(
            <div className='body' >
                <header>
                    <nav>
                        <img className="logo" src="../images/ironhack-logo.svg" alt='estamal'></img>
                        <img className="hambur" src="../images/menu-top.svg" alt='estamal'></img>
                    </nav>
                <div>
                    <div>
                        <h1>Say Hello to ReactJS</h1>
                        <p>You will learn a Frontend framework from Scratch, to become a NInja Developer</p>
                        <button>Awesome!</button>     
                    </div>   
                    <div className='reactLogo' >
                        <img className="img1" src='../images/react-logo.svg'></img>
                        <img className="img2" src='../images/react-logo.svg'></img>
                        <img className="img3" src='../images/react-logo.svg'></img>
                    </div>
               </div>
                </header>

                <section>
                    <div> <img src='../images/icon1.png'></img>  <h3>Declarative</h3> <p>React makes it painless to create interactive UIs.</p> </div>
                    <div> <img src='../images/icon2.png'></img>  <h3>Components</h3> <p>Build encapsulated components that manage their state.</p> </div>
                    <div> <img src='../images/icon3.png'></img>  <h3>Single-Way</h3> <p>A set of immutable values are passed to the commponent's.</p> </div>
                    <div> <img src='../images/icon4.png'></img>  <h3>JSX</h3> <p>Statically-typed design to run on modern browsers</p> </div>
                </section>
            </div>
        )
    }
}

export default App;