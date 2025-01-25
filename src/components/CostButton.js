

const CostButton = ({listOfRestaurants, setFilteredRestaurants}) => {
    return (
        <div className="filter py-6 space-x-4">
            <button className="px-4 py-1 font-medium bg-white border border-gray-500 mx-2 rounded-full"
            onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => {
                    // Extract numeric value from the cost string
                    const cost = parseInt(res.info.costForTwo.replace(/\D/g, ''), 10);
                    console.log(cost); // Check the parsed cost value
                    return cost >= 300;
                  });
                  console.log(filteredList);
                  setFilteredRestaurants(filteredList);
                }}
                >
                Rs.300
            </button>

        </div>
    );
};

export default CostButton;