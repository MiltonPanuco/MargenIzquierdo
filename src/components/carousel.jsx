"use client"

import { useState, useEffect } from "react"

const Carousel = ({ slides = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [timerKey, setTimerKey] = useState(0)

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        if (slides && slides.length > 0) {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }
    }

    // Función para ir a un slide específico
    const goToSlide = (index) => {
        setCurrentSlide(index)
        setTimerKey((prev) => prev + 1) // Reinicia el timer
    }

    // Auto-play con efecto
    useEffect(() => {
        if (!slides || slides.length === 0) return

        const timer = setInterval(nextSlide, 5000) // 10 segundos
        return () => clearInterval(timer)
    }, [timerKey, slides])

    // Animación de entrada
    useEffect(() => setIsVisible(true), [])

    // Si no hay slides, no renderizar nada
    if (!slides || slides.length === 0) return null

    return (
        <div
            className="relative w-full h-screen overflow-hidden shadow-2xl"
            style={{
                "--color-warmth": "#8B4513",
                "--color-accent": "#8B1E3F",
                "--color-gold": "#DAA520",
                "--color-earth": "#A0522D",
            }}
        >
            <div className="relative h-full overflow-hidden">
                {slides.map((slide, index) => {
                    const IconComponent = slide.icon
                    return (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide
                                ? "translate-x-0"
                                : index < currentSlide
                                    ? "-translate-x-full"
                                    : "translate-x-full"
                                }`}
                        >
                            {/* Imagen de fondo */}
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />

                            {/* Overlays */}
                            <div className="overlay"></div>

                            {/* Contenido */}
                            <div className="absolute inset-0 flex items-center justify-center px-4">
                                <div
                                    className={`text-center transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                                        }`}
                                >
                                    <h1
                                        className={`${slide.isMain ? "text-6xl md:text-9xl" : "text-5xl md:text-8xl"
                                            } font-bold text-white mb-6`}
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        {slide.title}
                                    </h1>
                                    <p
                                        className={`${slide.isMain ? "text-xl md:text-3xl" : "text-lg md:text-2xl"} font-light italic mb-8`}
                                        style={{ fontFamily: "Crimson Text", color: "var(--color-gold)" }}
                                    >
                                        {slide.subtitle}
                                    </p>

                                    <div className="mt-8 flex justify-center items-center space-x-4">
                                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-600"></div>
                                        {IconComponent && (
                                            <IconComponent size={slide.isMain ? 24 : 20} style={{ color: "var(--color-earth)" }} />
                                        )}
                                        <div className="h-px w-20 bg-gradient-to-r from-amber-600 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "scale-125 bg-gold" : "bg-white bg-opacity-50 hover:bg-opacity-75"
                            }`}
                        aria-label={`Ir al slide ${index + 1}`}
                        style={{
                            backgroundColor: index === currentSlide ? "var(--color-gold)" : undefined,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
