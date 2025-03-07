import { useState, useEffect } from "react";
import { POPULAR_CUISINE_IMAGE, PRE_SEARCH } from "../utils/constants";
import { Link } from "react-router-dom";

const Popular = () => {
    const [popularGrid, setPopularGrid] = useState([]);
    const [popularTitle, setPopularTitle] = useState("");
    //const [recentItems, setRecentItems] = useState("");


    useEffect(() => {
            fetchData();
        }, []);
    
        const fetchData = async () => {
    
            try {
                const data = await fetch(PRE_SEARCH);
                const json = await data.json();

                //setRecentItems(json?.data?.cards[0]?.card?.card?.title);
                setPopularGrid(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
                setPopularTitle(json?.data?.cards[1]?.card?.card?.header?.title);
                // setResTitle(json?.data?.cards[0]?.card?.card?.header?.title);
                // setImageCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
                // setFilterMindRes(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
                // console.log(json.data.cards[0]);
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        };

        return (
            <div>
                {/* <div className="font-extrabold text-slate-600 text-lg">
                    <h2>{recentItems}</h2>
                </div> */}
                <div className="font-extrabold text-slate-600 text-xl mt-8">
                    <h2>{popularTitle}</h2>
                </div>
                {/* displaying popular cuisine grid */}
                <div className="flex mt-2 gap-4 overflow-x-auto no-scrollbar">
                    {popularGrid.map((grid) => (
                        <Link to={"/cards/" + grid.id} key={grid.id}>
                            <div className="card w-[95px] mt-2 mb-7"
                            // style={{
                            //     transform: ''
                            //     transition: ''
                            // }}
                            >
                                <img src={POPULAR_CUISINE_IMAGE + grid?.imageId}
                                alt="grid image"
                                className="w-full h-[175px] object-cover rounded-lg"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
};

export default Popular;

