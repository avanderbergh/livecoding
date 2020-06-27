import React, { Component } from 'react';
import {appid} from "../keys"

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = { weather: null, city: "dusseldorf" }
    }

    componentDidMount() {
        console.log("Component Mounted");

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${appid}`)
            .then(response => response.json())
            .then(result => this.setState({ weather: result }))
    }

    render() {
        return (
            <div>
                <h1>Weather</h1>
                <p>{JSON.stringify(this.state.weather)}</p>
            </div>
        );
    }
}

export default Weather;