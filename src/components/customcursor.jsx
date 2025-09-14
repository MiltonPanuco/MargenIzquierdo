import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: mousePos.x - 20,
                top: mousePos.y - 20,
            }}
        />
    );
};

export default CustomCursor;
