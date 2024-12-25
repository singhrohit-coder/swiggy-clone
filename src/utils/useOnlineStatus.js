import { useState, useEffect } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect (() => {

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

        window.addEventListener("offlinee", () => {
            setOnlineStatus(false);
        });
    }, []);

    return onlineStatus;// bool value
};

export default useOnlineStatus;