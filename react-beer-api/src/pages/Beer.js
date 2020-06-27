import React, { Component } from "react";
import BeerDetails from "../components/BeerDetails";

class Beer extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
			.then((response) => response.json())
			.then((result) => this.setState({ beer: result }));
	}

	render() {
		return <BeerDetails beer={this.state.beer} />;
	}
}

export default Beer;
