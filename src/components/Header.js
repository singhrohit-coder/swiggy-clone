import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const Header = () => {

  const [btnName, setBtnName] = useState("Sign in");
  //console.log("Header Render");

  const {loggedInUser} = useContext(UserContext);

  // Custom Hook for online status
  const onlineStatus = useOnlineStatus();

  // Subscribing our store using selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

    return (
      // flex items-center
      // header
      <div className="flex justify-between shadow-lg mb-5">
         {/* logo-container */}
         <Link to="/">
        <div className="logo-container">
          {/* logo */}
          
          <img className="px-4 py-2 w-28 cursor-pointer" src={LOGO_URL} />
        </div>
        </Link>
        {/* nav-items */}
        <div className="_1VEUe "> 
          <ul className="flex p-4 m-4 text-gray-500 font-medium">
            <li className="px-4">
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="px-4 xNIjm text-gray-500"><Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2"/>Search</Link>
            </li>
            <li className="px-4 xNIjm">
            <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 xNIjm">
              <Link to="/offers">Offers</Link>
            </li>
            <button 
            // sign-btn
            className="px-4 xNIjm" 
            onClick={() => {
              setBtnName(btnName === "Sign in" ? "Logout" : "Sign in");
              // btnName === "Sign in" 
              // ? setBtnName("Logout") 
              // : setBtnName("Sign in");
            }}
            >
              {btnName}
              <li className="font-extrabold">{loggedInUser}</li>
            </button>

            <li className="cursor-pointer">
              <Link to="/cart">({cartItems.length})Cart</Link></li>
              
            
          </ul>  
        </div>
      </div>
    );
};

export default Header;