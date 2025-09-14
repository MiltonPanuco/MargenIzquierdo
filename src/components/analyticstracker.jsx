import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "../analytics.js";

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        logPageView(location.pathname);
    }, [location]);

    return null;
};

export default AnalyticsTracker;
