import React from "react";

const CityWeather = (props) => {
	return (
		<section>
			<h2>{props.weather ? props.weather.name : "Select a city"}</h2>
			{props.weather ? <p>Temp: {props.weather.main.temp}</p> : ""}
		</section>
	);
};

export default CityWeather;
