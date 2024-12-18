import {CDN_URL} from "../utils/constants";
// path alias approach -> import { CDN_URL } from "src/utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {
      //cloudinaryImageId,
      name,
      cuisines, 
      avgRating, 
      costForTwo,
      sla,
    } = resData?.info;
  
    // Choose the image based on the restaurant's id (assuming ids are in sequence)
    //const restaurantImage = CDN_URL[id - 1]; // Adjustiong for 0-based indexed.

    return (
      
      <div className="res-card" style={{ background: "#f0f0f0" }}>
      
        <img 
          className="res-logo"
          alt={"res-logo"}
          src={CDN_URL} // -> placeholder image URL
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        
      </div>
    ); 
};

export default RestaurantCard;