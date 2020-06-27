import React from "react";

const CitySelector = (props) => {
	return (
		<section>
			<button data-city="dusseldorf" onClick={props.onClick}>Dusseldorf</button>
			<button data-city="hamburg" onClick={props.onClick}>Hamburg</button>
			<button data-city="johannesburg" onClick={props.onClick}>Johannesburg</button>
		</section>
	);
};

export default CitySelector;
