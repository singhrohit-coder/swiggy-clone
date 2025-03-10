import { useState, useEffect } from "react";
import { MIND_GRID_RES_API } from "./constants";

const useMindRes = (collectionId) => {

    const [mindInfo, setMindInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MIND_GRID_RES_API + collectionId);
        const json = await data.json();
        setMindInfo(json.data);
    };

    return mindInfo; // output
};

export default useMindRes;