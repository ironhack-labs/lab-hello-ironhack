import React, { Component } from 'react';
import '../public/styles/styles.css'

class App extends Component {

    // state = {
    //     titulos:[
    //         "Declarative",
    //         "Components",
    //         "Single-Way",
    //         "JSX"
    //     ]
    // }

    // drawIconito = (iconitoTitulo, key) => {
    //     return <Iconitos key={key} name={iconitoTitulo} />
    //   }

    render(){
        // const {titulos} = this.state
        return(
            <div>
            <div className="principal"> 
            <nav className="nav">
                <div className="iron">
                    <img src="../images/ironhack-logo.svg" alt="Aquí va una imagen" /> 
                </div>
                <div className="hambur">
                    <img src="../images/hambur.png" alt="Aquí va una imagen" />
                </div>

            </nav>

                <div className="secundario">

                    <h1>Say hello to <br />
                        ReactJS
                    </h1>
                    <h3>You will learn a Frontend <br />
                        framework from scratch, to<br />
                        become a Ninja Developer                   
                    </h3>
                    <button className="boton">
                        Awesome
                    </button>
                </div>
                
            </div>
            <div className="iconitos">

                <div className="iconito-box">
                    <Iconitos/>
                    {/* {titulos.map(this.drawIconito)} */}
                </div>

            </div>
            

            </div>
        )
    }
}

const Iconitos = ({titulos}) =>{
    return(
        <div>
            {/* <h2>Aquí van los iconitos</h2> */}
            <img src="../images/icon1.png" alt="Ícono 1" />
            <img src="../images/icon2.png" alt="Ícono 2" />
            <img src="../images/icon3.png" alt="Ícono 3" />
            <img src="../images/icon4.png" alt="Ícono 4" />
        </div>
    )
}

export default App;