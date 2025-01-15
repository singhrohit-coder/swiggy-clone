import { useState, useEffect } from "react";
import { PRE_SEARCH } from "../utils/constants";


const Popular = () => {
    
    const [popularCuisines, setPopularCuisines] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    
        const fetchData = async () => {
            try {
                const data = await fetch(PRE_SEARCH);
                const json = await data.json();
    
                const popularCuisinesCard = json?.data?.cards[1]?.card?.card;
                setPopularCuisines(popularCuisinesCard?.header?.title || "Popular Cuisines");
    
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
    return (
        <div>
            <div className="px-64 my-4">
                <h2 className="font-extrabold text-slate-600">{popularCuisines}</h2>
            </div>
        </div>


    ); 
};

export default Popular;