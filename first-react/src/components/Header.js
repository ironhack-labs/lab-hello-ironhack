import React from 'react'
// import '../styles/card-person.css'

const Header = props => {
    return (
            <header className = "App-header">
                <h3>{props.title}</h3> 
                <p>{props.subtitle}</p>
                <button type="button" className="btn btn-light">Come in</button>
            </header>
    )
}

export default Header
