import { useState, useEffect } from "react";
import { BODY_API } from "../utils/constants";
import TopResCard from "./TopResCard";
import { Link } from "react-router-dom";

const TopRes = () => {

    const [resChainsTitle, setResChainsTitle] = useState();
    const [resChainCard, setResChainCard] = useState([]);
    const [filterChainCard, setFilterChainCard] = useState([]);

    useEffect(() =>{
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch(BODY_API);
            const json = await data.json();

            setResChainsTitle(json?.data?.cards[1]?.card?.card?.header?.title);
            setResChainCard(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterChainCard(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(json?.data)

        } catch (error) {
            console.error("Error fetching Data:", error);
        }
    };


    return (
        <div className="TopResBody px-32 shadow-md mt-10">
                <div>
                {resChainsTitle && <h2 
                className="resChainsTitle px-3 text-2xl font-bold">{resChainsTitle}
                </h2>}
                
                <div className="resChainCard px-0 flex overflow-x-auto no-scrollbar">
                    {filterChainCard.map((restaurant) => (
                        <Link 
                        key={restaurant?.info?.id}
                        to={"/restaurants/" + restaurant.info.id}
                        >
                            <TopResCard topCard={restaurant} />
                        </Link>
                    ))}
                    </div>
                </div>
         </div>  

  //       <div className="px-32 ">
  //   <div className="body px-0">
  //     {/* Restaurant Chains Title */}
  //     {resChainsTitle && (
  //       <div className="px-24">
  //         <h2 className="text-2xl font-bold my-4">
  //           {resChainsTitle}
  //         </h2>
  //       </div>
  //     )}

  //     {/* Restaurant Chain Cards */}
  //     <div className="flex overflow-x-auto no-scrollbar px-20 border-b-gray-300 shadow-sm"
  //     style={{ height: "325px" }}>
  //       {filterChainCard.map((restaurant) => (
  //         <Link 
  //           key={restaurant?.info?.id} 
  //           to={"/restaurants/" + restaurant.info.id}
  //         >
  //           <TopResCard topCard={restaurant} />
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // </div>
    );
};

export default TopRes;