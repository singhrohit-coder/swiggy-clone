import { LOGO_URL } from "../utils/constants"; // Used as a Const variable bcz it is a variable.
import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {

  const [btnName, setBtnName] = useState("Sign in");
  //console.log("Header Render");

  const onlineStatus = useOnlineStatus();// Custom Hook for online status

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items"> 
          <ul>
            <li>
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About us</Link>
            </li>
            <li>
            <Link to="/contact">Contact us</Link>
            </li>
            <li>
            <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <button 
            className="Sign-btn" 
            onClick={() => {
              setBtnName(btnName === "Sign in" ? "Logout" : "Sign in");
              // btnName === "Sign in" 
              // ? setBtnName("Logout") 
              // : setBtnName("Sign in");
            }}
            >
              {btnName}
            </button>
            <li>Cart</li>
            
          </ul>  
        </div>
      </div>
    );
};

export default Header;