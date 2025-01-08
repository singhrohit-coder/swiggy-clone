import { useState, useEffect } from "react";
import { MENU_API, PRE_SEARCH } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Search = () => {

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
        <div className="Body">
            <div className="search ">
                    {/* search box position  */}                
          <div className="flex justify-center items-center">
          {/* input element with icon */}
          {/* search box */}
          <div className="relative">
            <span className="absolute top-1/2 right-32 transform -translate-y-1/2 text-gray-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input type="text" 
            className="search-bar  border border-black px-5 py-3 w-[800px] font-medium text-gray-600 "
            placeholder="Search for restaurants and food"
            />
            <button 
            className="px-2 bg-orange-400 mx-2 rounded-md">
            searchItem</button>
            </div>
            </div>
            <div className="px-48 my-4">
                <h2 className="font-bold">{popularCuisines}</h2>
            </div>
            {/* <h1 className="font-semibold text-xl bg-yellow-100 p-6 m-6">
            This is Search page</h1> */}
            </div>
        </div>
    )
}

export default Search;