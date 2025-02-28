import { useState, useEffect } from "react";
import { POPULAR_CUISINE_IMAGE } from "../utils/constants";

const Popular = () => {
    const [popularGrid, setPopularGrid] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(POPULAR_CUISINE_IMAGE);
            const json = await data.json();

            // Extract images from the correct path
            const popularCuisinesGrid = json?.data?.cards[1]?.card?.card?.imageGridCards?.info;

            if (popularCuisinesGrid) {
                setPopularGrid(popularCuisinesGrid);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="px-16 my-4">
            <h2 className="font-extrabold text-slate-600 text-2xl mb-4">Popular Cuisines</h2>
            <div className="flex overflow-x-auto space-x-4">
                {popularGrid.length > 0 ? (
                    popularGrid.map((cuisine) => (
                        <a key={cuisine.id} href={cuisine.action.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={`https://media-assets.swiggy.com/${cuisine.imageId}`} // Ensure this is the correct base URL
                                alt={cuisine.action.text}
                                className="w-40 h-40 object-cover rounded-lg shadow-lg"
                            />
                        </a>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Popular;

