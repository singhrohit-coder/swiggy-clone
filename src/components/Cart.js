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
        //console.log("Dispatching seeRestaurantsNearYou action");
        dispatch(seeRestaurantsNearYou());
        navigate("/"); //navigate to home page 
        
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = totalPrice >= 400 ? 0 : 25;
  const discount = -30;
  const platformFee = 6;
  const gstAndCharges = Math.round(totalPrice * 0.18);
  const finalPrice = totalPrice + deliveryFee + platformFee + gstAndCharges + discount;

    // return (
    //     <div className="text-center m-4 p-4">
    //         <h1 className="text-2xl font-bold">Cart</h1>
    //         <div className="w-6/12 m-auto">
    //         <button
    //         className="p-2 m-2 bg-black text-white rounded-lg"
    //         onClick={handleClearCart}>
    //             Clear Cart
    //         </button>
    //         {cartItems.length === 0 && (
    //             <>
    //             <img src={emptyCartUrl} // use the URL redux state
    //             alt="Empty Cart"
    //             className="w-48 m-auto"
    //             />
    //             <h1 className="text-gray-600 font-bold">Your Cart Is Empty</h1>
    //             </>
    //         )}
            
    //         {cartItems.length === 0 && (
    //             <button className="p-2 m-2 bg-orange-500 text-white font-bold rounded-lg"
    //             onClick={handleSeeRestaurantsNearYou}>
    //                 SEE RESTAURANTS NEAR YOU
    //         </button>
    //         )}
    //         {/* <ItemList /> */}
    //         <ItemList items={cartItems} />
    //         </div>
    //     </div>

    // );
    

    return (
        <div className="p-6">
          {/* Delivery Address */}
          <div className="mb-6">
            <h2 className="text-xl font-bold">Delivery Address:</h2>
            <p className="text-gray-700">Suraj Gharpankar</p>
            <p className="text-gray-700">Plot 28, Block 05, Rajarampuri, Kolhapur</p>
            <p className="text-gray-700">416013</p>
          </div>
    
          {/* Cart and Items */}
          <div className="flex flex-col lg:flex-row">
            {/* Item List Section */}
            <div className="lg:w-2/3 p-4 border rounded-md shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                <button
                  className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
    
              {cartItems.length === 0 ? (
                <div className="text-center">
                  <img
                    src={emptyCartUrl}
                    alt="Empty Cart"
                    className="w-48 mx-auto"
                  />
                  <h2 className="text-lg text-gray-600 font-bold">Your Cart Is Empty</h2>
                  <button
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    onClick={handleSeeRestaurantsNearYou}
                  >
                    SEE RESTAURANTS NEAR YOU
                  </button>
                </div>
              ) : (
                <ItemList items={cartItems} />
              )}
            </div>
    
            {/* Bill Details Section */}
            {cartItems.length > 0 && (
              <div className="lg:w-1/3 p-4 mt-6 lg:mt-0 lg:ml-6 border rounded-md shadow-md">
                <h2 className="text-xl font-bold mb-4">Bill Details</h2>
                <div className="flex justify-between mb-2">
                  <span>Total Items ({totalItems}):</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Delivery Fee:</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Extra discount for you:</span>
                  <span>₹{discount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Platform fee:</span>
                  <span>₹{platformFee}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>GST and Restaurant Charges:</span>
                  <span>₹{gstAndCharges}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>TO PAY:</span>
                  <span>₹{finalPrice}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      );








};

export default Cart;