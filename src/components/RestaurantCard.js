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
      <div className="m-4 p-4 w-[250px] rounded-lg px-0 py-0 hover:bg-gray-200">
        <img
        // res-logo
          className="rounded-lg aspect-square"
          alt={"res-logo"}
          src={CDN_URL + cloudinaryImageId } // -> placeholder image URL
        />
        <h3 className="font-bold">{name}</h3>
        {/* hard coded */}
        <div style={{ display: "flex", alignItems: "center" }}>
        <h4 className="font-semibold">⭐ {avgRating}</h4>
        
        {/* putting [dot] character */}
        <span style={{ margin: "0 8px" }}>•</span> 
        <h4 className="font-semibold">{sla?.slaString}</h4>
        </div>
        
        <h4 className="font-semibold">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold">{costForTwo}</h4>
        
      </div>
    ); 
};

export default RestaurantCard;

