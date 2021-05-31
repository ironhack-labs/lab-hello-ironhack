import React from 'react'

const Body = (props) => {
    console.log(props)
    return (
        <div className="centrar centarBody">

            {
                props.imagenes.map(prueba => (
                    <div className="left">
                        <img src={prueba.imagen} ></img>
                        <h1 >{prueba.title}</h1>
                        <h4 className="parrafoBody">{prueba.parrafo}</h4>
                    </div>
                ))
            }


        </div>
    )
}

export default Body