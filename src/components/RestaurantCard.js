import {CDN_URL} from "../utils/constants";
// path alias approach -> import { CDN_URL } from "src/utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {
      id,
      name,
      cuisine, 
      rating, 
    } = resData;
  
    // Choose the image based on the restaurant's id (assuming ids are in sequence)
    const restaurantImage = CDN_URL[id - 1]; // Adjustiong for 0-based indexed.

    return (
      
      <div className="res-card" style={{ background: "#f0f0f0" }}>
      
        <img 
          className="res-logo"
          alt={"res-logo-{id}"}
          src={restaurantImage} // -> placeholder image URL
        />
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating} stars</h4>
        
      </div>
    ); 
};

export default RestaurantCard;