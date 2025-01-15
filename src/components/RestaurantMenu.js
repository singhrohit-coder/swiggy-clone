import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import Shimmer from "./shimmer";
import { MdStars } from "react-icons/md";

const RestaurantMenu = () => {

    const { resId } = useParams();// useParams -> for reading restaurant Id

    const resInfo = useRestaurantMenu(resId); // useResataurantMenu -> Custom Hook for Fetching Data

    if (resInfo === null ) return <Shimmer />

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla } = 
    resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card.card;
    console.log(itemCards);

    // Item Category inside Restaurant Cards.
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return  (
        <div className=" menu px-60">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <div className="bg-white shadow-lg rounded-3xl p-6 border-8 border-gray-200 ">
            <div className="font-bold text-m">
                <div className=" flex gap-2">            
                    <MdStars className="text-green-600 my-1 size-5" />
            <span>{avgRating}</span>
            <span>({totalRatingsString})</span>
            <span>:</span>
            <span>{costForTwoMessage}</span>
            </div>
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