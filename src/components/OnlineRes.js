import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";
import { BODY_API } from "../utils/constants";
import OnlineResShimmer from "./OnlineResShimmer";
import ButtonShimmer from "./ButtonShimmer";

const OnlineRes = () => {

    const [resOnline, setResOnline] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    //console.log(listOfRestaurants);
    const [searchRes, setSearchRes] = useState("");
    const [isLoading, setIsLoading] = useState(true); // state to track loading

    useEffect(() => {
        fetchData();
    }, []);
  
    const fetchData = async () => {
        try {
        const data = await fetch(BODY_API);
        const json = await data.json();
    
        const mainTitle = json?.data;
        setResOnline(mainTitle?.cards?.[2]?.card?.card?.title);
        //console.log(mainTitle?.cards[2]);
        const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
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
      <div>
      <div className="p-2 m-4 items-center pl-28">
        <ButtonShimmer />
      </div>
      <div className="flex flex-wrap justify-center mr-44">
        {Array.from({ length: 8 }).map((_, id) => (
          <OnlineResShimmer key={id} />
        ))}
      </div>
      </div>
    )
  };

    return (
      <div className="px-32">
        <div className="body ">
          {resOnline && (
            <div>
              <div className=" px-3 mt-2 pt-0.5">
              {/* Online Restaurants Title */}
              <h2 className="text-2xl font-bold mt-1 mb-1 ">
                {resOnline}
              </h2>
              </div>
          <div className="flex flex-col gap-2 rounded-lg mt-2 mb-2 h-[80px]">
            {/* Search Bar and Buttons */}
            <div className="flex items-center gap-4 overflow-y-hidden no-scrollbar">
              {/* Search Form */}
              <form 
              className="flex items-center gap-2 pl-2 py-2 rounded-lg" 
              onSubmit={(e) => e.preventDefault()}
              >
                <input
                type="text"
                data-testid="searchInput"
                className="h-10 rounded-md bg-white border-2 border-gray-200 px-3 outline-none"
                placeholder="Search Restaurant"
                value={searchRes}
                onChange={(e) => {
                  setSearchRes(e.target.value);
                  const filteredRestaurants = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);
              }}
              />
              </form>
              {/* Button List */}
              <ButtonList
              listOfRestaurants={listOfRestaurants}
              setFilteredRestaurants={setFilteredRestaurants}
              />
              </div>
              </div>
              {/* Restaurant Cards */}
              <div className="flex flex-wrap justify-normal">
                {filteredRestaurants.map((restaurant) => (
                  <Link
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}
                  >
                    <RestaurantCard resData={restaurant} />
                  
                  </Link>
                ))}
              </div>
          </div> 
          )}
        </div>
        </div>
      );
};

export default OnlineRes;