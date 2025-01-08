import { useSelector, useDispatch } from "react-redux";
import { clearCart, seeRestaurantsNearYou } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";



const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    // Access the URL from the Redux store
    const emptyCartUrl = useSelector((store) => store.cart.emptyCartUrl);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSeeRestaurantsNearYou = () => {
        dispatch(seeRestaurantsNearYou());
        navigate("/"); //navigate to home page 
        
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 && (
                <>
                <img src={emptyCartUrl} // use the URL redux state
                alt="Empty Cart"
                className="w-48 m-auto"
                />
                <h1 className="text-gray-600 font-bold">Your Cart Is Empty</h1>
                </>
            )}
            
                <button className="p-2 m-2 bg-orange-500 text-white font-bold rounded-lg"
                onClick={handleSeeRestaurantsNearYou}>
                    SEE RESTAURANTS NEAR YOU
            </button>
            {/* <ItemList /> */}
            <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;