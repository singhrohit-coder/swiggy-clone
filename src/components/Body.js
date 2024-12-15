import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  console.log("bodyrendered");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // for making search functionality

  const [searchText, setSearchText] = useState("");

// State Variable = Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
        "https://dummyjson.com/recipes" // when use corsproxy it gives us error.
    );
    const json = await data.json();
    setListOfRestaurants(json.recipes);
    setFilteredRestaurants(json.recipes);
  };

  
  return listOfRestaurants.length === 0 ? ( 
  <Shimmer /> 
  ) : (
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
                res.name.toLowerCase().includes(searchText.toLowerCase())
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
              (res) => res.rating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          
          Top Rated Restaurants</button>
        </div>
        <div className="res-container">

        {/* //what we did here ? inside res-container loop over resList doing .map for each restaurant returning a piece of jsx. */}
          {filteredRestaurants.map((restaurant, index) => ( // index is not good for unique id, but in this case it only works. */}
            <RestaurantCard 
            key={index} // unique key for each restaurantcard.
            resData={restaurant} // Pass restaurant data to card.
            />  
          ))                                          
          }
      </div>
    </div>
  );
};

export default Body;
