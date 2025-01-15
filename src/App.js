import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header"
import Body from "./components/Body"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./components/Contact";
import { useContext } from "react";
// import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


//lazy loading - used to distribute code in different chunks. 
//On demand loading
//Dynamic Import
// this [import] is different than above [grocery import]
// this is how we import our grocery store.
const Grocery = lazy(() => import("./components/Grocery")); 

const Search = lazy(() => import("./components/Search")); 

const About = lazy(() => import("./components/UserClass"));

const AppLayout = () => {

  const [userInfo, setUserInfo] = useState();
  
  // Authentication Feature
  useEffect(() => {
    // Make an API Call and send username and password
    const data = {
      name: "Rohit"
    }
    setUserInfo(data.name);
  }, []);


  return (
    // Providing appCart to the Application.
    <Provider store={appStore}>
    {/* // putting our whole app inside the usercontext.provider */}
    {/* <UserContext.Provider value={{loggedInUser: userInfo}}> */}
    <div className="app">
    {/* value={{loggedInUser: "Elon Musk" }} */}
    <UserContext.Provider >
      <Header />
      </UserContext.Provider>
      <Outlet /> {/* This is where the Body component will be rendered */}
      {/* <Footer /> */}
    </div>
    {/* </UserContext.Provider> */}
    </Provider>
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
        path: "/search/",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <Search />
        </Suspense>
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
      },
      {  
        path:"/cart",
        element: <Cart />, 
      },
    ],
    errorElement: <Error />,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

