import React from 'react';
import "./Nav.css";

const Nav = () => {
    const list = {
        display: "flex",
        fontSize: 10 
    }

    return (
    <nav>
        <h1 className="logo"><a href="#">Yoga</a></h1>
        <ul style={list}>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Guide</a></li>
            <li><a href="#">Online Class</a></li>
        </ul>
        <button>EN</button>
    </nav>
)};

export default Nav;