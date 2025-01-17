

const CostButton = ({listOfRestaurants, setFilteredRestaurants}) => {
    return (
        <div className="filter m-4 p-4 flex items-center">
            <button className="px-4 py-1 font-semibold bg-white border border-gray-950 mx-2 rounded-full"
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