import { Link } from "react-router-dom";

const OlaHeader = () => {
    return (
        <div className="body">
            <div className="flex bg-transparent shadow-md">

                <Link to="/">
            <div className="logo-container px-1 py-1 mr-auto "> 
                <h1 
                className="ml-16 mt-4 text-3xl text-green-500  cursor-pointer w-[120px] border border-red-600"
                style={{ fontFamily: 'Algerian, sans-serif' }}>
                    EasyGo
                </h1>
            </div>
            </Link>
            <div className="py-2 border border-red-800 ml-auto mr-14">
                <ul className="cursor-pointer flex space-x-12 text-lg"
                style={{fontFamily: 'Cascadia Code Samil, sans-serif'}}>
                    <li className="hover:text-green-500">What's New</li>
                    <li className="hover:text-green-500">Be Our Partner</li>
                    <li className="hover:text-green-500">Help Center</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default OlaHeader;