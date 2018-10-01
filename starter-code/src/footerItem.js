import React from "react";

export const Footer = ({src, heading, text}) => {
	return (
		<div>
			<img src={src}></img>
			<h3>{heading}</h3>
			<p>{text}</p>
		</div>
	)
}