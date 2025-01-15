import { useEffect, useState } from "react"
import { BODY_API } from "../utils/constants";
// import { Link } from "react-router-dom";
// import MindResCard from "./MindResCard";
// import { useParams } from "react-router-dom";
// import useMindRes from "../utils/useMindRes";
// import Shimmer from "./shimmer";

const MindRes= () => {

    // const { mindId } = useParams();

    // const mindInfo = useMindRes(mindId);

    // if (mindInfo === null) return <Shimmer />;

    // const { text } = 
    // mindInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    
    const [imageTitle, setImageTitle] = useState();
    // const [imageCard, setImageCard] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {
            const data = await fetch(BODY_API);
            const json = await data.json();

            setImageTitle(json?.data?.cards[0]?.card?.card?.header?.title);
            // setImageCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);

        } catch (error) {
            console.error("Error fetching data:", error)
        }
    };

    return (
        <div className="body">
            <div className="title px-56 mt-4 text-2xl font-bold">
                {imageTitle && (
                    <h2>{imageTitle}</h2>)}
            </div>
            {/* <div>
                <h1 className="font-bold">{text}</h1>
            </div> */}
            {/* <div className="gridCard">
                {imageCard.map((grid) => (
                    <Link
                    key={grid?.info?.id}
                    to={"/restaurants/" + grid.info.id}
                    >
                        <MindResCard mindCard={restaurant} />
                    </Link>
                ))}
            </div> */}
        </div>
    )
};

export default MindRes;