import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    //console.log(items);

    const cartItems = useSelector((store) => store.cart.items);

     const dispatch = useDispatch();
     // add [item] to our cart
    const handleAddItems = (item) => {
        dispatch(addItem(item));
    };
    const handleRemoveItems = (item) => {
        dispatch(removeItem(item));
    };

    const isItemInCart = (item) => {
        return cartItems.some((cartItem) => cartItem?.card?.info?.id === item?.card?.info?.id);
    };

    return (
        <div> 
            {items.map((item) => ( 
                <div
                data-testId = "foodItem" // for testing.. 
                key = {item?.card?.info?.id} 
                className="p-2 m-2 border-yellow-100 border-b-2 flex justify-between">
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
                    <div className="relative">
                      <img
                      src={RESTAURANT_CARD_IMAGE_URL + item?.card?.info?.imageId}
                      className="w-full rounded-lg"
                      alt="Dish"
                      />
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      {/* Button Container */}
                      <div className="bg-white rounded-lg shadow-lg border border-gray-300 px-8 py-1">
                        {isItemInCart(item) ? (
                            <button
                            className="text-green-600 font-bold text-lg"
                            onClick={() => handleRemoveItems(item)}
                            >
                              REMOVE
                              </button> 
                        ) : (
                            <button
                        className="text-green-600 font-bold text-lg"
                        onClick={() => handleAddItems(item)}
                        >
                          ADD
                          </button>
                        )}
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>           
                        ))}
                        </div>
    );
};

export default ItemList;