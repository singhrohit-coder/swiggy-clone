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
      <div>
      <div className="res-card m-2 p-0 rounded-xl w-[195px] transition-transform duration-300 hover:scale-95 bg-white">
        <img
        // res-logo aspect-square
          className="rounded-xl w-full h-[150px] object-cover"
          alt={"res-logo"}
          src={CDN_URL + cloudinaryImageId} // -> placeholder image URL
        />
        <h3 className="font-bold truncate">{name}</h3>
        {/* hard coded */}
        <div style={{ display: "flex", alignItems: "center" }}>
        <h4 className="font-semibold">🌟 {avgRating}</h4>
        
        {/* putting [dot] character */}
        <span style={{ margin: "0 8px" }}>•</span> 
        <h4 className="font-semibold">{sla?.slaString}</h4>
        </div>
        
        <h4 className="font-semibold text-gray-600 truncate">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold text-gray-600">{costForTwo}</h4>
        
      </div>
      </div>
    ); 
};


export default RestaurantCard;

