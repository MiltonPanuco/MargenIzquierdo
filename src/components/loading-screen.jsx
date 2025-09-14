"use client"

import { useState, useEffect } from "react"

const LoadingScreen = ({ onLoadingComplete }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [isFading, setIsFading] = useState(false)
    const [fillProgress, setFillProgress] = useState(0)

    useEffect(() => {
        // Bloquear scroll mientras la pantalla de carga está visible
        if (isVisible) document.body.style.overflow = "hidden"

        let pageLoaded = false
        let timerCompleted = false

        const checkCompletion = () => {
            if (pageLoaded && timerCompleted) {
                if (onLoadingComplete) onLoadingComplete()
                setIsFading(true) // iniciar fade out
                setTimeout(() => {
                    setIsVisible(false)
                    document.body.style.overflow = "auto"
                }, 800) // increased duration to match new fade timing
            }
        }

        const handlePageLoad = () => {
            pageLoaded = true
            checkCompletion()
        }

        if (document.readyState === "complete") {
            pageLoaded = true
        } else {
            window.addEventListener("load", handlePageLoad)
        }

        // Animar el fill del logo
        const fillInterval = setInterval(() => {
            setFillProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(fillInterval)
                    return 100
                }
                return prev + 2
            })
        }, 100)

        // Timer mínimo de 5s
        const hideTimer = setTimeout(() => {
            timerCompleted = true
            checkCompletion()
        }, 2000)

        return () => {
            clearInterval(fillInterval)
            clearTimeout(hideTimer)
            window.removeEventListener("load", handlePageLoad)
            document.body.style.overflow = "auto"
        }
    }, [onLoadingComplete])

    if (!isVisible) return null

    return (
        <div className={`loading-screen ${isFading ? "fade-out" : ""}`}>
            <div className="loading-content">
                <div className="logo-container">
                    <div className="logo-base">
                        <img src="/logo2.png" alt="Logo" className="logo-image" />
                    </div>
                    <div
                        className="logo-fill-mask"
                        style={{
                            clipPath: `inset(${100 - fillProgress}% 0 0 0)`,
                            WebkitMask: `url(/logo2.png) no-repeat center/contain`,
                            mask: `url(/logo2.png) no-repeat center/contain`,
                        }}
                    />
                </div>

                <div className="slogan-container">
                    <p className="slogan-text">"Lo que otros dejan al margen, aquí es el centro"</p>
                </div>
            </div>

            <style>{`
            .loading-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: linear-gradient(135deg, rgb(255,251,235) 0%, rgb(255,237,213) 25%, rgb(254,242,242) 50%, rgb(255,237,213) 75%, rgb(255,251,235) 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.8s ease-out, backdrop-filter 0.8s ease-out;
            }

            .fade-out {
                opacity: 0;
                backdrop-filter: blur(0px);
                pointer-events: none;
            }

            .loading-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                transition: transform 0.8s ease-out, opacity 0.6s ease-out;
            }

            .fade-out .loading-content {
                transform: translateY(-20px) scale(0.95);
                opacity: 0;
            }

            .logo-container {
                position: relative;
                width: 200px;
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: logoFloat 3s ease-in-out infinite;
            }

            .fade-out .logo-container {
                animation-play-state: paused;
            }

            .logo-base {
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0.2;
            }

            .logo-image {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            .logo-fill-mask {
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgb(146,64,14) 0%, rgb(194,65,12) 50%, rgb(153,27,27) 100%);
                transition: clip-path 0.1s ease-out;
            }

            @keyframes logoFloat {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-10px) scale(1.02); }
            }

            .slogan-container {
                text-align: center;
                opacity: 0;
                animation: sloganFadeIn 1s ease-out 1.5s forwards;
            }

            .fade-out .slogan-container {
                animation-play-state: paused;
            }

            .slogan-text {
                font-family: 'Georgia', 'Times New Roman', serif;
                font-size: 1.1rem;
                font-style: italic;
                color: rgb(146,64,14);
                text-shadow: 0 1px 2px rgba(0,0,0,0.1);
                line-height: 1.6;
                max-width: 320px;
                margin: 0;
                letter-spacing: 0.3px;
            }

            @keyframes sloganFadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 0.85; transform: translateY(0); }
            }

            @media (max-width: 640px) {
                .logo-container { width: 150px; height: 150px; }
                .slogan-text { font-size: 0.9rem; max-width: 280px; }
            }

            @media (max-width: 480px) {
                .logo-container { width: 120px; height: 120px; }
                .loading-content { gap: 1.5rem; }
                .slogan-text { font-size: 0.8rem; max-width: 250px; }
            }
            `}</style>
        </div>
    )
}

export default LoadingScreen
