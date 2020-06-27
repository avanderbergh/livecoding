import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section>
			<h1>Home</h1>;
			<ul>
				<li>
					<Link to="beer">All Beers</Link>
				</li>
				<li>
					<Link to="random">Random Beer</Link>
				</li>
			</ul>
		</section>
	);
};

export default Home;
