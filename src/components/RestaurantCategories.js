import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
    const [showItems, setShowItems] = useState(false);
    // console.log(data);
    // const [showCarousel, setShowCarousel] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
        // setShowCarousel(!showCarousel);

    };
    
    return (
        <div className="py-4">
            {/* Header */}
            <div className="rounded-lg bg-gray-50">
            <div className="flex justify-between cursor-pointer"  onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {/* <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.carousel.length})</span>
            </div>
            {showCarousel && <ItemList items={data.carousel} />} */}
            {/* Accordion Body */}
            {showItems && <ItemList items = {data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategories;

