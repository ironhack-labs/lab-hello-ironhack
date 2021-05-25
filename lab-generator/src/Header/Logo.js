import React from 'react'

export default function Logo(props) {
    console.log(props)
    return (
        <div>
            Hola soy el {props.nombre}
            {props.taquerias}
            {
                props.menu.map(e => {
                    return(
                        <>
                        <p>{e}</p>
                        </>
                    )
            })
        }
        
        </div>
    )
}
