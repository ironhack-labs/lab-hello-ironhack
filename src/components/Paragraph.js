import React from 'react'

export default function Paragraph(props) {
    return (
        <p className={props.cname}>{props.text}</p>
    )
}
