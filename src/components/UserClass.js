import React, { Component } from "react"

// import { Component } from "react";  // => some people used to like this, so don't get confused
// class UserClass extends Component{}

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        //console.log(props);
        //console.log(this.props.name + "Child Constructor");

        this.state = {
            userInfo: {
                name: "Default",
                locaton: "Default",
                contact: "Default"
            }
        };
    }
    async componentDidMount () {
        //console.log(this.props.name + "FirstChild Component Did Mount")
        // For API Call
        const data = await fetch ("https://api.github.com/users/singhrohit-coder");
        const json = await data.json(); // not writing await leading to [promise] -> [pending]

        // updating our state variable / json data.
        this.setState ({userInfo: json,});
        //console.log(json);
    }

    // componentDidUpdate() {
    //     console.log("Component Did Update");
    // }

    // This method is called just before the component is removed from the DOM
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
 
    render() {
        //const { name, location, contact} = this.props;
        //console.log(this.props.name + "FirstChild Render")

        const { name, location, contact } = this.state.userInfo;
       
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: {contact}</h2>
            </div>
        );
    }
}

export default UserClass;