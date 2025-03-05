import { useSelector, useDispatch } from "react-redux";
import { clearCart, seeRestaurantsNearYou, incrementCount, decrementCount } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";
//import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    // Access the URL from the Redux store
    const emptyCartUrl = useSelector((store) => store.cart.emptyCartUrl);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSeeRestaurantsNearYou = () => {
        //console.log("Dispatching seeRestaurantsNearYou action");
        dispatch(seeRestaurantsNearYou());
        navigate("/body"); //navigate to home page     
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="w-full h-screen flex justify-center items-center border border-black">
          <div className="">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className=" rounded-2xl">
            {/* when cart is empty don't show clear cart button */}
            {cartItems.length > 0 && (
            <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>
                Clear Cart
            </button>
            )}
            {cartItems.length === 0 && (
                <>
                <img src={emptyCartUrl} // use the URL redux state
                alt="Empty Cart"
                className="w-56 m-auto"
                />
                <div className="items-center justify-center">
                <h1 className=" font-bold">Your Cart Is Empty</h1>
                </div>
                </>
            )}
            {/* if cart is empty show see restaurants button */}
            {cartItems.length === 0 && (
                <button className="p-2 m-2 bg-orange-500 text-white font-bold rounded-lg"
                onClick={handleSeeRestaurantsNearYou}>
                    SEE RESTAURANTS NEAR YOU
            </button>
            )}
            <div className=" bg-white">
            {/* <ItemList /> */}
            <ItemList items={cartItems} />
            </div>
            </div>
        </div>
        </div>

        // <div>
        //     <h1 className="text-2xl font-bold">Your Cart</h1>
        //     {cartItems.length === 0 ? (
        //         <p className="text-gray-500">Your cart is empty.</p>
        //     ) : (
        //         <div>
        //             {cartItems.map((item) => (
        //                 <div key={item.card.info.id} className="flex justify-between border p-2 my-2 rounded">
        //                     <div>
        //                         <h2 className="text-lg font-bold">{item.card.info.name}</h2>
        //                         <p>₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</p>
        //                         <p className="text-gray-500">Quantity: {item.quantity}</p> {/* ✅ Show updated quantity */}
        //                     </div>
        //                     <div className="flex items-center">
        //                         <button
        //                             className="text-green-600 font-bold text-lg mx-2"
        //                             onClick={() => dispatch(decrementCount(item.card.info.id))}
        //                         >
        //                             <FaMinus />
        //                         </button>
        //                         <span className="text-lg">{item.quantity}</span> {/* ✅ Updated Quantity */}
        //                         <button
        //                             className="text-green-600 font-bold text-lg mx-2"
        //                             onClick={() => dispatch(incrementCount(item.card.info.id))}
        //                         >
        //                             <FaPlus />
        //                         </button>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     )}
        // </div>
    );
      
};

export default Cart;


