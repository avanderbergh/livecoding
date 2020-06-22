import React from "react";
import "./PlaylistCard.css";

const PlaylistCard = props => (
  <section className="playlist-card">
    <img src={`https://source.unsplash.com/random/200x200?${props.img}`} alt={props.img}/>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p>{props.followers}</p>
  </section>
);

export default PlaylistCard;