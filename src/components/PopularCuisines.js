import { useState, useEffect } from "react";
import { MENU_API, PRE_SEARCH } from "../utils/constants";


const PopularCuisines = () => {

    const [popularCuisine, setPopularCuisine] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(PRE_SEARCH);
            const json = await data.json();

            const popularCuisineCard = json?.data?.cards[1]?.card?.card;
            setPopularCuisine(popularCuisineCard?.header?.title || "Popular Cuisines");

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2 className="font-extrabold">{popularCuisine}</h2>
        </div>
    );

};

export default PopularCuisines;

