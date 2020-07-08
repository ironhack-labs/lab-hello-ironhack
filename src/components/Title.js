import React from 'react'

export default function Title(props) {
    return (
        <h1 className={props.cname}>{props.text}</h1>
    )
}
