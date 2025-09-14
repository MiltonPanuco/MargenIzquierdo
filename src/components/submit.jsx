import { useState, useEffect } from "react"
import { Feather, Coffee, Star, BookOpen, Heart, Send, PenTool, Lightbulb, Quote } from "lucide-react"

import "../styles/complement.css"

const SubmitWriting = () => {

    const handleGoogleFormsClick = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScLLFkNqCgvjwQRgLvy8Vro7HAsC8OBXovHFkgVRnGWv6kUJg/viewform?usp=preview", "_blank")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">

            {/* Sección principal de envío */}
            <section className="py-24 px-4 bg-gradient-to-br from-orange-100 via-red-50 to-amber-100 relative">

                {/* Elementos flotantes adicionales */}
                <div className="floating-elements">
                    <div className="floating-element" style={{ top: "12%", left: "6%", animationDelay: "3s" }}>
                        <PenTool size={50} className="text-red-700" />
                    </div>
                    <div className="floating-element" style={{ bottom: "20%", left: "8%", animationDelay: "12s" }}>
                        <Lightbulb size={55} className="text-red-800" />
                    </div>
                    <div className="floating-element" style={{ top: "12%", right: "6%", animationDelay: "15s" }}>
                        <Quote size={35} className="text-yellow-600" />
                    </div>
                    <div className="floating-element" style={{ bottom: "35%", right: "3%", animationDelay: "18s" }}>
                        <BookOpen size={42} className="text-pink-700" />
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">

                    {/* Introducción */}
                    <div className="text-center mb-16">
                        <h1
                            className={`mt-8 text-5xl md:text-7xl font-bold text-red-900 mb-6 transition-all duration-1000'
                                }`}
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Escritos compartidos
                        </h1>
                        <p
                            className={`mb-10 text-xl md:text-2xl text-gray-700 italic transition-all duration-1000 delay-300'
                                }`}
                            style={{ fontFamily: "Crimson Text" }}
                        >
                            Un rincón donde la palabra permanece y el verso sigue respirando
                        </p>
                        <div className="bg-white bg-opacity-70 rounded-3xl p-8 md:p-12 shadow-lg backdrop-blur-sm">
                            <p
                                className="text-lg md:text-xl leading-relaxed text-gray-800 text-center italic mb-6"
                                style={{ fontFamily: "Crimson Text" }}
                            >
                                En <span className="text-red-800 font-bold">Margen Izquierdo</span> creemos que cada palabra tiene su momento,
                                cada verso su destino. Aquí tu voz encontrará el eco que merece, entre almas que comprenden
                                el poder transformador de la literatura.
                            </p>
                            <p
                                className="text-base text-gray-600 text-center"
                                style={{ fontFamily: "Crimson Text" }}
                            >
                                Recuerda que debes haber leído las {" "}
                                <a
                                    href="/rules"
                                    className="text-red-800 font-semibold hover:text-red-900 underline transition-colors"
                                >
                                    reglas
                                </a>
                                {" "} antes de enviar tu escrito.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white bg-opacity-60 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-200 to-red-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Heart className="w-8 h-8 text-red-900" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                                Proceso Amoroso
                            </h3>
                            <p className="text-gray-700" style={{ fontFamily: "Crimson Text" }}>
                                Cada escrito se lee con cariño y se considera con el respeto que merece
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-60 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Coffee className="w-8 h-8 text-amber-900" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-amber-900" style={{ fontFamily: "Playfair Display" }}>
                                Comunidad Cálida
                            </h3>
                            <p className="text-gray-700" style={{ fontFamily: "Crimson Text" }}>
                                Formarás parte de una familia literaria que celebra cada nueva voz
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-60 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Star className="w-8 h-8 text-orange-900" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-orange-900" style={{ fontFamily: "Playfair Display" }}>
                                Alcance Auténtico
                            </h3>
                            <p className="text-gray-700" style={{ fontFamily: "Crimson Text" }}>
                                Tus palabras llegarán a corazones que las necesitan y las valoran
                            </p>
                        </div>
                    </div>

                    {/* Botón principal */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-red-900 to-amber-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">

                            {/* Elementos decorativos de fondo */}
                            <div className="absolute inset-0">
                                <div className="absolute top-4 right-8 opacity-10">
                                    <Feather size={100} className="text-white" />
                                </div>
                                <div className="absolute bottom-6 left-6 opacity-10">
                                    <PenTool size={80} className="text-white" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3
                                    className="text-3xl md:text-4xl font-bold text-amber-100 mb-6"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    ¿Listo para formar parte del refugio?
                                </h3>

                                <p
                                    className="text-lg text-amber-200 mb-8 italic"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Haz clic en el botón para acceder a nuestro formulario y enviar tu escrito
                                </p>

                                <button
                                    onClick={handleGoogleFormsClick}
                                    className="group bg-amber-300 hover:bg-amber-200 text-red-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 mx-auto"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    Enviar mi Escrito
                                </button>

                                <p
                                    className="text-sm text-amber-200/80 mt-4 italic"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Se abrirá en una nueva pestaña
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        <div className="bg-white bg-opacity-50 rounded-2xl p-8">
                            <h4 className="text-xl font-bold mb-4 text-red-900 text-center" style={{ fontFamily: "Playfair Display" }}>
                                Qué esperamos
                            </h4>
                            <ul className="space-y-3 text-gray-700" style={{ fontFamily: "Crimson Text" }}>
                                <li className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                                    <span>Escritos originales y auténticos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                                    <span>Poesía, prosa poética, microrelatos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                                    <span>Textos que nazcan del corazón</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white bg-opacity-50 rounded-2xl p-8">
                            <h4 className="text-xl font-bold mb-4 text-red-900 text-center" style={{ fontFamily: "Playfair Display" }}>
                                Qué ofrecemos
                            </h4>
                            <ul className="space-y-3 text-gray-700" style={{ fontFamily: "Crimson Text" }}>
                                <li className="flex items-start gap-3">
                                    <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <span>Lectura cuidadosa de cada envío</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <span>Publicación en nuestras ediciones</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <span>Una comunidad que te celebra</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SubmitWriting