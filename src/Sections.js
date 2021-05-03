import React from 'react';
import './Sections.css';

function Sections({ sectionImg, sectionTitle, sectionText }) {
    return (
        <div className='sectionItem'>
            <img src={sectionImg ? sectionImg : "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"} alt="" srcset="" />
            <h2> {sectionTitle} </h2>
            <p> {sectionText} </p>
        </div>
    )
}

export default Sections;