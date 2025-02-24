import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN_IMAGE } from "../utils/constants";
import { RxCross2 } from "react-icons/rx";
import { closeForm } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";

const LoginToggle = () => {

    const isFormOpen = useSelector(store => store.app.isFormOpen);

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(closeForm());
    };
    // this is known as early return
    if (!isFormOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-end">
      {/* Sidebar Content */}
      <div className="w-[400px] bg-white h-full shadow-lg p-6 relative">
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={handleClear}
        >
          <FaTimes className="cursor-pointer size-6 font-bold mr-auto"/>
        </button>

        {/* Image */}
        <img 
        src={LOGIN_IMAGE} 
        alt="sign in" 
        className="w-15 h-15 size-24 rounded-full ml-auto mt-10"/>

        <h1 className="font-semibold text-3xl -mt-24">Login</h1>

        {/* Link to Signup */}
        <div className="flex px-2 mt-4">
          <p className="font-semibold">or</p> 
          <p className="text-orange-500 font-semibold pl-2">
            <Link to="/form">create an account</Link>
          </p>
        </div>

        {/* Phone Number Input */}
        <input 
          type="text" 
          placeholder="Phone number"
          className="w-full h-[75px] mt-14 p-2 border rounded text-gray-800 font-semibold outline-none"
        />

        {/* Login Button */}
        <button className="w-full bg-orange-500 text-white font-semibold p-2 mt-4 rounded">
          LOGIN
        </button>

        {/* Terms & Conditions */}
        <p className="text-xs text-gray-600 mt-2">
          By clicking on Login, I accept the <span className="font-semibold">Terms & Conditions</span> & <span className="font-semibold">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};;

export default LoginToggle;