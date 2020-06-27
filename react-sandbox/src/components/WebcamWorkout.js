import React, { Component } from 'react';
import Posenet from "react-posenet";

class WebcamWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 10, posesString: "", side: "left" }
    }

    handleEstimate = poses => {
        const leftEye = poses[0].keypoints.filter(pose => pose.part == "leftEye");
        const rightEye = poses[0].keypoints.filter(pose => pose.part == "rightEye");
        const nose = poses[0].keypoints.filter(pose => pose.part == "nose");

        console.log(nose)
        if (nose && nose[0].position) {
            if (this.state.side == "left") {
                if (nose[0].position.x < 50) {
                    this.setState({ count: this.state.count - 1, side: "right" });
                }
            } else {
                if (nose[0].position.x > 200) {
                    this.setState({ count: this.state.count - 1, side: "left" });
                }
            }
        }

    }

    render() {
        return (
            <div>
                <Posenet onEstimate={this.handleEstimate} />
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default WebcamWorkout;