import { useEffect, useState } from "react";

const VisitCounter = () => {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        let storedVisits = localStorage.getItem("site_visits");

        if (storedVisits) {
            storedVisits = parseInt(storedVisits) + 1;
        } else {
            storedVisits = 1;
        }

        localStorage.setItem("site_visits", storedVisits);
        setVisits(storedVisits);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                left: "10px",
                bottom: "10px",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            👀 Visitas en este navegador: {visits}
        </div>
    );
};

export default VisitCounter;
