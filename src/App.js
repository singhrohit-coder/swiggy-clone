import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header"
import Body from "./components/Body"
//import About from "./components/About"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import Contact from "./components/Contact";
//import Grocery from "./components/Grocery";
import { useContext } from "react";
import UserContext from "./utils/UserContext";

//lazy loading - used to distribute code in different chunks. 
//On demand loading
//Dynamic Import
// this [import] is different than above [grocery import]
const Grocery = lazy(() => import("./components/Grocery")); // this is how we import our grocery store.

const About = lazy(() => import("./components/UserClass"));

const AppLayout = () => {

  const [userInfo, setUserInfo] = useState();
  
  // Authenticatoin Feature
  
  useEffect(() => {
    // Make an API Call and send username and password
    const data = {
      name: "Rohit"
    }
    setUserInfo(data.name);
  }, []);


  return (
    // putting our whole app inside the usercontext.provider
    <UserContext.Provider value={{loggedInUser: userInfo}}>
    <div className="app">
    <UserContext.Provider value={{loggedInUser: "Elon Musk" }}>
      <Header />
      </UserContext.Provider>
      <Outlet /> {/* This is where the Body component will be rendered */}
      <Footer />
    </div>
    </UserContext.Provider>
  );
};
// LOGO_URL
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Is Loading...</h1>}>
          <About />
        </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}>
          <Grocery />
        </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

