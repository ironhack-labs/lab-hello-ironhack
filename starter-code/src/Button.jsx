import React from 'react'
import "./styles/button.css";

export default function Button({children}) {
    return (
        <div>
            <button>{children}</button>
        </div>
    )
}
