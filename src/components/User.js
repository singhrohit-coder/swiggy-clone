// import { useState } from "react";
import React from "react";

const User = (props) => {

    const [count] = useState(0)
    const [count2] = useState(1)
    return (
        <div className="user-card">
            <p>
                Functional Component = {count}, {count2}
            </p>
            <h2>Name: {props.name}</h2>
            <h3>Location: Chandigarh</h3>
            <h4>Contact: iknowrohit19@gmail.com</h4>
        </div>
    );
};

export default User;