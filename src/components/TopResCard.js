import { RESTAURANT_CARD_IMAGE_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";


const TopResCard = (props) => {
    const {topCard} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        costForTwo,
        cuisines,
        areaName,
        sla,
    } = topCard?.info;

    return (
        <div className="">
        <div className="m-4 rounded-xl w-[250px] transition-transform duration-300 hover:scale-95">
            <img className=" rounded-xl w-full h-[175px] object-cover"
            alt={"res-logo"}
            src={RESTAURANT_CARD_IMAGE_URL + cloudinaryImageId}
            />
            <div className="mx-2">
            <h3 className="font-bold truncate">{name}</h3>
            <div style={{ display: "flex", alignItems: "center" }}>

            <span style={{ margin: "0 2px"}}>
            {<MdStars className="text-green-600 size-5"/>}</span>
                <h4 className="font-semibold">{avgRating}</h4>

                <span style={{ margin: "0 4px" }}>•</span>
                <h4 className="font-semibold">{sla?.slaString}</h4>
            </div>
            <h4 className="font-semibold text-gray-600 truncate">{cuisines.join(", ")}</h4>
            <h4 className="font-semibold text-gray-600">{costForTwo}</h4>
            <h4 className="font-semibold text-gray-600">{areaName}</h4>
            </div>
        </div>
       </div>    
    );
};

export default TopResCard;