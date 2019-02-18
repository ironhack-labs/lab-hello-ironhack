import React from "react";
import "./SmallAtom.css";

function SmallAtom(props) {
    return <div className="SmallAtom">
                <img src={props.image} />
                <img src={props.image} />
                <img src={props.image} />
    </div>
}

export default SmallAtom;