import React from 'react'
import '../styles/icon.css'

const Icon = props =>{
    return (
        <div className="col-md-3 margen">
            <header>
                <img src = {props.image} className = "img_icon"/>
                <p className = "title"> {props.title}</p>
                <p className = "subtitle">{props.subtitle}</p>
            </header>
        </div>
    )
}

export default Icon