import { useState, useEffect } from "react";
import { BODY_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";
import OnlineResShimmer from "./OnlineResShimmer";

const OnlineRes = () => {

    const [resOnline, setResOnline] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    //console.log(listOfRestaurants);
    const [isLoading, setIsLoading] = useState(true); // state to track loading

    //const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
        const data = await fetch(BODY_API);
        const json = await data.json();
    
        const mainTitle = json?.data;
        setResOnline(mainTitle?.cards[1]?.card?.card?.title);
        //console.log(mainTitle?.cards[2]);
        const restaurants =
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
        setListOfRestaurants(restaurants);
        //console.log(restaurants);
        setFilteredRestaurants(restaurants);
        //console.log(restaurants);   
        setIsLoading(false); // Data has loaded
    } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Stop loading even or error
    } 
  };

  // Render shimmer if loading
  if (isLoading) {
    return (
      <div className="flex flex-wrap">
        {Array.from({ length: 8 }).map((_, index) => (
          <OnlineResShimmer key={index} />
        ))}
      </div>
    )
  };

    return (
      <div className="px-32 bg-stone-50">
        <div className="body px-0">
          {resOnline && (
            <div>
              <div className="px-3">
              {/* Online Restaurants Title */}
              <h2 className="text-2xl font-bold mt-6 -mb-8">
                {resOnline}
              </h2>
              </div>
              <ButtonList
              listOfRestaurants={listOfRestaurants}
              setFilteredRestaurants={setFilteredRestaurants}
              />
              {/* Restaurant Cards */}
              <div className="flex flex-wrap justify-center -mt-10 mr-44">
                {filteredRestaurants.map((restaurant) => (
                  <Link
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}
                  >
                    <RestaurantCard resData={restaurant} />
                  
                  </Link>
                ))}
              </div>
              {/* Filter and Search Section */}
              {/* <div className="filter flex"> */}
                {/* Search Input */}
                {/* <div className="search p-4 m-4">
                  <input
                    type="text"
                    data-testid="searchInput"
                    className="w-36 pl-2 border border-solid-black rounded-lg"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search"
                  />
                  <button
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
                </div> */}
          </div>
          )}
        </div>
        </div>
      );
};

export default OnlineRes;