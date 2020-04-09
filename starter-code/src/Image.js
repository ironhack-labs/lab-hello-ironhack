import React from 'react'

const Image = props => {
    return (
        <img src={props.src} alt={props.alt} className="max-w-full" />
    )
}

export default Image;