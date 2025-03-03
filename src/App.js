import React from "react";
import ReactDOM from "react-dom/client";
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Home from "./Home/Home";
import SwiggyRoutes from "./Home/Swiggy";
import OlaRoutes from "./Home/Ola";


const AppLayout = () => {

  return (
    // Providing appCart to the Application.
    <Provider store={appStore}>
    <div className="app">
        {/* This will load the respective child components */}
        <Outlet /> 
    </div>
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
        element: <Home />
      },
      ...SwiggyRoutes,
      ...OlaRoutes,
    ],
    errorElement: <Error />,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);


