import React from 'react';
import Usp from './Usp';
import './UspSection.css'
import uspData from '../../../data/uspData'

export default function UspSection() {
    return (
        <div className="usp-section-container">
            {uspData.map(singleUsp => {
                return <Usp uspData={singleUsp} key={singleUsp.header}/>;
            })}
        </div>
    )
}
