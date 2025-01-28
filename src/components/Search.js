//import { useState, useEffect } from "react";
//import { MENU_API, PRE_SEARCH } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PopularCuisines from "./PopularCuisines";


const Search = () => {


    
    return (
        <div className="Body">
            <div className="search ">
                    {/* search box position  */}                
          <div className="flex justify-center items-center mt-12 ">
          {/* input element with icon */}
          {/* search box */}
          <div className="relative">
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input type="text" 
            className="search-bar px-5 py-3 w-[800px] font-medium text-gray-600"
            placeholder="Search for restaurants and food"
            />
            {/* <button 
            className="px-2 bg-orange-400 mx-2 rounded-md">
            searchItem</button> */}
            </div>
            </div>
            <div className="px-60 my-4">
            <PopularCuisines />
            </div>
            {/* <h1 className="font-semibold text-xl bg-yellow-100 p-6 m-6">
            This is Search page</h1> */}
            </div>
        </div>
    )
}

export default Search;