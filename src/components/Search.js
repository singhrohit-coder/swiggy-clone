import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { RxCross2 } from "react-icons/rx";
import PopularCuisines from "./PopularCuisines";
import { useState } from "react";

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);

    const handleClear = () => {
        setSearchQuery("");
    };

    return (
        <div className="Body">
             <div className="search ">
                    {/* search box position  */}                
            <div className="flex justify-center items-center mt-12 ">
          {/* input element with icon */}
          {/* search box */}
          <form className="relative"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
            {/* conditional rendering for search icon and cross icon */}
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
            {searchQuery ? (
                                <RxCross2 onClick={handleClear} className="cursor-pointer size-6 font-bold" />
                            ) : (
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            )}
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
            </span>
            <input type="text" 
            className="search-bar px-5 py-3 w-[800px] font-medium text-gray-600 outline"
            placeholder="Search for restaurants and food"
            value={searchQuery}
            onChange={(e) => 
                setSearchQuery(e.target.value)} // update searchText on input change
                
            />
            </form>
            </div>
            <div className="px-60 my-4">
            <PopularCuisines />
            </div>
             </div>
         </div>
    ) 
};
 
export default Search;
