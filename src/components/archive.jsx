"use client"

import { useState, useEffect } from "react"
import { BookOpen, Feather, Coffee, Star, Calendar, Clock, Heart } from "lucide-react"

const Archive = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const targetDate = new Date("2025-10-01T00:00:00") 

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = targetDate.getTime() - now.getTime()

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((difference % (1000 * 60)) / 1000)

                setTimeLeft({ days, hours, minutes, seconds })
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }

        // Calcular inmediatamente
        calculateTimeLeft()

        // Actualizar cada segundo
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-800 overflow-hidden relative">
            {/* Floating artistic elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute animate-pulse opacity-20"
                    style={{
                        top: "10%",
                        left: "5%",
                        animation: "float 6s ease-in-out infinite",
                        animationDelay: "0s",
                    }}
                >
                    <Feather size={60} className="text-amber-800" />
                </div>
                <div
                    className="absolute animate-pulse opacity-20"
                    style={{
                        top: "60%",
                        right: "10%",
                        animation: "float 8s ease-in-out infinite",
                        animationDelay: "3s",
                    }}
                >
                    <Coffee size={50} className="text-red-900" />
                </div>
                <div
                    className="absolute animate-pulse opacity-20"
                    style={{
                        top: "30%",
                        right: "25%",
                        animation: "float 7s ease-in-out infinite",
                        animationDelay: "6s",
                    }}
                >
                    <Star size={40} className="text-yellow-700" />
                </div>
                <div
                    className="absolute animate-pulse opacity-20"
                    style={{
                        bottom: "20%",
                        left: "15%",
                        animation: "float 9s ease-in-out infinite",
                        animationDelay: "9s",
                    }}
                >
                    <BookOpen size={55} className="text-orange-800" />
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-40 pb-30">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Countdown Container */}
                    <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
                        {/* Announcement */}
                        <div className="mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full mb-6">
                                <Calendar className="w-8 h-8 text-amber-900" />
                            </div>

                            <h2
                                className="text-3xl md:text-4xl font-bold text-amber-900 mb-4"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                Nuestra Primera Edición
                            </h2>

                            <p className="text-lg md:text-xl text-gray-700 italic" style={{ fontFamily: "Crimson Text" }}>
                                El 01 de Octubre comenzamos una nueva aventura literaria c:
                            </p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {/* Days */}
                            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-6 shadow-lg">
                                <div
                                    className="text-4xl md:text-5xl font-bold text-red-900 mb-2"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    {timeLeft.days.toString().padStart(2, "0")}
                                </div>
                                <div
                                    className="text-sm md:text-base text-red-700 uppercase tracking-wider"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Días
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 shadow-lg">
                                <div
                                    className="text-4xl md:text-5xl font-bold text-amber-900 mb-2"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    {timeLeft.hours.toString().padStart(2, "0")}
                                </div>
                                <div
                                    className="text-sm md:text-base text-amber-700 uppercase tracking-wider"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Horas
                                </div>
                            </div>

                            {/* Minutes */}
                            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 shadow-lg">
                                <div
                                    className="text-4xl md:text-5xl font-bold text-orange-900 mb-2"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    {timeLeft.minutes.toString().padStart(2, "0")}
                                </div>
                                <div
                                    className="text-sm md:text-base text-orange-700 uppercase tracking-wider"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Minutos
                                </div>
                            </div>

                            {/* Seconds */}
                            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 shadow-lg">
                                <div
                                    className="text-4xl md:text-5xl font-bold text-yellow-900 mb-2"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    {timeLeft.seconds.toString().padStart(2, "0")}
                                </div>
                                <div
                                    className="text-sm md:text-base text-yellow-700 uppercase tracking-wider"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Segundos
                                </div>
                            </div>
                        </div>

                        {/* Inspirational message */}
                        <div className="border-t border-gray-200 pt-8">
                            <div className="flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-red-600 mr-2" />
                                <Clock className="w-6 h-6 text-amber-600" />
                            </div>

                            <blockquote
                                className="text-xl md:text-2xl text-gray-800 italic leading-relaxed max-w-2xl mx-auto"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                "Cada segundo que pasa nos acerca más a la magia de compartir nuestras historias"
                            </blockquote>

                            <cite className="text-gray-600 text-sm mt-4 block" style={{ fontFamily: "Crimson Text" }}>
                                — Margen Izquierdo
                            </cite>
                        </div>
                    </div>

                    {/* Bottom message */}
                    <div className="mt-12">
                        <p className="text-lg text-gray-700 italic" style={{ fontFamily: "Crimson Text" }}>
                            Mientras tanto, seguimos construyendo sueños una palabra a la vez.
                            <br></br>Lqm gracias por esperar con nosotros c:
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            `}</style>
        </div>
    )
}

export default Archive
