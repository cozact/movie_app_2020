import React from 'react';
// import PropTypes from "prop-types";

class App extends React.Component{
    constructor(props) {
        super(props);
        console.log("before component render");
    }
    componentDidMount() {
        console.log("component rendered");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component updated");
    }

    state = {
        count: 0
    }
    add = () => {
        this.setState(current => ({count: current.count + 1}));
    };
    minus = () => {
        this.setState(current => ({count: current.count -  1}));
    };
    render(){
        console.log("component render");
        return(
        <div>
            <h1>The number is : {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
    )}
}

export default App;
