import React, { Component } from "react"

// import { Component } from "react";  // => some people used to like this, so don't get confused
// class UserClass extends Component{}

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
        console.log(this.props.name + "Child Constructor");

        this.state = {  // state variables -> a big object which contains all the state variables.
            count: 0,
            count2: 1,  // create multiple state variable in the same state bcz this.state variable contains all the state variables. 
        };
    }
    componentDidMount () {
        console.log(this.props.name + "Child Component Did Mount")
        // For API Call
    }

    render() {
        console.log(this.props.name + "Child Render")
        const {name, location, contact} = this.props
        const {count, count2} = this.state
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                {/* <h1>Count2: {count2}</h1> */}
                <button 
                onClick={() => {
                    // Never update state Directly
                    this.setState({
                        count: this.state.count + 1,
                        // count2: this.state.count2 + 1,
                    });
                }}
                >
                    Count Increase
                </button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );
    }
}

export default UserClass;