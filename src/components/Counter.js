import React from 'react';

class Counter extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };


    render() {
        return (
            <div>
                <h1>This is our Counter component</h1>
                <div>count: {this.state.count}</div>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
            </div>
        )
    }
   
}


export default Counter; 