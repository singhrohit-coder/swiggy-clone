import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiContactsBookLine } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { toggleForm } from "../utils/appSlice";
import { useDispatch } from "react-redux";
//import LoginToggle from "./LoginToggle";


export const Header = () => {

  const [btnName, setBtnName] = useState("SignIn");

  //const [isLoginVisible, setIsLoginVisible] = useState(false);
  //console.log("Header Render");

  const dispatch = useDispatch();

  // const {loggedInUser} = useContext(UserContext);

  // Custom Hook for online status, it retrieves the current value which is stored in the [onlineStatus] state.
  const onlineStatus = useOnlineStatus();

  // Subscribing our store using selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  const toggleFormHandler = () => {
    dispatch(toggleForm());

    setBtnName((prev) => (prev === "Sign In" ? "Logout" : "Sign In"));
  };

    return (
      // flex justify-between items-center
      <div className="flex justify-between items-center shadow-lg px-6 py-2 bg-white">
         {/* logo-container */}
         <Link to="/">
         <div className="logo-container">
          <img 
          className="px-4 w-28 size-20 cursor-pointer transition-transform duration-500 hover:scale-110" 
          alt="Logo"
          src={LOGO_URL} 
          />
        </div>
        </Link>
        {/* nav-items */}
        <div className=""> 
          <ul className="flex p-2 m-0 text-gray-500 font-medium cursor-pointer">

          <li className="px-4 py-0 font-bold hidden md:flex items-center hover:text-orange-500">
              <Link to="/search/">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 hover:text-orange-500"/>Search</Link>
            </li>
          
          <li className="px-4 py-0 font-bold hidden md:flex items-center hover:text-orange-500">About</li>  
          <li className="px-4 py-0 font-bold hidden md:flex items-center hover:text-orange-500">
          <RiContactsBookLine className="size-5 mr-2"/>
          Contact</li>
            {/* <li className="px-4">
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li> */}
            <li className="px-4 py-0 font-bold hidden md:flex items-center hover:text-orange-500">
              <span>
              {<FaUserLarge onClick={() => 
              toggleFormHandler()} // Call the function if the button name is "SignIn"
                className=""/>}
              </span>
            </li>
            {/* <Link to="/form">  
            <button className="px-4 py-0 hidden md:flex items-center cursor-pointer hover:text-orange-500" 
            onClick={() => {toggleFormHandler()
              btnName === "SignIn"
              // ? setBtnName("Logout") 
              // : setBtnName("SignIn");
            }}
            >
              <FontAwesomeIcon
              icon={faUser} 
              className="mr-1 hover:text-orange-500" />
              {btnName}
            </button>
            </Link> */}

            <li className="hover:text-orange-500">
              <Link to="/cart">
              <span style={{ 
                
                backgroundColor: "green",
                color: "white",
                width: "20px",
                height: "20px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1px 1px 1px 1px", // Optional for slightly rounded corners
                }}
                >
                {cartItems.length}</span> Cart</Link></li>
          </ul>  
        </div>
      </div>
    );
};

export default Header;