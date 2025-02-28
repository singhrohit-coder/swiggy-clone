import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    
    const [home, setHome] = useState("");

    return (
        <div className="bg-yellow-300 h-screen">
        <h1 className="text-black text-2xl font-semibold text-center p-6">
            Order food and groceries. Discover Best restaurants. Swiggy it.
        </h1>
            <div className="flex flex-wrap">
            <Link to="/body">
            <div className="">
                <img className="mt-5 w-[300px] h-[230px] rounded-3xl"
                alt="book ride logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
                />
            </div>
            </Link>

            
            <Link to="/olaBody">
            <div>
                <img className="mt-5 w-[300px] h-[230px] rounded-3xl"
                alt="book ride logo"
                src="https://img.freepik.com/free-vector/order-ride-concept-illustration_114360-4924.jpg"
                />
            </div>
            </Link>
            </div>
    </div>
    );

};

export default Home;