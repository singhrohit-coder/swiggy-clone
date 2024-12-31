import { LOGO_URL } from "../utils/constants"; // Used as a Const variable bcz it is a variable.
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {

  const [btnName, setBtnName] = useState("Sign in");
  //console.log("Header Render");

  const {loggedInUser} = useContext(UserContext);

  const onlineStatus = useOnlineStatus();// Custom Hook for online status

    return (
      // flex items-center
      // header
      <div className="flex justify-between shadow-lg mb-5">
         {/* logo-container */}
        <div className="logo-container">
          {/* logo */}
          <img className="px-4 py-2 w-28 cursor-pointer" src={LOGO_URL} />
        </div>
        {/* nav-items */}
        <div className="_1VEUe "> 
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className=" px-4 xNIjm">
              <Link to="/">Home</Link>
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

            <li className="cursor-pointer">Cart</li>
            
          </ul>  
        </div>
      </div>
    );
};

export default Header;