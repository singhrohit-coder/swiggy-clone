import { title } from "process";
import { CDN_URL } from "../utils/constants";

const TopResCard = (props) => {
    const {topCard} = props;

    const {
        title,
        cloudinaryImageId,
        name,
        avgRating,
        costForTwo,
        cuisines,
        sla,
    } = topCard?.info;

    return (
        <div>
        <div className="m-4 p-0 rounded-xl w-[275px] transition-transform duration-300 hover:scale-95 ">
            <img className="rounded-xl w-full h-[200px] object-cover"
            alt={"res-logo"}
            src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold truncate">{name}</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h4 className="font-semibold">🌟 {avgRating}</h4>

                <span style={{ margin: "0 8px" }}>•</span>
                <h4 className="font-semibold">{sla?.slaString}</h4>
            </div>
            <h4 className="font-semibold text-gray-600 truncate">{cuisines.join(", ")}</h4>
            <h4 className="font-semibold text-gray-600">{costForTwo}</h4>
        </div>
       </div>    
    );
};

export default TopResCard;