import React from "react";

const BeerDetails = (props) => {
	return (
		<section>
			<h1>Beer Details</h1>
			{props.beer ? (
				<>
					<img src={props.beer.image_url} width="100" />
					<p>
						<strong>{props.beer.name}</strong> - {props.beer.tagline}
					</p>
				</>
			) : (
				"Loading..."
			)}
		</section>
	);
};

export default BeerDetails;
