import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PlaylistCard from "./components/PlaylistCard";

const playlists = [
	{
		title: "Deep Focus",
		description: "Focus Music",
		followers: 1000,
		img: "focus",
	},
	{
		title: "Peaceful Piano",
		description: "Piano Music",
		followers: 1300,
		img: "piano",
	},
	{
		title: "Lo-Fi Beats",
		description: "Lofi Music",
		followers: 10230,
		img: "lofi",
	},
	{
		title: "Classical Cafe",
		description: "Lofi Music",
		followers: 10230,
		img: "violin",
	},
	{
		title: "Schlager Hulle",
		description: "Sleagerr",
		followers: -1000000,
		img: "beer",
	},
];

function App() {
	return (
		<div className="playlists">
			{playlists.map((playlist) => (
				<PlaylistCard
					title={playlist.title}
					description={playlist.description}
					followers={playlist.followers}
					img={playlist.img}
				/>
			))}
		</div>
	);
}

export default App;
