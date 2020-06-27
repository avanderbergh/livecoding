import React, { Component } from "react";
import CitySelector from "./CitySelector";
import CityWeather from "./CityWeather";

import { key } from "../key";

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
		this.handleCityClicked = this.handleCityClicked.bind(this);
	}

  handleCityClicked(e) {
    console.log(e.target.dataset)
		const city = e.target.dataset.city;

		const baseURL =
			"https://api.openweathermap.org/data/2.5/weather?units=metric&";

		fetch(`${baseURL}q=${city}&appid=${key}`)
			.then((response) => response.json())
			.then((result) => this.setState({ weather: result }));
	}

	render() {
		return (
			<section>
				<h1>Weather</h1>
				<CitySelector onClick={this.handleCityClicked} />
				<CityWeather weather={this.state.weather} />
			</section>
		);
	}
}

export default Weather;
