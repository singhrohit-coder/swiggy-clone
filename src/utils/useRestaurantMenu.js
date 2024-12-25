import { useState, useEffect } from "react"
import { MENU_API } from "../utils/constants"

const useRestaurantMenu = (resId) => { // resId -> input

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo; // resInfo -> output
};

export default useRestaurantMenu;