

const CostButton = ({listOfRestaurants, setFilteredRestaurants}) => {
    return (
        <div className="filter m-4 p-4 flex items-center">
            <button className="px-4 py-1 font-semibold bg-white border border-gray-950 mx-2 rounded-full"
            onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.costForTwo >= 300 && res.info.costForTwo <= 400
            );
            console.log(filteredList);
            setFilteredRestaurants(filteredList);
            }}
            >
                Rs.300-Rs.400
            </button>

        </div>
    );
};

export default CostButton;