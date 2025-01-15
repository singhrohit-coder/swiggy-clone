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
                className="p-2 m-2 border-gray-300 border-b-2 flex justify-between rounded-lg">
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
                    {/* <div className="w-3/12 p-2">
                    <div className="relative">
                    <img src={CDN_URL + item?.card?.info?.imageId} 
                    className="w-full rounded-lg"/>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-white rounded-lg shadow-lg border border-gray-300">
                    <div>
                    <button className="px-8 py-2 text-green-600 font-bold text-lg"
                    onClick={() => handleAddItems(item)}
                    > 
                    ADD </button>
                    </div>
                    <div className="mt-2">
                    <p className="text-gray-500 text-center text-sm font-medium">Customisable</p>
                    </div>
                    </div>
                    </div> */}
                    <div className="w-3/12 p-2">
                    <div className="relative">
                      <img
                      src={CDN_URL + item?.card?.info?.imageId}
                      className="w-full rounded-lg"
                      alt="Dish"
                      />
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      {/* Button Container */}
                      <div className="bg-white rounded-lg shadow-lg border border-gray-300 px-8 py-1">
                        <button
                        className="text-green-600 font-bold text-lg"
                        onClick={() => handleAddItems(item)}
                        >
                          ADD
                          </button>
                          </div>
                          {/* "Customisable" Text */}
                          {/* <div className="mt-1">
                          <p className="text-gray-500 text-sm font-medium">Customisable</p>
                          </div> */}
                          </div>
                          </div>
                          </div>
                          </div>           
                        ))}
                        </div>
    );
};

export default ItemList;
