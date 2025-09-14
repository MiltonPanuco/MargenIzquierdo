"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BookOpen, Feather, Coffee, Star, Heart, Users, Globe, Quote, ArrowRight, Eye } from "lucide-react"

import Carousel from "../components/carousel"

import "../styles/home.css"
import "../styles/complement.css"

const Home = () => {
    const navigate = useNavigate()
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
    const [quoteAnimation, setQuoteAnimation] = useState(true)

    const slidesHome = [
        {
            id: 1,
            title: "Margen Izquierdo",
            subtitle: "Lo que otros dejan al margen, aquí es el centro",
            image: "/images/home/slide1.jpg",
            icon: BookOpen,
            isMain: true,
        },
        {
            id: 2,
            title: "Sombras que respiran",
            subtitle: "Donde cada silencio se convierte en verso",
            image: "/images/home/slide2.jpg",
            icon: Coffee,
            isMain: false,
        },
        {
            id: 3,
            title: "Ecos en la orilla",
            subtitle: "Cada poema busca su desborde",
            image: "/images/home/slide3.jpg",
            icon: Star,
            isMain: false,
        },
    ]

    const rotatingQuotes = [
        {
            text: "Las palabras abren puertas sobre el mar.",
            author: "Rafael Alberti",
        },
        {
            text: "¿Te gustaría leerte aquí?",
            author: "¡Escríbenos!",
        },
        {
            text: "Los tiempos felices en la humanidad son las páginas vacías de la historia.",
            author: "Alejandra Pizarnik",
        },
        {
            text: "Si por la noche lloras por no ver el sol, las lágrimas te impedirán ver las estrellas.",
            author: "Tagore",
        },
        {
            text: "Poder decirte 'esposo' se siente como voltear a ver la hora y que sean las 3:09",
            author: "Samantha Larson",
        },
    ]

    // Invitado Especial - Sección de expectativa
    const upcomingGuest = {
        title: "Invitados Especiales",
        subtitle: "Próximamente",
        description:
            "Estamos preparando algo muy especial para ti. Grandes voces de la poesía contemporánea se unirán a nuestra revista para compartir su arte y experiencia.",
        teaser: "Mantente atento a nuestras redes sociales y no te pierdas las sorpresas que tenemos preparadas",
        features: [
            "Poetas reconocidos internacionalmente",
            "Entrevistas exclusivas",
            "Poemas inéditos",
            "Talleres y masterclasses",
        ],
    }

    const featuredPoems = [
        {
            id: 1,
            title: "Cartografía del Corazón",
            author: "Esperanza Morales",
            country: "Argentina",
            excerpt: "En el mapa de mis venas se dibujan los caminos que llevan a tu nombre...",
            gradient: "from-amber-800 via-orange-700 to-red-800",
            category: "Amor",
            isExclusive: true,
            readTime: "3 min",
            likes: 247,
        },
        {
            id: 2,
            title: "Susurros de Medianoche",
            author: "Carlos Mendoza",
            country: "Colombia",
            excerpt: "La noche me abraza con dedos de terciopelo mientras escribo tu ausencia...",
            gradient: "from-indigo-800 via-purple-700 to-pink-800",
            category: "Nostalgia",
            isExclusive: false,
            readTime: "4 min",
            likes: 189,
        },
        {
            id: 3,
            title: "Raíces de Viento",
            author: "María Fernanda López",
            country: "Chile",
            excerpt: "Soy hija del viento y de la tierra que no conoce fronteras...",
            gradient: "from-emerald-800 via-teal-700 to-cyan-800",
            category: "Identidad",
            isExclusive: true,
            readTime: "5 min",
            likes: 312,
        },
    ]

    // Función para cambiar quote con animación
    const changeQuote = (newIndex) => {
        setQuoteAnimation(false)
        setTimeout(() => {
            setCurrentQuoteIndex(newIndex)
            setQuoteAnimation(true)
        }, 200)
    }

    // Función para navegar al archivo
    const handleGoToArchive = () => {
        navigate("/archive")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-800 overflow-hidden relative">
            {/* Carousel */}
            <Carousel slides={slidesHome} />

            <section className="py-24 px-4 bg-gradient-to-br from-red-100 via-amber-50 to-orange-100 relative overflow-hidden">
                {/* Enhanced floating elements with more drama */}
                <div className="floating-elements">
                    <div className="floating-element" style={{ top: "12%", left: "6%", animationDelay: "3s" }}>
                        <Star size={50} className="text-red-700 animate-pulse" />
                    </div>
                    <div className="floating-element" style={{ bottom: "20%", left: "8%", animationDelay: "12s" }}>
                        <Heart size={55} className="text-red-800 animate-bounce" />
                    </div>
                    <div className="floating-element" style={{ top: "12%", right: "6%", animationDelay: "15s" }}>
                        <Quote size={35} className="text-yellow-600" />
                    </div>
                    <div className="floating-element" style={{ bottom: "35%", right: "3%", animationDelay: "18s" }}>
                        <BookOpen size={42} className="text-pink-700" />
                    </div>
                </div>

                {/* Dramatic background effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Enhanced header with countdown-style excitement */}
                    <div className="text-center mb-20">
                        <div className="relative inline-block mb-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full">
                                <Star className="w-10 h-10 text-white animate-spin" style={{ animationDuration: "3s" }} />
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="inline-block bg-gradient-to-r from-red-600 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 animate-pulse">
                                🔥 Evento Exclusivo
                            </div>
                            <h2
                                className="text-5xl md:text-7xl font-bold text-red-900 mb-4 animate-fade-in"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                {upcomingGuest.title}
                            </h2>
                            <div className="flex items-center justify-center space-x-4 mb-6">
                                <div className="w-20 h-px bg-gradient-to-r from-transparent to-red-400"></div>
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                                    <div
                                        className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                                        style={{ animationDelay: "0.2s" }}
                                    ></div>
                                    <div
                                        className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                                        style={{ animationDelay: "0.4s" }}
                                    ></div>
                                </div>
                                <div className="w-20 h-px bg-gradient-to-l from-transparent to-red-400"></div>
                            </div>
                            <p className="text-xl text-gray-700 italic font-semibold" style={{ fontFamily: "Crimson Text" }}>
                                ✨ Grandes voces se acercan a nuestras páginas ✨
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Enhanced mystery box with countdown vibes */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl warm-shadow transform hover:scale-105 transition-all duration-500">
                                <div className="aspect-[4/5] bg-gradient-to-br from-red-600 via-amber-500 to-orange-600 flex items-center justify-center relative">
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div
                                            className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full animate-spin"
                                            style={{ animationDuration: "8s" }}
                                        ></div>
                                        <div
                                            className="absolute bottom-12 right-12 w-20 h-20 border-2 border-white rounded-full animate-spin"
                                            style={{ animationDuration: "12s", animationDirection: "reverse" }}
                                        ></div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full animate-pulse"></div>
                                    </div>

                                    <div className="text-center text-white p-8 relative z-10">
                                        <div className="mb-8">
                                            <div className="w-28 h-28 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                                                <Users size={50} className="text-white" />
                                            </div>
                                            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "Playfair Display" }}>
                                                {upcomingGuest.subtitle}
                                            </h3>
                                            <div className="w-20 h-px bg-white/70 mx-auto mb-6"></div>
                                            <p className="text-xl italic opacity-95 mb-6" style={{ fontFamily: "Crimson Text" }}>
                                                "Algo extraordinario se está gestando..."
                                            </p>

                                            {/* Countdown-style elements */}
                                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
                                                <p className="text-sm uppercase tracking-wider font-bold mb-2">Preparando el anuncio</p>
                                                <div className="flex justify-center space-x-2">
                                                    <div className="bg-white/20 rounded-lg px-3 py-2">
                                                        <span className="text-2xl font-bold">?</span>
                                                        <p className="text-xs">DÍAS</p>
                                                    </div>
                                                    <div className="bg-white/20 rounded-lg px-3 py-2">
                                                        <span className="text-2xl font-bold">?</span>
                                                        <p className="text-xs">HRS</p>
                                                    </div>
                                                    <div className="bg-white/20 rounded-lg px-3 py-2">
                                                        <span className="text-2xl font-bold">?</span>
                                                        <p className="text-xs">MIN</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Enhanced animated dots */}
                                        <div className="flex justify-center space-x-3">
                                            <div className="w-4 h-4 bg-white/80 rounded-full animate-pulse"></div>
                                            <div
                                                className="w-4 h-4 bg-white/80 rounded-full animate-pulse"
                                                style={{ animationDelay: "0.5s" }}
                                            ></div>
                                            <div
                                                className="w-4 h-4 bg-white/80 rounded-full animate-pulse"
                                                style={{ animationDelay: "1s" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced badges */}
                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 flex items-center space-x-2 animate-bounce">
                                        <Star className="w-5 h-5 text-amber-600 animate-spin" />
                                        <span className="text-sm font-bold text-gray-800">Muy Pronto</span>
                                    </div>
                                </div>

                                <div className="absolute top-20 right-6">
                                    <div className="bg-red-500 text-white rounded-full px-4 py-2 text-xs font-bold uppercase animate-pulse">
                                        Exclusivo
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced decorative elements */}
                            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center warm-shadow animate-bounce">
                                <Heart className="w-10 h-10 text-white" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center warm-shadow animate-pulse">
                                <Feather className="w-12 h-12 text-white" />
                            </div>
                        </div>

                        {/* Enhanced information panel */}
                        <div className="space-y-8">
                            <div className="paper-texture rounded-3xl p-8 md:p-12 warm-shadow relative overflow-hidden">
                                {/* Subtle animated background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-50 animate-pulse"></div>

                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">Breaking News</span>
                                        </div>
                                        <h3
                                            className="text-4xl md:text-5xl font-bold text-red-900 mb-4"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            Algo Grande Se Acerca
                                        </h3>
                                        <p className="text-xl text-amber-800 font-bold italic" style={{ fontFamily: "Crimson Text" }}>
                                            🎭 Prepárate para conocer voces extraordinarias
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 mb-8 border-l-4 border-red-500">
                                        <p
                                            className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium"
                                            style={{ fontFamily: "Crimson Text" }}
                                        >
                                            {upcomingGuest.description}
                                        </p>
                                    </div>

                                    {/* Enhanced features list */}
                                    <div className="mb-8">
                                        <h4
                                            className="text-xl font-bold text-red-900 mb-6 flex items-center"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            <Star className="w-6 h-6 text-amber-600 mr-2" />
                                            Lo que puedes esperar
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {upcomingGuest.features.map((feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center space-x-3 bg-white/50 rounded-xl p-4 hover:bg-white/70 transition-colors"
                                                >
                                                    <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-red-600 rounded-full animate-pulse"></div>
                                                    <span className="text-gray-800 font-medium" style={{ fontFamily: "Crimson Text" }}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-red-100 to-amber-100 rounded-2xl p-6 mb-8 border border-red-200">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">!</span>
                                            </div>
                                            <h5 className="font-bold text-red-900">Alerta de Hype</h5>
                                        </div>
                                        <p className="text-gray-700 italic font-medium" style={{ fontFamily: "Crimson Text" }}>
                                            {upcomingGuest.teaser}
                                        </p>
                                    </div>

                                    {/* Enhanced CTA */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="group bg-gradient-to-r from-red-800 to-amber-800 text-white px-8 py-4 rounded-full font-bold hover:from-red-900 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 warm-shadow flex items-center justify-center space-x-2 flex-1">
                                            <span>🔔 Mantente Informado</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <button className="group bg-white border-2 border-red-800 text-red-800 px-8 py-4 rounded-full font-bold hover:bg-red-800 hover:text-white transition-all duration-300 transform hover:scale-105 warm-shadow flex items-center justify-center space-x-2">
                                            <Heart className="w-5 h-5" />
                                            <span>Seguir</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rotating quotes */}
            <section className="py-20 px-4 bg-gradient-to-r from-red-900 via-red-800 to-amber-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="ink-drop absolute top-10 left-10 w-40 h-40 rounded-full bg-black/10"></div>
                    <div className="ink-drop absolute bottom-20 right-20 w-60 h-60 rounded-full bg-black/10"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <div className="h-60 md:h-80 flex flex-col items-center justify-center px-4 relative">
                        <blockquote
                            className={`text-2xl md:text-5xl font-light text-amber-100 leading-relaxed italic transition-all duration-500 transform mb-4 ${quoteAnimation ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                                }`}
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            "{rotatingQuotes[currentQuoteIndex].text}"
                        </blockquote>

                        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
                            <cite
                                className={`text-sm md:text-base text-amber-200/80 not-italic font-light transition-all duration-500 transform ${quoteAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                style={{ fontFamily: "Crimson Text" }}
                            >
                                — {rotatingQuotes[currentQuoteIndex].author}
                            </cite>
                        </div>
                    </div>

                    <div className="flex justify-center mt-12 space-x-3">
                        {rotatingQuotes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => changeQuote(index)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 ${index === currentQuoteIndex
                                        ? "bg-amber-300 scale-125 shadow-lg"
                                        : "bg-amber-100 bg-opacity-50 hover:bg-amber-200"
                                    }`}
                                aria-label={`Ver frase ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
                {/* Enhanced floating elements */}
                <div className="floating-elements">
                    <div className="floating-element" style={{ top: "12%", left: "6%", animationDelay: "3s" }}>
                        <Quote size={50} className="text-red-700 animate-pulse" />
                    </div>
                    <div className="floating-element" style={{ bottom: "20%", left: "8%", animationDelay: "12s" }}>
                        <BookOpen size={55} className="text-red-800" />
                    </div>
                    <div className="floating-element" style={{ top: "12%", right: "6%", animationDelay: "15s" }}>
                        <Star size={35} className="text-yellow-600 animate-spin" style={{ animationDuration: "4s" }} />
                    </div>
                    <div className="floating-element" style={{ bottom: "35%", right: "3%", animationDelay: "18s" }}>
                        <Heart size={42} className="text-pink-700 animate-bounce" />
                    </div>
                </div>

                {/* Dramatic background effects */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-red-300/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-transparent rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "3s" }}
                    ></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Enhanced header with more excitement */}
                    <div className="text-center mb-20">
                        <div className="relative inline-block mb-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-amber-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-amber-600 rounded-full">
                                <BookOpen className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="inline-block bg-gradient-to-r from-amber-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 animate-pulse">
                                🏆 Edición Especial
                            </div>
                            <h2
                                className="text-5xl md:text-7xl font-bold text-red-900 mb-6"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                Voces Destacadas
                            </h2>
                            <p
                                className="text-xl text-gray-700 italic max-w-3xl mx-auto mb-8 font-semibold"
                                style={{ fontFamily: "Crimson Text" }}
                            >
                                ✨ Una selección de las voces más resonantes y emocionantes de nuestra edición actual ✨
                            </p>
                        </div>

                        {/* Enhanced decorative line with stats */}
                        <div className="flex items-center justify-center space-x-6 mb-8">
                            <div className="flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2">
                                <Heart className="w-4 h-4 text-red-500" />
                                <span className="text-sm font-bold text-gray-800">748 ❤️</span>
                            </div>
                            <div className="w-20 h-px bg-gradient-to-r from-transparent to-red-300"></div>
                            <Feather className="w-8 h-8 text-amber-600 animate-bounce" />
                            <div className="w-20 h-px bg-gradient-to-l from-transparent to-red-300"></div>
                            <div className="flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2">
                                <Eye className="w-4 h-4 text-amber-600" />
                                <span className="text-sm font-bold text-gray-800">2.1k 👁️</span>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced grid with more interactive elements */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {featuredPoems.map((poem, index) => (
                            <div
                                key={poem.id}
                                className="group relative overflow-hidden rounded-3xl warm-shadow hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Enhanced gradient background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${poem.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                                ></div>

                                {/* Enhanced decorative pattern overlay */}
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <div
                                        className="absolute top-4 right-4 w-16 h-16 border border-white rounded-full animate-spin"
                                        style={{ animationDuration: "10s" }}
                                    ></div>
                                    <div
                                        className="absolute bottom-4 left-4 w-12 h-12 border border-white rounded-full animate-spin"
                                        style={{ animationDuration: "8s", animationDirection: "reverse" }}
                                    ></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white rounded-full opacity-50 animate-pulse"></div>
                                </div>

                                {/* Content */}
                                <div className="relative p-8 h-[450px] flex flex-col justify-between text-white">
                                    {/* Enhanced header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
                                                {poem.category}
                                            </span>
                                            {poem.isExclusive && (
                                                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                                                    EXCLUSIVO
                                                </span>
                                            )}
                                        </div>
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20 cursor-pointer">
                                            <Quote className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* Enhanced main content */}
                                    <div className="flex-1 flex flex-col justify-center text-center">
                                        <h3
                                            className="text-2xl md:text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            {poem.title}
                                        </h3>

                                        <div className="w-20 h-px bg-white/70 mx-auto mb-6"></div>

                                        <p
                                            className="text-base leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity mb-6"
                                            style={{ fontFamily: "Crimson Text" }}
                                        >
                                            {poem.excerpt}
                                        </p>

                                        {/* New engagement stats */}
                                        <div className="flex items-center justify-center space-x-4 mb-4">
                                            <div className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
                                                <Heart className="w-4 h-4" />
                                                <span className="text-sm font-bold">{poem.likes}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
                                                <BookOpen className="w-4 h-4" />
                                                <span className="text-sm font-bold">{poem.readTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced footer */}
                                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                                        <div>
                                            <p className="font-bold text-lg">{poem.author}</p>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <Globe className="w-4 h-4 opacity-75" />
                                                <p className="text-sm opacity-75">{poem.country}</p>
                                            </div>
                                        </div>

                                        <div className="flex space-x-2">
                                            <button className="group/btn w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform group-hover:scale-110">
                                                <Heart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                            </button>
                                            <button className="group/btn w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform group-hover:scale-110">
                                                <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced CTA section */}
                    <div className="text-center">
                        <div className="paper-texture rounded-3xl p-10 warm-shadow inline-block relative overflow-hidden">
                            {/* Subtle animated background */}
                            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-50 animate-pulse"></div>
                            <div
                                className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full opacity-50 animate-pulse"
                                style={{ animationDelay: "2s" }}
                            ></div>

                            <div className="relative z-10">
                                <div className="mb-6">
                                    <div className="inline-block bg-gradient-to-r from-red-600 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                                        🚀 No te lo pierdas
                                    </div>
                                    <h3 className="text-3xl font-bold text-red-900 mb-4" style={{ fontFamily: "Playfair Display" }}>
                                        ¿Te quedaste con ganas de más?
                                    </h3>
                                    <p className="text-gray-700 italic mb-8 text-lg font-medium" style={{ fontFamily: "Crimson Text" }}>
                                        Descubre todos los poemas de nuestra edición actual y sumérgete en un océano de voces poéticas que
                                        te emocionarán
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                    <button
                                        onClick={handleGoToArchive}
                                        className="group bg-gradient-to-r from-red-800 to-amber-800 text-white px-10 py-4 rounded-full font-bold hover:from-red-900 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 warm-shadow"
                                    >
                                        <span className="flex items-center space-x-3">
                                            <BookOpen className="w-6 h-6" />
                                            <span>Explorar Todos los Poemas</span>
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>

                                    <button className="group bg-white border-2 border-red-800 text-red-800 px-8 py-4 rounded-full font-bold hover:bg-red-800 hover:text-white transition-all duration-300 transform hover:scale-105 warm-shadow flex items-center justify-center space-x-2">
                                        <Star className="w-5 h-5" />
                                        <span>Favoritos</span>
                                    </button>
                                </div>

                                {/* Enhanced stats */}
                                <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2">
                                        <Users className="w-5 h-5 text-red-600" />
                                        <span className="font-bold">+50 autores</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2">
                                        <Heart className="w-5 h-5 text-pink-600" />
                                        <span className="font-bold">+120 poemas</span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-white/70 rounded-full px-4 py-2">
                                        <Globe className="w-5 h-5 text-blue-600" />
                                        <span className="font-bold">7 países</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
