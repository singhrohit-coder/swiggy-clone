import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount () {
        console.log("Parent Component Did Mount")
    }
    
    render() {
        console.log("Parent Render")
        return (
            <div>
                <h1>About Class Based Component</h1>
                <h2>This is Namaste React Series</h2>
                <UserClass name={"First (classes)"} location={"Chandigarh (Classes)"} contact={"iknowrohit19@gmail.com (Classes)"} />
                {/* i can use different instance of same class but i can passs different props over here  */}
                <UserClass name={"Second (classes)"} location={"Barely (Classes)"} contact={"iknowabhishek19@gmail.com (Classes)"} />
            </div>
        );
    }
};

export default About;