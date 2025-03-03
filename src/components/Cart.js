import { useSelector, useDispatch } from "react-redux";
import { clearCart, seeRestaurantsNearYou, incrementItem, decrementItem } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";

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
    );
      
};

export default Cart;


