import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiContactsBookLine } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
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
      // body
      <div className="p-[15px] shadow-xl">
      {/* flex justify-between items-center */}
      <div className="max-w-[1200px] mx-auto flex items-center">
         {/* logo-container */}
         <Link to="/">
         <div className="logo-container w-[80px]">
          <img 
          className="w-full cursor-pointer transition-transform duration-500 hover:scale-110" 
          alt="Logo"
          src={LOGO_URL} 
          />
        </div>
        </Link>
        <div className="px-4 cursor-pointer">
        <span className="font-bold border-b-[3px] border-[black] hover:text-orange-500 hover:border-orange-500">
          Ratanda </span>Jodhpur, Rajasthan, India <RxCaretDown 
            className="inline text-[0.9rem] text-black text-xl"/>
        </div>
        {/* nav-items */}
        <div className="flex cursor-pointer list-none gap-12 ml-auto text-[17px] font-semibold"> 
          {/* <ul className="flex list-none gap-3 items-center"> */}
          <li className="flex items-center gap-4 hover:text-orange-500">
              <Link to="/search/">
            <FontAwesomeIcon icon={faMagnifyingGlass} 
            className="mr-2 hover:text-orange-500"/>Search</Link>
            </li>
          
          <li className="flex items-center gap-4 hover:text-orange-500">About</li>  
          <li className="flex items-center gap-1 hover:text-orange-500">
          <RiContactsBookLine className="size-5"/>
          Contact</li>
            {/* <li className="px-4">
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li> */}
            <li className="flex gap-4 items-center hover:text-orange-500">
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

            <li className="flex gap-4 items-center hover:text-orange-500">
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
          {/* </ul>   */}
        </div>
      </div>
      </div>
    );
};

export default Header;