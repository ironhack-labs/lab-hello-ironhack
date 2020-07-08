import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import Image from './Image'
export default function Card(props) {
    return (
        <div className={props.cname}>
            <Image image={props.img}/>
            <div className={props.textCname}>
            <Title text={props.cardTitle}/>
            <Paragraph text={props.cardText}/>    
            </div>
        </div>
    )
}
