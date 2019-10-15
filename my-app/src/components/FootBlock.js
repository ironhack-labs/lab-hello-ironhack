import React from 'react'
import './FootBlock.css'

const FootBlock = (props) => {
    return (
        <div className='appFootBlock'>
            <div className='appFootBox'>
                <img src={props.URL} alt='icon'></img>
                <h1>{props.title}</h1>
                <p>{props.paraf}</p>
            </div>
        </div>
    );
};

export default FootBlock;