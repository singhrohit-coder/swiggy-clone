import { useState, useEffect } from "react"
import { MENU_API } from "../utils/constants"

const useRestaurantMenu = (resId) => { // resId -> inputresId

    const [resInfo, setResInfo] = useState(null);
    // console.log(resInfo, setResInfo);

    useEffect(() => {
        fetchMenu();
    }, []); // called once after initial array
 
    // MENU_API + resId+ resId
    const fetchMenu = async () => {
        const data = await fetch( 
            MENU_API + resId
        );
        const json = await data.json();
        setResInfo(json.data); // because error -> reading [2] undefined
         //console.log(json);
    };

    return resInfo; // resInfo -> output
};

export default useRestaurantMenu;