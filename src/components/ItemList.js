import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, incrementCount, decrementCount } from "../utils/cartSlice";
import { MdStars } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";


const ItemList = ({items}) => {
    //console.log(items);

    const cartItems = useSelector((store) => store.cart.items);

     const dispatch = useDispatch();
     // add [item] to our cart
    const handleAddItems = (item) => {
        dispatch(addItem(item));
    };
    // const handleRemoveItems = (item) => {
    //     dispatch(removeItem(item));
    // };

    const handleIncrement = (id) => {
        dispatch(incrementCount(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementCount(id));
    };

    const itemQuantity = (id) => {
        const item = cartItems.find((cartItem) => cartItem.card.info.id === id);
        console.log(item.quantity)
        return item ? item.quantity : 0;
    };
    

    const isItemInCart = (id) => {
        // Check if any item in the cart matches the given item by comparing their IDs
        return cartItems.some((cartItem) => cartItem?.card?.info?.id === id);
    };

    return (
        <div> 
            {items.map((item) => ( 
                <div
                //data-testId = "foodItem" // for testing.. 
                key = {item?.card?.info?.id} 
                className="cursor-pointer p-2 m-2 border rounded-lg shadow-md flex justify-between">
                    <div className="w-9/12">
                    <div className="py-2">
                        <div className="text-lg text-left font-bold">{item?.card?.info?.name}</div>
                        <div className="text-lg text-left font-semibold"> ₹ {item?.card?.info?.price 
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                        </div>
                        
                        <div className="text-lg text-left font-semibold flex">
                        <MdStars className="text-green-600 mr-1 size-5 mt-1.5" />
                            <span >{item?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                        </div>
                    </div>
                    <p className="text-sm text-left font-medium">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-2">
                    <div className="relative">
                      <img
                      src={RESTAURANT_CARD_IMAGE_URL + item?.card?.info?.imageId}
                      className="w-full rounded-lg border border-gray-300"
                      alt="Dish"
                      />
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      {/* Button Container */}
                      <div className="bg-white rounded-lg shadow-lg border border-gray-300 px-8 py-1">
                        {/* check if the item is alread in the cart */}

                        {isItemInCart(item?.card?.info?.id) ? (
                            <div className="flex items-center space-x-2">
                            {/* Decrement button */}
                            <button
                                className="text-red-500 font-bold text-lg"
                                onClick={() => handleDecrement(item.card.info.id)}
                            >
                                <FaMinus />
                            </button>
                            {/* Quantity display */}
                            <span className="text-lg">{itemQuantity(item.card.info.id)}</span>
                            {/* Increment button */}
                            <button
                                className="text-green-600 font-bold text-lg"
                                onClick={() => handleIncrement(item.card.info.id)}
                            >
                                <FaPlus />
                            </button>
                        </div>  
                        //     <button
                        // className="text-green-600 font-bold text-lg"
                        // onClick={() => handleRemoveItems(item)}
                        // >
                        //   <FaMinus />
                        //   </button>              
                        ) : (
                            // if item is not in the cart show add button
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