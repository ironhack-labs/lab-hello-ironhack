import React from 'react'

export default function IconSection({img, title, message}) {
    const msgs = {
        icon1 : "react makes it painless to create interactives UIs",
        icon2 : "Build encapsulated components that manage their state",
        icon3 : "A set of immutable values are passed to the components",
        icon4 : "Statically-types, design to run on modern browsers"
    }

    return (
        <div className="boxcontent">
            <div className="imagebox">
                <img src={img}/>
            </div>
            <div className="titlebox">
                <h3>{title}</h3>
            </div>
            <div className="msgbox">
                <p>{msgs[message]}</p>
            </div>
        </div>
    )
}
