import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //console.log("bodyrendered");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // for making search functionality
  //console.log(filteredRestaurants, setFilteredRestaurants);


  const [searchText, setSearchText] = useState();

// State Variable = Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4329271&lng=81.7583495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      console.log(json.data.cards[2]);

      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //console.log(json);

    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Look's like you're not connected to the internet!!</h1>
    );
  }

  const isLoading = listOfRestaurants === null;
  if (isLoading) return <Shimmer />;
  
  return  (
    <div className="body">
      <div className="filter flex">
        {/* search */}
        <div className="search p-4 m-4">
          <input
            type="text"
            // search-box
            className="w-36 border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
          // search-btn
          className="px-2 bg-orange-400 mx-2 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter m-4 p-4 flex items-center">
        <button
        // filter-btn
          className="px-2 bg-gray-300 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          
          Top Rated Restaurants</button>
        </div>
        </div>
        {/* res-container */}
        <div className="flex flex-wrap justify-center">

        {/* //what we did here ? inside res-container loop over resList doing .map for each restaurant returning a piece of jsx. */}          
        {filteredRestaurants.map((restaurant) => ( 
            <Link 
            key={restaurant.info.id} // unique key for each restaurantcard.
            to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} // Pass restaurant data to card.
            /> </Link>
          ))
          }
      </div>
    </div>
  );
};

export default Body;
