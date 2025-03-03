import List from "./List";
import Map from "./Map";

const OlaBody = () => {
    return (
        <div className="relative flex">
                {/* <div className="list container ml-4">
                    <List />
                </div> */}
                {/* <div className=""> */}
                <div className=" absolute left-1/2">
                    <Map />
                </div>
            {/* </div> */}
        </div>
        
    );
};

export default OlaBody;