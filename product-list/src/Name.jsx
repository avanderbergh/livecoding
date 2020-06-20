import React from "react";
import "./Name.css";

class Name extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return <h1>{this.props.text}</h1>
    }
}

export default Name