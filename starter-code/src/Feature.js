import React from 'react';
import Image from './Image'

const Feature = props => {
    return (
        <figure>
            <Image src={props.imgsrc} alt={props.imgalt} />
            <figcaption>
                <h3 className="mt-sm text-black">{props.title}</h3>
                <p className="mt-sm text-gray-800">{props.desc}</p>
            </figcaption>
        </figure>
    )
}

export default Feature