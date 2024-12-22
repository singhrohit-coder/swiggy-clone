import { useState } from "react";

const User = () => {

    const [count] = useState(0)
    const [count2] = useState(1)
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: Rohit Singh</h2>
            <h3>Location: Chandigarh</h3>
            <h4>Contact: iknowrohit19@gmail.com</h4>
        </div>
    );
};

export default User;