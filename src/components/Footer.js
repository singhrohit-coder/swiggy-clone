import { Link } from "react-router-dom";

export const Footer = () => {

    console.log("Footer Render");

    return (

        // footer
        <div className="flex bg-gray-100 justify-center shadow-gray-400 mt-5">
            <div className="foot-items   ">
                <ul className="flex  p-4 m-4">
                    
                    <li className="px-4 xNIjm">Help</li>
                    <li className="px-4 xNIjm">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4 xNIjm">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4 xNIjm">Legal</li>
                    <li className="px-4 xNIjm">Social links</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
