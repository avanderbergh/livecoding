import React, { Component } from 'react';
import './counter.css'
class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }
    handleIncrementClicked = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrementClicked = () => {
        this.setState({ count: this.state.count - 1 });
    }
    handleResetClicked = () => {
        this.setState({ count: 0 });
    }
    handleNumberChanged = e => {
        this.setState({count: parseInt(e.target.value)})
    }
    render() {
        return (
            <section className="counter-wrap">
                <h1>Counter</h1>
                <article>
                    <div>
                        <div className="calc">
                            <button onClick={this.handleDecrementClicked}>-</button>
                            <div>{this.state.count}</div>
                            <button onClick={this.handleIncrementClicked}>+</button>
                        </div>
                        <button onClick={this.handleResetClicked} className="reset-btn">Reset</button>
                        <input onChange={this.handleNumberChanged} type="number"/>
                    </div>
                </article>
            </section>
        );
    }
}
export default Counter;