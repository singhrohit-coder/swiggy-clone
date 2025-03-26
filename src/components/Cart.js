import { useSelector, useDispatch } from "react-redux";
import { clearCart, seeRestaurantsNearYou, incrementCount, decrementCount } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import Cost from "./Cost";
import { Toaster, toast } from "react-hot-toast"; // Import Hot Toast

const Cart = () => {
    // directly fetch items data from the store
    const cartItems = useSelector((store) => store.cart.items);
    const emptyCartUrl = useSelector((store) => store.cart.emptyCartUrl);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSeeRestaurantsNearYou = () => {
        dispatch(seeRestaurantsNearYou());
        navigate("/body"); //navigate to home page     
    }
    const handleIncrement = (id) => {
        dispatch(incrementCount(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementCount(id));
    };

    // toast message
    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success('Cart has been cleared!'); // Show success toast after clearing cart
    };

    // Define fixed fees
    const deliveryFee = 92;
    const deliveryTip = 20;
    const platformFee = 10.006;
    const gstAndRestaurantCharges = 40.03;

    const handleShowCartToast = () => {
        if (cartItems.length > 0) {
            toast.success("Payment Successfull");
            dispatch(clearCart());
            //setTimeout(() => navigate("/body"), 50);
        } else {
            toast.error("Your cart is empty!");
        }
    };

    return (
        <div className="w-full h-auto flex justify-center items-center">
            <div className="flex flex-col items-center w-2/3">
                {/* Cart Title */}
                <h1 className="text-3xl font-bold">Cart</h1>
    
                {/* Clear Cart Button Section */}
                <div className="my-4">
                    {cartItems.length > 0 && (
                        <button
                            className="p-2 m-2 bg-black text-white rounded-lg"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    )}
                </div>
    
                {/* Empty Cart Section */}
                {cartItems.length === 0 && (
                    <div className="my-4 text-center">
                        <img
                            src={emptyCartUrl} // use the URL redux state
                            alt="Empty Cart"
                            className="w-2/4 h-auto m-auto"
                        />
                        <h1 className="font-bold">Your Cart Is Empty</h1>
                        <button
                            className="p-2 m-2 bg-orange-500 text-white font-bold rounded-lg"
                            onClick={handleSeeRestaurantsNearYou}
                        >
                            SEE RESTAURANTS NEAR YOU
                        </button>
                    </div>
                )}

                <div className="flex">
                {/* Cart Items Section */}
                <div className="mt-6 w-full h-[300px] overflow-y-auto no-scrollbar">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 px-5 bg-slate-400">
                            <div className="flex flex-col">
                                <span className="font-bold">{item.card.info.name}</span>
                                <span>₹ {(item.card.info.price / 100).toFixed(2)}</span>
                            </div>
                            
                            <div className="flex items-center bg-white shadow-lg border border-gray-300 rounded-md">
                                <button
                                    className="text-red-500 font-bold text-lg  py-2 px-1"
                                    onClick={() => handleDecrement(item.card.info.id)}
                                >
                                    <FaMinus />
                                </button>
                                <span className="px-4 text-lg">{item.quantity}</span>
                                <button
                                    className="text-green-600 font-bold text-lg py-2 px-1"
                                    onClick={() => handleIncrement(item.card.info.id)}
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
    
                <div className="mt-6 w-[455px] ">    
                {/* Bill Details Section (Only if cart has items) */}
                {cartItems.length > 0 && (
                    <Cost className="bg-slate-400"
                    cartItems={cartItems}
                    deliveryFee={deliveryFee}
                    deliveryTip={deliveryTip}
                    platformFee={platformFee}
                    gstAndRestaurantCharges={gstAndRestaurantCharges}
                    />
                )}
                
                {/* Button to show toast after cart is not empty */}
                {cartItems.length > 0 && (
                    <button
                        className="p-2 w-64 mt-2 ml-[14px] text-white bg-orange-500 font-bold rounded-lg "
                        onClick={handleShowCartToast}
                    >
                        CHECKOUT
                    </button>
                )}
                </div>
            </div>
            </div>
            {/* Toaster component */}
            <Toaster />
        </div>
    );
};

export default Cart;
