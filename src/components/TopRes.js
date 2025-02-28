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
            // console.log(json?.data)

        } catch (error) {
            console.error("Error fetching Data:", error);
        }
    };


    return (
        <div className="TopResBody px-32 mt-10" >
                <div> 
                {resChainsTitle && <h2 
                className="resChainsTitle px-3 text-2xl font-bold border-t border-gray-300">{resChainsTitle}
                </h2>}
                <div className="resChainCard px-0 flex overflow-x-auto no-scrollbar border-b border-gray-300">
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
    );
};

export default TopRes;