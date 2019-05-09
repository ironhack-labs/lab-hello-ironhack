import React from 'react';
import ReactDOM from 'react-dom';

function Child(props) {
	const { image, title, description } = props.item
	return (
		<div>
			<div className="uk-card uk-card-default">
				<div className="uk-card-media-top">
					<img src={image} alt="Icon" />
						<div className="uk-card-body">
							<h3 className="uk-card-title">{title}</h3>
							<p>{description}</p>
						</div>
				</div>
			</div>
		</div>
	);
}

export default Child;