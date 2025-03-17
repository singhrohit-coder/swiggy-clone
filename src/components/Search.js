import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import Popular from "./Popular";
import { Link } from "react-router-dom";

const Search = () => {

    const [filteredItems, setFilteredItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    //console.log(searchQuery);

    const fetchData = async () => {
        // according to input result changes
        const data = await fetch(
          "https://dummyjson.com/recipes/search?q=" + searchQuery
        );
        const json = await data.json();
        // update the state with the recipes form the api
        setFilteredItems(json?.recipes);
      };
    
      useEffect(() => {
        if (searchQuery) {
            fetchData();
        } else {
            setFilteredItems([]);
        }
      }, [searchQuery]); // why i write [searchQuery] in my dependency array ?
      // user type the result update accordingly

    const handleClear = () => {
        setSearchQuery("");
        setFilteredItems([]); // Reset to all items when search is cleared
    };

    return (
        <div className="Body justify-center items-center w-full">
             {/* <div className="search border border-orange-700 "> */}
                    {/* search box position  */}                
            <div className="flex justify-center items-center mt-8">
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
            </span>
            <input type="text" 
            className="search-bar px-5 py-3 w-[600px] font-medium text-gray-600 outline"
            placeholder="Search for restaurants and food"
            value={searchQuery}
            onChange={(e) => 
                setSearchQuery(e.target.value)} // update searchText on input change
            />
            </form>
            </div>
            {/* </div> */}
            {/* Conditionally render based on searchQuery */}
            <div className="mt-6 ml-60 overflow-y-hidden no-scrollbar h-[300px]">
                {searchQuery && filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <Link to="/restaurants" key={item.id}>
                            <div className="flex hover:bg-blue-50 py-2">
                                {item.image && (
                                    <img
                                        className="w-[20px] rounded-md bg-orange-300"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                )}
                                <div className="mt-6 ml-3">
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    // Render Popular component if searchQuery is empty or no results
                    <div className="my-4 mr-60">
                    <Popular /> 
                    </div>
                )}
            </div>
         </div>
    );
};
 
export default Search;
