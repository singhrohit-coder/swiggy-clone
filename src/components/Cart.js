import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    // Access the URL from the Redux store
    const emptyCartUrl = useSelector((store) => store.cart.emptyCartUrl);
    
    const dispatch = useDispatch();

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
                <div>
                    <h1>Yoyr Cart Is Empty</h1>
                    <h3>YouCan Go To The Homepage To View The New Restaurants</h3>
                    {/* // Use the URL from Redux store */}
                    <img className="m-4 h-full"
                    src={emptyCartUrl} 
                    alt="Empty Cart"
                    />
                </div> 
            )}
            <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;