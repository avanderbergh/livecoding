import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beer from "./pages/Beer";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<h1>Beer App</h1>
				</nav>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/beer">
						<AllBeers />
					</Route>
					<Route path="/random" exact>
						<RandomBeer />
					</Route>
					
					<Route path="/beer/:id" component={Beer} />

				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App;
