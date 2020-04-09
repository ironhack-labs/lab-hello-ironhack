import React from 'react'
import Button from "./Button"

const Text = props => {
    return (
        <div className="max-w-lg">
            <h1>{props.title}</h1>
            <p className="m-md">{props.text}</p>
            <Button label="Awesome!" />
        </div>
    )
}

export default Text;