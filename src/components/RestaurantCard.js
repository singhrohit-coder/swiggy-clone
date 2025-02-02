// import {CDN_URL} from "../utils/constants";
// import { MdStars } from "react-icons/md";

// const RestaurantCard = (props) => {
//     const {resData} = props;
  
//     const {
//       cloudinaryImageId,
//       name,
//       cuisines, 
//       avgRating, 
//       costForTwo,
//       sla,
//     } = resData?.info;
  

//     return (
//       <div>
//       <div className="res-card p-0 m-5 rounded-xl w-[195px] transition-transform duration-300 hover:scale-95">
//         <img
//         // res-logo aspect-square
//           className="rounded-xl w-full h-[130px] object-cover"
//           alt={"res-logo"}
//           src={CDN_URL + cloudinaryImageId} // -> placeholder image URL
//         />
//         <h3 className="font-bold truncate">{name}</h3>
//         {/* hard coded */}
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <span style={{ margin: "0 2px"}}>
//             {<MdStars className="text-green-600 size-5"/>}</span>
//         <h4 className="font-semibold"> {avgRating}</h4>
        
//         {/* putting [dot] character */}
//         <span style={{ margin: "0 4px" }}>•</span> 
//         <h4 className="font-semibold">{sla?.slaString}</h4>
//         </div>
        
//         <h4 className="font-semibold text-gray-600 truncate">{cuisines.join(", ")}</h4>
//         <h4 className="font-semibold text-gray-600">{costForTwo}</h4>
        
//       </div>
//       </div>
//     ); 
// };


// export default RestaurantCard;

import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card p-4 m-4 rounded-lg shadow-md w-60 hover:shadow-lg transition-transform duration-300 hover:scale-95">
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="mt-3">
        <h3 className="text-lg font-bold truncate">{name}</h3>
        <div className="flex items-center text-sm mt-1">
          <MdStars className="text-green-600 mr-1" />
          <span className="font-semibold">{avgRating}</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-gray-500">{sla?.slaString}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
