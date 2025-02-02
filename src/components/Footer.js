import { Link } from "react-router-dom";
import { VscGithubInverted } from "react-icons/vsc"
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import About from "./About";


export const Footer = () => {

    //console.log("Footer Render");

    return (

        // footer shadow-gray-400 mt-5
        <div className="flex bg-orange-400 justify-center shadow-md">
            <div className="foot-items">
                <ul className="flex  p-4 m-4">
                    
                    <li className="px-2 font-semibold text-white"><Link to="/about">About</Link></li>
                    <h1 className="px-4 font-semibold text-white">Created By Rohit Singh</h1>
                    <li className="px-2 xNIjm">
                        <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#all?compose=new">
                        <CgMail className="size-6 text-white"/>
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link to="https://github.com/singhrohit-coder">
                        <VscGithubInverted className="size-6 text-white"/>
                        </Link>
                    </li>
                    <li className="px-2 xNIjm">
                        <Link to="linkedin.com/in/rohitsingh1912">
                        <FaLinkedinIn className="size-6 text-white"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
