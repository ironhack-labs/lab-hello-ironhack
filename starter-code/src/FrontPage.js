import React from 'react';
import "./FrontPage.css";

function FrontPage(props) {

    return (
        <div className="portada">
            <h3> { props.title } </h3>
            { props.children }
        </div>
    )
}

export default FrontPage;