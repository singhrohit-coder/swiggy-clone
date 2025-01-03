import Shimmer from "./shimmer";
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
    const { resId } = useParams();// useParams -> for reading restaurant Id

    const resInfo = useRestaurantMenu(resId);// Custom Hook for Fetching Data

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla } = 
    resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card.card;
    
    //console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]);
    // Item Category inside Restaurant Cards.
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories);

    return  (
        <div className="px-60">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <div className="bg-white shadow-lg rounded-3xl p-6 border-8 border-gray-200 ">
            <div className="font-bold text-m">
              <h4><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{avgRating} ({totalRatingsString}) : {costForTwoMessage}</h4>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{sla?.slaString}</h3>
            </div>
            </div>
            {/* Categories Accordion */}
            {categories.map((category) => (
                <RestaurantCategories 
                key={category?.card?.card?.title} 
                data = {category.card.card}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;