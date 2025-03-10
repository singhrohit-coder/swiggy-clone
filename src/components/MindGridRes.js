import useMindRes from "../utils/useMindRes";
import { useParams } from "react-router-dom";
import MindResCard from "./MindResCard";
import { Link } from "react-router-dom";

const MindGridRes = () => {

    const params = useParams();
    console.log(params);

    return (

        <Link to="/res">
        <div>
            <MindResCard />
        </div>
        </Link>
    );
};

export default MindGridRes;