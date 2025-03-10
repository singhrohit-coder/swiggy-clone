

const RateButton = ({ listOfRestaurants, setFilteredRestaurants}) => {

    return (
            <div className="filter py-6">
        <button
        // filter-btn
          className="font-medium w-[100px] mx-2 py-2 rounded-xl border border-black-500 hover:bg-slate-100"
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