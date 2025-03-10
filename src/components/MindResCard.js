// import { MIND_RES_IMAGE_URL } from "../utils/constants";
// import { MdStars } from "react-icons/md";

const MindResCard = (props) => {
    const {mindData} = props;

    const {
        //cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        areaName,
    } = mindData?.info;
    
    return (
      <div key={restaurant?.card?.card?.info.id} className="res-card cursor-pointer bg-yellow-200 border border-black-500 p-2 m-3 rounded-lg shadow-md w-56 hover:shadow-lg transition-transform duration-300 hover:scale-95">
          {/* <img
              className="rounded-lg w-full h-40 object-cover"
              alt={name || "Restaurant Image"}
              src={MIND_RES_IMAGE_URL + cloudinaryImageId}
          /> */}
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
  );
};

export default MindResCard;