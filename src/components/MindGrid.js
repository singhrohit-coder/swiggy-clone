import { useEffect, useState } from "react"
import { BODY_API, MIND_IMAGE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
//import MindRes from "./MindRes";

const MindGrid= () => { 
    const [resTitle, setResTitle] = useState();
    const [imageCard, setImageCard] = useState([]);
    const [filterMindRes, setFilterMindRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {
            const data = await fetch(BODY_API);
            const json = await data.json();

            setResTitle(json?.data?.cards[0]?.card?.card?.header?.title);
            setImageCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
            setFilterMindRes(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
            console.log(json.data.cards[0]);
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    };

    return (
        <div className="body max-w-[1200px] mx-auto">
            <div className="flex my-3 items-center justify-between">
                <div className="title px-32 mt-4 text-2xl font-bold border-stone-50">
                {resTitle && (
                    <h2>{resTitle}</h2>)}
                </div>    
                <div className="flex mr-32 ">
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
                        <FaArrowLeft />
                    </div> 
                    <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
                        <FaArrowRight />
                    </div>
                </div>  
                </div>
                <div className="cards-container px-4 mx-28 gap-4 mt-4 flex overflow-x-auto no-scrollbar">
                {imageCard.map((grid) => (
                      <Link 
                      key={grid.id}
                      to={"/cards/"+ grid.id}
                    >
                        <div className="card rounded-xl w-[150px]">
                            <img
                                src={MIND_IMAGE_API + grid?.imageId}
                                alt="Restaurant image"
                                className=" w-full h-[175px] object-cover rounded-lg"
                            />
                        </div>
                    </Link>
                ))}
            </div>  
            {/* <div className="resChainCard px-0 flex overflow-x-auto no-scrollbar border-b border-gray-300">
                    {setFilterMindRes.map((restaurant) => (
                        <Link 
                        key={restaurant?.info?.id}
                        to={"/restaurants/" + restaurant.info.id}
                        >
                            <MindRes topCard={restaurant} />
                        </Link>
                    ))}
                    </div> */}
        </div>
    )
};

export default MindGrid;