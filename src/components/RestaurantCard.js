import {CDN_URL} from "../utils/constants";


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
      // res-card
      <div className="m-4 p-4 w-[225px] px-0 py-0 transition-transform duration-300 hover:scale-95">
        <img
        // res-logo
          className="rounded-xl aspect-square "
          alt={"res-logo"}
          src={CDN_URL + cloudinaryImageId } // -> placeholder image URL
        />
        <h3 className="font-bold">{name}</h3>
        {/* hard coded */}
        <div style={{ display: "flex", alignItems: "center" }}>
        <h4 className="font-semibold">🌟 {avgRating}</h4>
        
        {/* putting [dot] character */}
        <span style={{ margin: "0 8px" }}>•</span> 
        <h4 className="font-semibold">{sla?.slaString}</h4>
        </div>
        
        <h4 className="font-semibold text-gray-600">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold text-gray-600">{costForTwo}</h4>
        
      </div>
    ); 
};

export default RestaurantCard;

