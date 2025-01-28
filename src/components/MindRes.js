import { useEffect, useState } from "react"
import { BODY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useMindRes from "../utils/useMindRes";
import { MIND_IMAGE_API } from "../utils/constants";
//import MindResCard from "./MindResCard";
// import Shimmer from "./shimmer";

const MindRes= () => {

    const { mindId } = useParams();
    const mindInfo = useMindRes(mindId);

    //if (mindInfo === null) return <Shimmer />;

    const { text } = 
    mindInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || {};
    
    const [resTitle, setResTitle] = useState();
    const [imageCard, setImageCard] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {
            const data = await fetch(BODY_API);
            const json = await data.json();

            setResTitle(json?.data?.cards[0]?.card?.card?.header?.title);
            setImageCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
            //console.log(json.data.cards[0]);
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    };

    return (
        <div className="body shadow-sm">
            <div className="title px-32 mt-4 text-2xl font-bold border-stone-50">
                {resTitle && (
                    <h2>{resTitle}</h2>)}
            
            <div className="cards-container px-0 gap-4 mt-4 flex overflow-x-auto no-scrollbar">
                {imageCard.map((restaurant, index) => (
                    <Link 
                    to={`/restaurant/${restaurant?.id}`} 
                    key={index}
                    >
                        {/* <MindResCard /> */}
                        <div className="card m-2 p-0 rounded-xl w-[150px]">
                            <img
                                src={MIND_IMAGE_API + restaurant?.imageId}
                                alt="Restaurant image"
                                className=" w-full h-[175px] object-cover"
                            />
                        </div>
                    </Link>
                ))}
            </div>
            </div>
        </div>
    )
};

export default MindRes;