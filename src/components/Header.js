import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiContactsBookLine } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { toggleForm } from "../utils/appSlice";
import { useDispatch } from "react-redux";

export const Header = () => {

  const dispatch = useDispatch();

  // Subscribing our store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const toggleFormHandler = () => {
    dispatch(toggleForm());
  };

    return (
      // body
      <div className="p-[15px] w-full shadow-xl flex flex-wrap">
      {/* flex justify-between items-center */}
      <div className=" w-[150px] flex items-center">
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
        <span className=" font-bold border-b-[3px] border-black hover:text-orange-500 hover:border-orange-500">
          Rajokri </span><RxCaretDown 
            className="inline text-[0.9rem] text-black text-xl"/>
        </div> 
      </div>  
        {/* nav-items */} 
        <div className="flex items-center cursor-pointer list-none gap-8 ml-auto text-[17px] font-semibold"> 
          <li className=" hover:text-orange-500">
              <Link to="/search/">
            <FontAwesomeIcon icon={faMagnifyingGlass} 
            className="mr-2 hover:text-orange-500"/>Search</Link>
            </li>
          
          <li className=" hover:text-orange-500">About</li> 

          {/* <Link to="/contact">
          <li className="flex items-center gap-1 hover:text-orange-500">
          <RiContactsBookLine className="size-5"/>
          Contact</li></Link> */}

            <li className="hover:text-orange-500">
              <span className="flex items-center gap-2 ">
              {<FaUserLarge onClick={() => 
              toggleFormHandler()} // Call the function if the button name is "SignIn"
                className="ml-2 cursor-pointer"/>}
                <button onClick={() => toggleFormHandler()}>
                SignIn
                </button>
              </span>
            </li>
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
                  {/* Calculates the total quantity of items in the cart by summing up their quantities. */}
                  {cartItems?.reduce((sum, item) => sum + item.quantity, 0)}
                </span> Cart</Link></li>
        </div>
      </div>
    );
};

export default Header;