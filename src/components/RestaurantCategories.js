import { useState } from "react";
import ItemList from "./ItemList";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";

const RestaurantCategories = ({ data }) => {
    const [showItems, setShowItems] = useState(true);

    const openClick = () => {
        setShowItems(!showItems);
        // setShowCarousel(!showCarousel);
    };
    
    return (
        <div className="mt-2 py-1">
        <div className="rounded-xl  bg-zinc-100 py-2 shadow-xl">
            {/* Header */}
            <div>
            <div className=" cursor-pointer flex justify-between items-end pr-6"  
            onClick={openClick}>
                <span className=" pl-3 font-semibold text-lg">{data.title} ({data.itemCards.length})    
                </span>
                <span className="text-2xl">
                {showItems ? <CiCircleChevUp /> : <CiCircleChevDown />}</span>
            </div>
            {/* Accordion Body */}
            {showItems && <ItemList items = {data.itemCards} />}
            </div>
        </div>
        </div>
    );
};

export default RestaurantCategories;

