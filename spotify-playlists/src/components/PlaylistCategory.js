import React, { Component } from 'react';
import PlaylistCard from "./PlaylistCard";

import "./PlaylistCategory.css";

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

class PlaylistCategory extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <section>
                <h1>{this.props.text}</h1>
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
            </section>
        )
    }
}

export default PlaylistCategory;