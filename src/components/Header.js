import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
// import Search from "./Search";


export const Header = () => {

  const [btnName, setBtnName] = useState("Sign in");
  //console.log("Header Render");

  // const {loggedInUser} = useContext(UserContext);

  // Custom Hook for online status
  const onlineStatus = useOnlineStatus();

  // Subscribing our store using selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

    return (
      // flex items-center
      // header shadow-lg mb-5
      <div className="flex justify-between items-center">
         {/* logo-container */}
         <Link to="/">
        <div className="logo-container">
          {/* logo */}
          
          <img className="px-4 py-1 w-28 cursor-pointer transition-transform duration-500 hover:scale-110" src={LOGO_URL} />
        </div>
        </Link>
        {/* nav-items */}
        <div className="_1VEUe "> 
          <ul className="flex p-2 m-0 text-gray-500 font-medium">
            <li className="px-4">
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="px-4 xNIjm text-gray-500"><Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2"/>Search</Link>
            </li>
            
            <button 
            // sign-btn
            className="px-4 py-0" 
            onClick={() => {
              setBtnName(btnName === "Sign in" ? "Rohit": "sign in");
              // btnName === "Sign in" 
              // ? setBtnName("Logout") 
              // : setBtnName("Sign in");
            }}
            >
              {btnName}
              {/* <li className="font-extrabold">{loggedInUser}</li> */}
            </button>

            <li className="cursor-pointer">
              <Link to="/cart">
              <span style={{ 
                
                backgroundColor: "green",
                color: "white",
                width: "20px",
                height: "20px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "3px 3px 3px 3px", // Optional for slightly rounded corners
                }}
                >
                {cartItems.length}</span> Cart</Link></li>
          </ul>  
        </div>
      </div>
    );
};

export default Header;