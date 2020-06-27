import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllBeers extends Component {
	constructor(props) {
		super(props);
		this.state = { beers: [] };
	}

	componentDidMount() {
		fetch("https://ih-beers-api2.herokuapp.com/beers")
			.then((response) => response.json())
			.then((result) => this.setState({ beers: result }));
	}

	render() {
		return (
			<ul>
				{this.state.beers.map((beer) => (
					<li>
						<Link to={`/beer/${beer._id}`}>{beer.name}</Link>
					</li>
				))}
			</ul>
		);
	}
}

export default AllBeers;
