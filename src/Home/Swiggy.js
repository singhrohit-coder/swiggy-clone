import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Body from "../components/Body";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import Form from "../components/Form";
import MindRes from "../components/MindRes";
import LoginToggle from "../components/LoginToggle";
import Contact from "../components/Contact";
import UserContext from "../utils/UserContext";
import MindGridRes from "../components/MindGridRes";
import React from "react";


const  Grocery = lazy(() => import("../components/Grocery")); 

const Search = lazy(() => import("../components/Search")); 

const About = lazy(() => import("../components/UserClass"));


const SwiggyComponent = () => {

    return (
      // putting our whole app inside the usercontext.provider
        <UserContext.Provider value={{ loggedInUser: "Rohit Singh" }}> 
        <Header /> {/* Ensure Header has access to UserContext */}
        <LoginToggle />
        {/*This is where the Body component will be rendered */}
        <Outlet /> 
        </UserContext.Provider>
        
    );
};

const SwiggyRoutes = [
    {
        path: "/",
        element: <SwiggyComponent />, // Wrapping all routes with Header and UserContext
        children: [
          {
            path: "/about",
            element: (
              <Suspense fallback={<h1>Is Loading...</h1>}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "/search/",
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                <Search />
              </Suspense>
            ),
          },
          {
            path: "/grocery",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <Grocery />
              </Suspense>
            ),
          },
          {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
          },
          {
            path: "/cards/:cardId",
            element: <MindRes />,
          },
          {
            path: "/res/:collectionId",
            element: <MindGridRes />,
          },
          {
            path: "/body",
            element: <Body />,
          },
          {
            path: "/form",
            element: <Form />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/contact",
            element: <Contact />
          },
        ],
      },
    ];

export default SwiggyRoutes;