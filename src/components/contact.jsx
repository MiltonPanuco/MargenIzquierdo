import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Mail, Instagram, Music, Send, Clock, Heart, Feather, Star, BookOpen, PenTool } from "lucide-react"

import "../styles/complement.css"
import "../styles/about.css"

const Contact = () => {
    const [state, handleSubmit] = useForm("xeolvaqw")

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-800 overflow-hidden relative">

            {/* Floating artistic elements */}
            <div className="floating-elements">
                <div className="floating-element" style={{ top: "30%", left: "5%", animationDelay: "0s" }}>
                    <Mail size={50} className="text-amber-800 opacity-60" />
                </div>
                <div className="floating-element" style={{ top: "70%", right: "12%", animationDelay: "4s" }}>
                    <Heart size={45} className="text-red-900 opacity-50" />
                </div>
                <div className="floating-element" style={{ top: "40%", right: "5%", animationDelay: "8s" }}>
                    <Feather size={35} className="text-yellow-700 opacity-70" />
                </div>
                <div className="floating-element" style={{ bottom: "25%", left: "18%", animationDelay: "12s" }}>
                    <Star size={40} className="text-orange-800 opacity-60" />
                </div>
            </div>

            {/* Hero Section */}
            <section>
                <div className="relative z-10 max-w-4xl mx-auto text-center mt-16 pt-8">
                    <h1
                        className="mt-8 text-5xl md:text-7xl font-bold text-red-900 mb-6 transition-all duration-1000"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Conversemos
                    </h1>
                    <p
                        className="mb-10 text-xl md:text-2xl text-gray-700 italic leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300"
                        style={{ fontFamily: "Crimson Text" }}
                    >
                        Cada mensaje es un verso que espera respuesta. Cuéntanos tu historia,
                        comparte tus palabras o simplemente di hola.
                    </p>
                </div>
            </section>


            {/* Main Contact Section */}
            <section className="py-12 px-4 ">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Form */}
                        <div className="paper-texture rounded-3xl p-8 md:p-12 warm-shadow">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-red-900 mb-8"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                Escríbenos
                            </h2>

                            {state.succeeded ? (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center">
                                    ¡Gracias por escribirnos! Te responderemos pronto ✨
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                                style={{ fontFamily: "Crimson Text" }}
                                            >
                                                Tu nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-white/80 transition-all"
                                                placeholder="¿Cómo te llamas?"
                                            />
                                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                                        </div>
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                                style={{ fontFamily: "Crimson Text" }}
                                            >
                                                Tu correo
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-white/80 transition-all"
                                                placeholder="tu@correo.com"
                                            />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            style={{ fontFamily: "Crimson Text" }}
                                        >
                                            Asunto
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-white/80 transition-all"
                                            placeholder="¿De qué quieres hablar?"
                                        />
                                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                                    </div>

                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                            style={{ fontFamily: "Crimson Text" }}
                                        >
                                            Tu mensaje
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-white/80 transition-all resize-none"
                                            placeholder="Cuéntanos lo que llevas en el corazón..."
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full bg-gradient-to-r from-red-600 to-amber-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-red-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        {state.submitting ? (
                                            <div className="flex items-center">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Enviando...
                                            </div>
                                        ) : (
                                            <div className="flex items-center">
                                                <Send className="w-5 h-5 mr-2" />
                                                Enviar Mensaje
                                            </div>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 warm-shadow hover:shadow-xl hover:bg-white/80 transition-all duration-300 border border-red-100 hover:border-red-200">
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
                                            <Mail className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-red-900 mb-1" style={{ fontFamily: "Playfair Display" }}>
                                            Correo Electrónico
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Crimson Text" }}>
                                            Para colaboraciones y consultas
                                        </p>
                                        <a
                                            href="mailto:margenizquierdo.contact@gmail.com"
                                            className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors underline decoration-red-300 hover:decoration-red-500"
                                        >
                                            margenizquierdo.contact@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Instagram Card */}
                            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 warm-shadow hover:shadow-xl hover:bg-white/80 transition-all duration-300 border border-purple-100 hover:border-purple-200">
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-200 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-300 transition-all duration-300">
                                            <Instagram className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-purple-900 mb-1" style={{ fontFamily: "Playfair Display" }}>
                                            Instagram
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Crimson Text" }}>
                                            Contenido diario y historias
                                        </p>
                                        <a
                                            href="https://instagram.com/margen_izquierdo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors underline decoration-purple-300 hover:decoration-purple-500"
                                        >
                                            @margen_izquierdo
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* TikTok Card */}
                            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 warm-shadow hover:shadow-xl hover:bg-white/80 transition-all duration-300 border border-gray-200 hover:border-gray-300">
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                                            <Music className="w-6 h-6 text-gray-700" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: "Playfair Display" }}>
                                            TikTok
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "Crimson Text" }}>
                                            Poesía en movimiento
                                        </p>
                                        <a
                                            href="https://tiktok.com/@margenizquierdo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors underline decoration-gray-300 hover:decoration-gray-500"
                                        >
                                            @margenizquierdo
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Card */}
                            <div className="group bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl p-6 warm-shadow hover:shadow-xl transition-all duration-300 border border-amber-200 hover:border-amber-300">
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl flex items-center justify-center group-hover:from-amber-300 group-hover:to-orange-400 transition-all duration-300">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-amber-900 mb-1" style={{ fontFamily: "Playfair Display" }}>
                                            Tiempo de Respuesta
                                        </h3>
                                        <p className="text-sm text-amber-800 italic" style={{ fontFamily: "Crimson Text" }}>
                                            24-48 horas • Cada mensaje importa
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 bg-gradient-to-r from-red-900 via-red-800 to-amber-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-amber-100 mb-8" style={{ fontFamily: "Playfair Display" }}>
                        ¿Quieres ser parte de nuestra historia?
                    </h2>
                    <p className="text-lg md:text-xl text-amber-200 italic leading-relaxed mb-8" style={{ fontFamily: "Crimson Text" }}>
                        Siempre estamos buscando nuevas voces, colaboradores apasionados y almas creativas para nuestro equipo. <br />
                        Si sientes que tu historia resuena con la nuestra, no dudes en contactarnos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:margenizquierdo.contact@gmail.com"
                            className="bg-amber-100 text-red-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-200 transform hover:scale-105 transition-all inline-flex items-center"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Envíanos tu propuesta
                        </a>
                        <a
                            href="https://instagram.com/margen_izquierdo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-amber-100 text-amber-100 px-8 py-4 rounded-full font-semibold hover:bg-amber-100 hover:text-red-900 transform hover:scale-105 transition-all inline-flex items-center"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            <Instagram className="w-5 h-5 mr-2" />
                            Síguenos
                        </a>
                    </div>
                </div>
            </section>

            {/* Palabras del Equipo */}
            <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-8" style={{ fontFamily: "Playfair Display" }}>
                        Gracias
                    </h3>

                    <div className="space-y-6 text-gray-700">
                        <p className="text-lg md:text-xl leading-relaxed italic" style={{ fontFamily: "Crimson Text" }}>
                            Dar vida a este espacio ha sido como abrir una ventana donde las voces puedan encontrarse. Voces que sienten, que buscan y que sueñan. Cada rincón de este proyecto nació con el deseo de que aquí no solo leas palabras, sino que también sientas un eco, un refugio, un lugar donde tu voz pueda resonar.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed italic" style={{ fontFamily: "Crimson Text" }}>
                            Gracias por formar parte de esta historia que apenas comienza.
                            En cada mensaje que envíes, en cada palabra que compartas,
                            estarás ayudando a construir algo más grande: una comunidad
                            donde la literatura no es solo pasión, sino vida.
                        </p>
                    </div>

                    <div className="flex justify-center mt-8">
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                    </div>

                    <p className="text-red-800 text-sm font-medium mt-6" style={{ fontFamily: "Playfair Display" }}>
                        — Con cariño, el equipo de Margen Izquierdo
                    </p>
                </div>
            </section>

        </div>
    )
}

export default Contact