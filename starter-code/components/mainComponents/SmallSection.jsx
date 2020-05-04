import React from 'react'

const SmallSection = (props) =>{
    return (
			<div id="each-section">
				<img src={props.img} alt={props.title}/> 
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</div>
		);
}

export default SmallSection
