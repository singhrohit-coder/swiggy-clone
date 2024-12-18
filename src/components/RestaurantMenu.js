import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();// useParams -> for reading restaurant Id

    useEffect(() => {
        fetchMenu();
    }, []) // if not dependency array -> it render everytime my component renders.

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API + resId);// api -> restaurantId.
            const json = await data.json(); // converting data to json.    
            //console.log("Fetched Data:", json);
            setResInfo(json.data);
        
        } catch (error) {
            console.error("Error fetching menu data:", error);
        }
    };

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