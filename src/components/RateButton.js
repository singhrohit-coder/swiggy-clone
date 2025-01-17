

const RateButton = ({ listOfRestaurants, setFilteredRestaurants}) => {

    return (
            <div className="filter m-4 p-4 flex items-center">
        <button
        // filter-btn
          className="px-4 py-1 bg-white border border-gray-950 mx-2 font-semibold rounded-full"
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