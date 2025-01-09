import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { BODY_API } from "../utils/constants";
import OnlineRes from "./OnlineRes";



const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]); // for making search functionality
//   //console.log(filteredRestaurants);

//   const [searchText, setSearchText] = useState();
//   // console.log("bodyrendered", listOfRestaurants);

//   // const [imageGrid, setImageGrid] = useState([]);

// // State Variable = Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).
//   useEffect(() => {
//     fetchData();
//   }, []);


  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(BODY_API);
        
  //     const json = await data.json();
  //     //console.log(json);
  //     // console.log(json.data.cards[2]);

  //     setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  //     // const onYourMindCard = json?.data?.cards[0]?.card?.card;

  //     // setImageGrid(onYourMindCard?.imageGridCards.info || []);

  //   } catch (error) {
  //     console.error("Error fetching data:", error);
      
  //   }
  // };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Look's like you're not connected to the internet!!</h1>
    );
  }

  // const isLoading = listOfRestaurants === null;
  // if (isLoading) return <Shimmer />;
  
  return  (
    <div className="body border border-black box-border">
      <OnlineRes />
      {/* "What's on your mind?" image
      <div className="">
        {imageGridCards.map((card) => (
          <div key={card.id} className="">
            <img className=""
            src={ }
            alt=""/>
            <div></div>
          </div>
        ))}
      </div> */}
      {/* <div className="filter flex">
        {/* search */}
        {/* <div className="search p-4 m-4">
          <input
            type="text"
            data-testId = "searchInput" // for testing..
            // search-box
            className="w-36 pl-2 border border-solid-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
             placeholder="Search"
          />  */}
          {/* <button
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
        </div> */}
        {/* <div className="filter m-4 p-4 flex items-center">
        <button
        // filter-btn
          className="px-4 py-1 font-normal bg-white border border-solid-black mx-2 rounded-full"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Ratings 4.0+ </button>
        </div>
        </div> */}
        {/* Top Rated Restaurants */}
        {/* res-container */}
        {/* grid grid-cols-4 gap-2 md:grid-cols-2 */}
        {/* <div className="flex flex-wrap justify-center "> */}
            {/* //what we did here ? inside res-container loop over resList doing .map for each restaurant and returning a piece of jsx. */}          
        {/* {filteredRestaurants.map((restaurant) => ( 
            <Link 
            key={restaurant.info.id} // unique key for each restaurantcard.
            to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} // Pass restaurant data to RestaurantCard.
            /> 
            </Link>
          ))
          } 
      </div>*/}
    </div>
  );
};

export default Body;
