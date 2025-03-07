import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    sla,
  } = resData?.info;

  
  return (
    <div className="res-card m-3 rounded-lg w-56 hover: transition-transform duration-300 hover:scale-95">
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="res-logo"
        src={RESTAURANT_CARD_IMAGE_URL + cloudinaryImageId}
      />
      <div className="mt-3">
        <h3 className="text-lg font-bold truncate">{name}</h3>
        <div className="flex items-center text-sm mt-1">
          <MdStars className="text-green-600 mr-1 size-5" />
          <span className="font-semibold">{avgRating}</span>
          <span className="mx-2">•</span>
          <span className="font-semibold">{sla?.slaString}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{costForTwo}</p>
        <p className="text-sm text-gray-500">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;


// import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constants";
// import { MdStars } from "react-icons/md";

// const RestaurantCard = ({ resData }) => {
//   const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName, sla } = resData?.info;

//   return (
//     <div className="p-4 rounded-lg shadow-md w-64 hover:shadow-xl transition-transform duration-300 hover:scale-105 bg-white">
//       <img
//         className="rounded-lg w-full h-40 object-cover"
//         alt="res-logo"
//         src={RESTAURANT_CARD_IMAGE_URL + cloudinaryImageId}
//       />
//       <div className="mt-3">
//         <h3 className="text-lg font-bold truncate">{name}</h3>
//         <div className="flex items-center text-sm mt-1">
//           <MdStars className="text-green-600 mr-1" />
//           <span className="font-semibold">{avgRating}</span>
//           <span className="mx-2 text-gray-500">•</span>
//           <span className="text-gray-500">{sla?.slaString}</span>
//         </div>
//         <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
//         <p className="text-sm text-gray-500">{costForTwo}</p>
//         <p className="text-sm text-gray-500">{areaName}</p>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCard;

