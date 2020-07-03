import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core';

import { appid } from "../keys"

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

        const CustomTextField = withStyles({
            root: {
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderRadius: `20px`,
                    },
                },
            },
        })(TextField);
        return (
            <div style={{ margin: 100 }}>
                <TextField variant="outlined" />
            </div>
        );
    }
}

export default Weather;