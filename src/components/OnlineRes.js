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
        <div className="body px-0">
          {resOnline && (
            <div>
              <div className="px-3 -mt-6">
              {/* Online Restaurants Title */}
              <h2 className="text-2xl font-bold mt-6 -mb-8">
                {resOnline}
              </h2>
              </div>
              <div className=" flex flex-wrap">
              <form className="search py-14 px-7" 
              onSubmit={(e)=> {
                e.preventDefault();
            }}
            >
                <input
            type="text"
            data-testid="searchInput"
            className="h-[40px] px-4 rounded-xl bg-white border border-black outline-none"
            placeholder=" search"
            value={searchRes}
            onChange={(e) => {
              setSearchRes(e.target.value);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchRes.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          />
          </form>
          <div>
              <ButtonList
              listOfRestaurants={listOfRestaurants}
              setFilteredRestaurants={setFilteredRestaurants}
              />
              </div>
              </div>
              {/* Restaurant Cards */}
              <div className="flex flex-wrap justify-normal -mt-10">
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