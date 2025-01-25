import {CDN_URL} from "../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines, 
      avgRating, 
      costForTwo,
      sla,
    } = resData?.info;
  

    return (
      <div>
      <div className="res-card p-0 m-5 rounded-xl w-[195px] transition-transform duration-300 hover:scale-95">
        <img
        // res-logo aspect-square
          className="rounded-xl w-full h-[130px] object-cover"
          alt={"res-logo"}
          src={CDN_URL + cloudinaryImageId} // -> placeholder image URL
        />
        <h3 className="font-bold truncate">{name}</h3>
        {/* hard coded */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ margin: "0 2px"}}>
            {<MdStars className="text-green-600 size-5"/>}</span>
        <h4 className="font-semibold"> {avgRating}</h4>
        
        {/* putting [dot] character */}
        <span style={{ margin: "0 4px" }}>•</span> 
        <h4 className="font-semibold">{sla?.slaString}</h4>
        </div>
        
        <h4 className="font-semibold text-gray-600 truncate">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold text-gray-600">{costForTwo}</h4>
        
      </div>
      </div>
    ); 
};


export default RestaurantCard;

