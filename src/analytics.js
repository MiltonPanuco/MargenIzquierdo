import TagManager from "react-gtm-module";

const GTM_ID = "GTM-5G59GNL9";

export const initAnalytics = () => {
    TagManager.initialize({ gtmId: GTM_ID });
};

export const logPageView = (path) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "pageview",
        page: path,
    });
};
