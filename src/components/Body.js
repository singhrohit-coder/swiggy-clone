import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
// import {Link } from "react-router-dom"


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  console.log("bodyrendered");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // for making search functionality

  const [searchText, setSearchText] = useState("");

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

      console.log(json.data.cards[4]);

      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const isLoading = listOfRestaurants === null;
  if (isLoading) return <Shimmer />;
  
  return  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
          className="search-btn"
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          
          Top Rated Restaurants</button>
        </div>
        <div className="res-container">

        {/* //what we did here ? inside res-container loop over resList doing .map for each restaurant returning a piece of jsx. */}
          {filteredRestaurants.map((restaurant) => ( // index is not good for unique id, but in this case it only works. */}
            <RestaurantCard 
            key={restaurant.info.id} // unique key for each restaurantcard.
            resData={restaurant} // Pass restaurant data to card.
            />  
          ))
          }
      </div>
    </div>
  );
};

export default Body;
