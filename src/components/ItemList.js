import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    //console.log(items);

    const dispatch = useDispatch();
// add [item] to our cart
    const handleAddItems = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div> 
            {items.map((item) => ( 
                <div
                data-testId = "foodItem" // for testing.. 
                key = {item?.card?.info?.id} 
                className="p-2 m-2 border-gray-200 border-b-2 flex justify-between rounded-lg">
                    <div className="w-9/12">
                    <div className="py-2">
                        <div className="text-lg font-bold">{item?.card?.info?.name}</div>
                        <div className="text-lg font-semibold"> ₹ {item?.card?.info?.price 
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                        </div>
                        
                        <div className="text-lg font-semibold">⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}</div>
                    </div>
                    <p className="text-sm font-medium">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-2">
                    <div className="relative top-44 left-7 bg-gray-300 rounded-lg">
                    <button className="px-4 py-2 text-orange-700 font-bold"
                    onClick={() => handleAddItems(item)}
                    > 
                    ADD </button>
                    </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-full"/>
                    </div>
                    </div>           
            ))}
        </div>
    );
};

export default ItemList;
