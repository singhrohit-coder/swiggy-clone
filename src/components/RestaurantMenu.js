import Shimmer from "./shimmer";
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();// useParams -> for reading restaurant Id

    const resInfo = useRestaurantMenu(resId);// Custom Hook for Fetching Data

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = 
    resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card.card;

    console.log(itemCards);
    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>

            <h2>Menu</h2>
            <ul>
                {/* Whenever use a map always uses a id over here  */}
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -{" Rs."} 
                        {item.card.info.price / 100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;