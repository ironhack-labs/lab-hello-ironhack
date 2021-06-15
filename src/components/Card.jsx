import React from 'react';

const ContentCard = ({pic,title,description}) => (
    <div className="card">
        <img src={pic} />
        <h2>{title}</h2>
        <span>{description}</span>
    </div>
)

export default ContentCard;