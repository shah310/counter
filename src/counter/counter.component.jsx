import React from "react";

import './counter.styles.css';

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            value : 0
        }
    }

    decrease = () => {
        this.setState( (prevState, prevProp) => { return {value: prevState.value - 1 }})
    }

    increase = () => {
        this.setState( (prevState, prevProp) => { return {value: prevState.value + 1 }})
    }

    render() {
        return (
            <div className="out">
                <div className="container">
                    <div className="minus" onClick={this.decrease}> - </div>
                    <div className="value"> {this.state.value} </div>
                    <div className="plus" onClick={this.increase}> + </div>
                </div>
            </div>
        )
    }
}

export default Counter;