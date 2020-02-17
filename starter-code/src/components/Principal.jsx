import React from 'react'
import "./../styles/Principal.css";

export default function Principal({
    title,
    paragraph,
    btn,
    reactLogo
}) {
    return (
        <div className="principal">
            <div>
                <h1>{title}</h1>
                <p>{paragraph}</p>
                <button>{btn}</button>
            </div>
            <aside>
                    <img src={reactLogo} alt={`reactLogo`} />
                    <img src={reactLogo} alt={`reactLogo`} />
                    <img src={reactLogo} alt={`reactLogo`} />
                    <img src={reactLogo} alt={`reactLogo`} />
                    <img src={reactLogo} alt={`reactLogo`} />
                    <img src={reactLogo} alt={`reactLogo`} />
            </aside>
        </div>
    )
}
