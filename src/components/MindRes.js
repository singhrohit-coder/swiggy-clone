import { useEffect, useState } from "react"
import { BODY_API } from "../utils/constants";



const MindRes= () => {

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
            setImageCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);

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
            <div className="gridCard">

            </div>
        </div>
    )
};

export default MindRes;