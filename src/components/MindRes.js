import { useState, useEffect } from "react";
import MenuShimmer from "./MenuShimmer";
import { Link } from "react-router-dom";
import { MIND_RES_IMAGE_URL, MIND_GRID_RES } from "../utils/constants";

const MindRes = () => {

  const [text, setText] = useState("");
  const [resCardHeader, setResCardHeader] = useState("");
  const [mindRes, setMindRes] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

const fetchData = async () => {
    const data = await fetch(MIND_GRID_RES);
    const json = await data.json();
    
    console.log(json);
        setMindRes(json.data);
        //console.log(setMindRes);
        const title = json?.data?.cards[0]?.card?.card?.title;
        const description = json?.data?.cards[0]?.card?.card?.description;
        const text = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.text;
        setResCardHeader({ title, description });  
        setText({ text });
    };

    if (mindRes === null) return <MenuShimmer />;

    const restaurantCards = mindRes?.cards.filter(
      (f) => f.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    //console.log(restaurantCards);

    return  (
        <div className="Restaurants Cards">
          <div className="pl-8 py-4 ">
            {resCardHeader.title && (
        <h2 className="resChainsTitle px-3 pt-3 text-3xl font-bold">
            {resCardHeader.title}
        </h2>
    )}
    {resCardHeader.description && (
        <p className="resChainsTitle px-3 pt-1 text-xl text-black-500 font-semibold">
            {resCardHeader.description}
        </p>
    )}
    {text.text && (
      <p className="resChainsTitle px-3 pt-4 text-2xl font-bold">
        {text.text}
      </p>
    )}
    </div>

    <div className="flex flex-wrap gap-4 pl-8">

    {restaurantCards?.length > 0 ? (
                restaurantCards.map((restaurant) => {
                    const { name, cuisines, costForTwo, avgRating, areaName, cloudinaryImageId } =
                        restaurant?.card?.card?.info || {};
            
                        return (
                          <Link 
                          key={restaurant?.card?.card?.info.id} 
                          to={"/restaurants/" + restaurant?.card?.card?.info.id}
                          >
                              <div className="res-card cursor-pointer bg-yellow-200 border border-black-500 p-2 m-3 rounded-lg shadow-md w-64 hover:shadow-lg transition-transform duration-300 hover:scale-95">
                                  <img
                                      className="rounded-lg w-full h-40 object-cover"
                                      alt={name || "Restaurant Image"}
                                      src={MIND_RES_IMAGE_URL + cloudinaryImageId}
                                  />
                                  <div className="mt-3">
                                      <h3 className="text-lg font-bold truncate">{name || "Name not available"}</h3>
                                      <div className="flex items-center text-sm mt-1">
                                          <span className="font-semibold">{avgRating || "N/A"}</span>
                                          <span className="mx-2">•</span>
                                          <span className="font-semibold">{areaName || "Area not available"}</span>
                                      </div>
                                      <p className="text-sm text-gray-600 truncate">{cuisines?.join(", ") || "Cuisines not available"}</p>
                                      <p className="text-sm text-gray-500">{costForTwo || "Cost for two not available"}</p>
                                  </div>
                              </div>
                          </Link>
                      );
                  })
              ) : (
                  <p>No restaurants found.</p>
              )}            
    </div>
        </div>
    );
};

export default MindRes;
