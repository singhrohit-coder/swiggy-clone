import { useSelector, useDispatch } from "react-redux";
import { closeForm } from "../utils/appSlice";
import { useRef, useState } from "react";
import { LOGIN_IMAGE } from "../utils/constants";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginToggle = () => {
  const isFormOpen = useSelector((store) => store.app.isFormOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  
  const [isSignIn, setIsSign] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  // initial value is null
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const handleButtonClick = () => {
    // Reset errors
    setEmailError("");
    setPasswordError("");
    setUsernameError("");
    navigate("/body")

    let isValid = true;

    if (!email.current.value) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (!password.current.value) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isSignIn && !username.current.value) {
      setUsernameError("Username is required");
      isValid = false;
    }

    if (isValid) {
      console.log(email.current.value);
      console.log(password.current.value);
      // Proceed with login or sign up logic
    }
  };

  const handleClear = () => {
    dispatch(closeForm());
  };

  const toggleSignInForm = () => {
    setIsSign(!isSignIn);
  };

  // this is known as early return
  if (!isFormOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-end z-[1000]">
      {/* sidebar content */}
      <div className="w-[400px] bg-white h-full shadow-lg p-6 relative z-[1001]">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* close button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black z-[1002]"
            onClick={handleClear}
          >
            <FaTimes className="cursor-pointer size-6 font-bold mr-auto" />
          </button>

          {/* Image */}
          <img
            className="w-15 h-15 size-24 rounded-full ml-auto mt-10 z-[1003] relative"
            src={LOGIN_IMAGE}
            alt="Image"
          />
          <h1 className="font-semibold text-3xl -mt-24">{isSignIn ? "Sign In" : "Sign Up"}</h1>

          {/* link to signUp */}
          <div className="flex px-2 mt-4">
            <p className="font-semibold">or</p>
            <p
              className="text-orange-600 font-semibold pl-2 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignIn ? "create an account" : "signin to your account"}
            </p>
          </div>

          {!isSignIn && (
            <div>
              <input
                ref={username}
                type="text"
                placeholder="Username"
                className="w-full h-[75px] mt-14 p-2 border text-gray-800 font-semibold outline-none"
              />
              {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
            </div>
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className={`w-full h-[75px] p-2 border text-gray-800 font-semibold outline-none ${
              !isSignIn ? "mt-0" : "mt-14"
            }`}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <input
            ref={password}
            type="text"
            placeholder="Password"
            className="w-full h-[75px] p-2 border text-gray-800 font-semibold outline-none"
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

          {/* Login button */}
          <button
            onClick={handleButtonClick}
            className="w-full bg-orange-600 text-white font-semibold p-2 mt-4 rounded"
          >
            {isSignIn ? "LOGIN" : "CONTINUE"}
          </button>

          {/* Terms and condition */}
          <p className="text-xs text-gray-600 mt-2">
            By clicking on Login, I accept the{" "}
            <span className="font-semibold">Terms & Conditions</span> &{" "}
            <span className="font-semibold">Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginToggle;

