import { useFormik } from "formik";
import { signInSchema } from "../Schemas/Validation";
import { LOGIN_IMAGE } from "../utils/constants";
import { useState } from "react";

const Form = () => {

  const [btnName, setBtnName] = useState("SignIn");

    const initialValues = {
        name: "",
        email: "",
        phoneNumber: ""
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: (values, action) => {
            console.log(values);
            // setBtnName("Logged In"); // Change button text to "Logged In"
            action.resetForm(); // after click on continue data dissapear.
        },
    });


    console.log(errors); 

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br bg-orange-50">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6  bg-orange-50"
          >
            <div className="flex items-center justify-between">
                
                <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
                {/* image  transform transition-all hover:shadow-2xl hover:scale-105*/}
                <img src={LOGIN_IMAGE}
                alt="sign in image"
                className="w-20 h-20 rounded-full"
                />
            </div>
            <div className="space-y-4">
              <div className="input-block">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Name" 
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                />
                {errors.name && touched.name ? (
                  <p className="form-error text-red-400">{errors.name}</p>
                  ) : null}
              </div>
              <div className="input-block">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                />
                {errors.email && touched.email ? (
                  <p className="form-error text-red-400">{errors.email}</p>
                  ) : null}
              </div>
              <div className="input-block">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none "
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <p className="form-error text-red-400">{errors.phoneNumber}</p>
                  ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-orange-500 rounded-lg  focus:outline-none "
            >
              Continue
            </button>
          </form>
      </div>
    );
  };
  
  export default Form;
  
  
