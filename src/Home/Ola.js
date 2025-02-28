import OlaHeader from "../ola/OlaHeader";
import OlaBody from "../ola/OlaBody";
import { Outlet } from "react-router-dom";

const Ola = () => {

    return (
        <div>
            <OlaHeader />
            {/* this is place where my component render */}
            <Outlet /> 
        </div>
    );
};

const OlaRoutes = [
    {
        path: "/",
        element: <Ola />,
        children: [
            {
                path: "/olaBody",
                element: <OlaBody />
            }
        ],
    },
];

export default OlaRoutes;