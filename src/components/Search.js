import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { RxCross2 } from "react-icons/rx";
import PopularCuisines from "./PopularCuisines";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import DummyItem from "./DummyItem";

const Search = () => {

    // for storing items who will be fetch from the api
    // const [item, setItem] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    // console.log(searchQuery);

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

             {/* dispalying items */}
             
             <div className="mt-6">
                {filteredItems.length > 0 && (
                    filteredItems.map((item) => (
                    <Link to="/restaurants" key={item.id} className="p-2">
                        <div className="flex">
                            {item.image && (
                                <img className="w-[75px]" src={item.image} alt={item.name} />
                            )}
                            <div className="mt-6 ml-3">
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    </Link>
                    ))
                    )}
             </div>
             {/* Display filtered items */}
            {/* <div className="filtered-items mt-6">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div key={item.id} className="item">
                            <h3>{item.name}</h3> */}
                            {/* <p>{item.description}</p> */}
                        {/* </div>
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div> */}
         </div>
    );
};
 
export default Search;
