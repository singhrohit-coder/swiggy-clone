// import { useState, useEffect } from "react";
// import { MIND_RES_URL } from "./constants";

// const useMindRes = (cardId) => {

//     const [mindInfo, setMindInfo] = useState(null);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const data = await fetch(MIND_RES_URL + cardId);
//         const json = await data.json();
//         setMindInfo(json.data);
//     };

//     return mindInfo; // output
// };

// export default useMindRes;