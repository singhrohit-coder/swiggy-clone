import { useState, useEffect } from "react";
import { BODY_API } from "./constants";

const useMindRes = (mindId) => {

    const [mindInfo, setMindInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(BODY_API + mindId);
        const json = await data.json();
        setMindInfo(json.data);
    };

    return mindInfo; // output
};

export default useMindRes;