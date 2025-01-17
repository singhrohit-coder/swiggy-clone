import RateButton from "./RateButton";
import CostButton from "./CostButton";

const ButtonList = ({ listOfRestaurants, setFilteredRestaurants }) => {

    return (
      <div className="filter m-4 p-4 flex items-center">
        <RateButton
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <CostButton 
      listOfRestaurants={listOfRestaurants}
      setFilteredRestaurants={setFilteredRestaurants}/>
      </div>
    );
  };
  
  export default ButtonList;
  