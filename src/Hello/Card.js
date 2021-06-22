import React from "react";

function Card(props) {
	return (
		<div className="card">
			<img src={props.imgSource} alt=""></img>
			<h3 className="subtitles">{props.subtitle}</h3>
			<p>{props.text}</p>
		</div>
	);
}

export default Card