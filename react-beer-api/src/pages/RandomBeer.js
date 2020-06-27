import React, { Component } from "react";
import BeerDetails from "../components/BeerDetails";

class RandomBeer extends Component {
	constructor(props) {
		super(props);
		this.state = { beer: null };
	}

	componentDidMount() {
		fetch("https://ih-beers-api2.herokuapp.com/beers/random")
			.then((respose) => respose.json())
			.then((result) => this.setState({ beer: result }));
	}

	render() {
		return <BeerDetails beer={this.state.beer} />;
	}
}

export default RandomBeer;
