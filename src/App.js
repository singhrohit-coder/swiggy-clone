import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header"
import Body from "./components/Body"
//import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
//import Grocery from "./components/Grocery";

//lazy loading - used to distribute code in different chunks. 
//On demand loading
//Dynamic Import
// this [import] is different than above [grocery import]
const Grocery = lazy(() => import("./components/Grocery")); // this is how we import our grocery store.

const About = lazy(() => import("./components/Body"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

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

