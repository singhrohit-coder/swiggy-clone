

const RateButton = ({ listOfRestaurants, setFilteredRestaurants}) => {

    return (
            <div className="filter m-2 p-4 flex items-center">
        <button
        // filter-btn
          className="px-4 py-1 font-medium bg-white border border-gray-500 mx-2 rounded-full"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            //console.log(filteredList);// check the filtered result
            setFilteredRestaurants(filteredList);
          }}
        >
          Rating 4.0+ </button>
          </div>
    );
};

export default RateButton;