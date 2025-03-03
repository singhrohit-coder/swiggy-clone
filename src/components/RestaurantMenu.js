import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { MdStars } from "react-icons/md";
import MenuShimmer from "./MenuShimmer";


const RestaurantMenu = () => {
    const { resId } = useParams(); // useParams -> for reading restaurant Id
    
    const resInfo = useRestaurantMenu(resId); // useResataurantMenu -> Custom Hook for Fetching Data , it gives us resInfo
    
    if (resInfo === null ) return <MenuShimmer />

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla } = 
    resInfo?.cards?.[2]?.card?.card?.info;

    const { itemCards }  = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card.card;
    // console.log("itemCards:", itemCards);

    // Item Category inside Restaurant Cards.
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
    
    return (
        <div className="w-full flex justify-center items-center">
        <div className=" menu ">
            <h1 className="font-bold my-6 text-2xl">{name}</h1> 
            <div className="w-[600px]">
            <div className=" bg-yellow-50 shadow-lg rounded-3xl p-6 border-8 border-orange-300 ">
            <div className="font-bold text-m">
                <div className=" flex gap-2">            
                    <MdStars className="text-green-600 my-1 size-5" />
            <span>{avgRating}</span>
            <span>({totalRatingsString})</span>
            <span>:</span>
            <span>{costForTwoMessage}</span>
            </div>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{sla?.slaString}</h3>
            </div>
            </div>
            </div>
             {/* Categories Accordion */}
            <div className="w-[600px] mt-2">
             {categories.map((category) => (
                 <RestaurantCategories 
                 key={category?.card?.card?.title} 
                 // data -> props coming from Restaurant Categories.
                 data = {category.card.card}
                 />
             ))}
             </div>
        </div>
        </div>
    );
};

export default RestaurantMenu;


// if stuck start from start again...
// const RestaurantMenu = () => {
//     const [resInfo, setResInfo] = useState(null);

//     const { resId } = useParams(); // useParams -> for reading restaurant Id

//     useEffect(() => {
//         fetchData();
//     }, []); // called once after initial array
 
//     // MENU_API + resId
//     const fetchData = async () => {
//         const data = await fetch(
//             MENU_API + resId
//         );
//         const json = await data.json();
//         setResInfo(json.data);
//         //console.log(json.data);
//     };
    
//     if (resInfo === null ) return <Shimmer />

//     const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla } = 
//     resInfo?.cards[2]?.card?.card?.info;

//     const { itemCards }  = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card.card;
//     console.log("itemCards:", itemCards);

// return (
//     <div classMenu="menu">
//         <h1>{name}</h1>
//         <p>
//             {cuisines.join(", ")}
//         </p>
//         <h2>Menu</h2>
//         <ul>
//             {itemCards.map((item) => (
//                 <li key={item.card.info.id}>
//                     {item.card.info.name} -{" Rs "}
//                     {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//                 </li>
//             ))}
//         </ul>
//     </div>
// );
// };


// export default RestaurantMenu;