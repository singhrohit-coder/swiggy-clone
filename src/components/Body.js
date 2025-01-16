import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import OnlineRes from "./OnlineRes";
import TopRes from "./TopRes";
import Footer from "./Footer";
// import MindRes from "./MindRes";


const Body = () => {

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Look's like you're not connected to the internet!!</h1>
    );
  }

  // const isLoading = listOfRestaurants === null;
  // if (isLoading) return <Shimmer />;
  
  return  (
    <div className="body">
      {/* <MindRes /> */}
      {/* <TopRes /> */}
      <OnlineRes />
      <Footer />
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
    </div>
  );
};

export default Body;
