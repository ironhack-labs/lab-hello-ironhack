import React, {Component} from "react";
import "./Foto.css";

class Foto extends Component {
    render(){     
        return(
            <div>
                <div className="header">
                    <div className="nav">
                        <img className="logo" src="/images/ironhack-logo.svg" alt=""/>
                        <img className="menu" src="/images/menu-top.svg" alt=""/>
                    </div>
                    <div className="textoImagen">
                        <div className="texto">
                            <h1> Say hello to ReactJS</h1>
                            <p> You will learn how to use the most popular frontend library, and become a super Ninja developer. </p>
                        </div>
                        <div className="imagen">
                            <img src="/images/react-logo.svg" alt=""/>
                            <img src="/images/react-logo.svg" alt=""/>
                            <img src="/images/react-logo.svg" alt=""/>
                        </div>
                    </div>
                    <div className="boton">
                        <button> Awesome! </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Foto;