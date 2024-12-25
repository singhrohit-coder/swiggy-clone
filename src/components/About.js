import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component {
    constructor(props) {
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount () {
        //console.log("Parent Component Did Mount")
    }
    
    render() {
        //console.log("Parent Render")
        return (
            <div>
                <h1>About Class Based Component</h1>
                <h2>This is Namaste React Series</h2>
                <UserClass name={"First"} location={"Chandigarh"} contact={"iknowrohit19@gmail.com"} />
            </div>
        );
    }
};

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */