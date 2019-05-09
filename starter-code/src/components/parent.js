import React from "react";
import ReactDOM from "react-dom";
import Child from "./child"

function Parent(props) {
	const { title, description, menuLogo, ironLogo, backLogo } = props.element
	return (
		<div>
			<div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url({backLogo});">
				<h1>{title}</h1>
				<img src={menuLogo} />
				<img src={ironLogo} />
				<p>{description}</p>
			</div>
		</div>
			)
	}
  
export default  Parent;