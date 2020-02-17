import React from 'react'
import MyLogo from "./MyLogo";

export default function MyNavBar(props) {
    return (
        <nav>
            <MyLogo srcImg={props.url} />
            <MyLogo srcImg={props.url2} /> 
        </nav>
    )
}
