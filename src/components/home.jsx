"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BookOpen, Feather, Coffee, Star, Heart, Users, Globe, Quote, ArrowRight } from "lucide-react"

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
            "Estamos trabajando en incluir colaboraciones especiales con poetas contemporáneos que compartirán su trabajo con nosotros.",
        teaser: "Te mantendremos informado sobre estas colaboraciones a través de nuestras redes sociales",
        features: ["Poetas invitados", "Entrevistas", "Textos exclusivos", "Contenido especial"],
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
        window.scrollTo(0, 0) // Added scrollTop to go to top of page
        navigate("/archive")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-800 overflow-hidden relative">
            {/* Carousel */}
            <Carousel slides={slidesHome} />

            <section className="py-24 px-4 bg-gradient-to-br from-red-100 via-amber-50 to-orange-100 relative overflow-hidden">
                <div className="floating-elements">
                    <div className="floating-element" style={{ top: "12%", left: "6%", animationDelay: "3s" }}>
                        <Star size={30} className="text-red-600 opacity-60" />
                    </div>
                    <div className="floating-element" style={{ bottom: "20%", right: "6%", animationDelay: "15s" }}>
                        <BookOpen size={32} className="text-amber-700 opacity-60" />
                    </div>
                </div>

                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-300/20 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <div className="relative inline-block mb-8">
                            <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2
                                className="text-4xl md:text-5xl font-bold text-red-900 mb-4"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                {upcomingGuest.title}
                            </h2>
                            <div className="flex items-center justify-center space-x-4 mb-6">
                                <div className="w-20 h-px bg-gradient-to-r from-transparent to-red-400"></div>
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-20 h-px bg-gradient-to-l from-transparent to-red-400"></div>
                            </div>
                            <p className="text-lg text-gray-700" style={{ fontFamily: "Crimson Text" }}>
                                Colaboraciones especiales en desarrollo
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl warm-shadow">
                                <div className="aspect-[4/5] bg-gradient-to-br from-red-600 via-amber-500 to-orange-600 flex items-center justify-center relative">
                                    <img
                                        src="/images/home/proximamente.png"
                                        alt="Invitado especial"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-800">Invitado especial</span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center warm-shadow">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-18 h-18 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center warm-shadow">
                                <Feather className="w-9 h-9 text-white" />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="paper-texture rounded-3xl p-8 md:p-12 warm-shadow relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <h3
                                            className="text-3xl md:text-4xl font-bold text-red-900 mb-4"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            Colaboraciones Especiales
                                        </h3>
                                        <p className="text-lg text-amber-800" style={{ fontFamily: "Crimson Text" }}>
                                            Trabajamos en incluir voces especiales
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 mb-8">
                                        <p className="text-lg leading-relaxed text-gray-800" style={{ fontFamily: "Crimson Text" }}>
                                            {upcomingGuest.description}
                                        </p>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-xl font-bold text-red-900 mb-6" style={{ fontFamily: "Playfair Display" }}>
                                            Qué incluiremos
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {upcomingGuest.features.map((feature, index) => (
                                                <div key={index} className="flex items-center space-x-3 bg-white/50 rounded-xl p-4">
                                                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                                    <span className="text-gray-800" style={{ fontFamily: "Crimson Text" }}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-red-100 to-amber-100 rounded-2xl p-6 mb-8">
                                        <p className="text-gray-700" style={{ fontFamily: "Crimson Text" }}>
                                            {upcomingGuest.teaser}
                                        </p>
                                    </div>

                                    <div className="flex justify-center">
                                        <a
                                            href="https://instagram.com/margen_izquierdo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-red-800 text-white px-8 py-3 rounded-full font-medium hover:bg-red-900 transition-colors warm-shadow flex items-center justify-center space-x-2"
                                        >
                                            <span>Síguenos en Instagram</span>
                                        </a>
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
                <div className="floating-elements">
                    <div className="floating-element" style={{ top: "12%", left: "6%", animationDelay: "3s" }}>
                        <Quote size={40} className="text-red-600 opacity-50" />
                    </div>
                    <div className="floating-element" style={{ bottom: "20%", right: "6%", animationDelay: "15s" }}>
                        <BookOpen size={45} className="text-red-700 opacity-50" />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <div className="relative inline-block mb-8">
                            <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-amber-600 rounded-full">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2
                                className="text-4xl md:text-5xl font-bold text-red-900 mb-6"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                Voces Destacadas
                            </h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8" style={{ fontFamily: "Crimson Text" }}>
                                Una selección de textos de nuestra edición actual
                            </p>
                        </div>

                        <div className="flex items-center justify-center space-x-6 mb-8">
                            <div className="w-20 h-px bg-gradient-to-r from-transparent to-red-300"></div>
                            <Feather className="w-6 h-6 text-amber-600" />
                            <div className="w-20 h-px bg-gradient-to-l from-transparent to-red-300"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="group relative overflow-hidden rounded-3xl warm-shadow hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-orange-700 to-red-800 opacity-90"></div>
                            <div className="relative p-8 h-[450px] flex flex-col justify-between text-white">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Amor</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "Playfair Display" }}>
                                        Próximamente
                                    </h3>
                                    <div className="w-16 h-px bg-white/70 mx-auto mb-6"></div>
                                    <p
                                        className="text-base leading-relaxed italic opacity-90 mb-6"
                                        style={{ fontFamily: "Crimson Text" }}
                                    >
                                        Nuevas voces se revelarán pronto...
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                                    <div>
                                        <p className="font-bold text-lg">Por revelar</p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <Globe className="w-4 h-4 opacity-75" />
                                            <p className="text-sm opacity-75">Latinoamérica</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl warm-shadow hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-800 opacity-90"></div>
                            <div className="relative p-8 h-[450px] flex flex-col justify-between text-white">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Nostalgia</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "Playfair Display" }}>
                                        Próximamente
                                    </h3>
                                    <div className="w-16 h-px bg-white/70 mx-auto mb-6"></div>
                                    <p
                                        className="text-base leading-relaxed italic opacity-90 mb-6"
                                        style={{ fontFamily: "Crimson Text" }}
                                    >
                                        Nuevas voces se revelarán pronto...
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                                    <div>
                                        <p className="font-bold text-lg">Por revelar</p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <Globe className="w-4 h-4 opacity-75" />
                                            <p className="text-sm opacity-75">Latinoamérica</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl warm-shadow hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-800 opacity-90"></div>
                            <div className="relative p-8 h-[450px] flex flex-col justify-between text-white">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Identidad</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "Playfair Display" }}>
                                        Próximamente
                                    </h3>
                                    <div className="w-16 h-px bg-white/70 mx-auto mb-6"></div>
                                    <p
                                        className="text-base leading-relaxed italic opacity-90 mb-6"
                                        style={{ fontFamily: "Crimson Text" }}
                                    >
                                        Nuevas voces se revelarán pronto...
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                                    <div>
                                        <p className="font-bold text-lg">Por revelar</p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <Globe className="w-4 h-4 opacity-75" />
                                            <p className="text-sm opacity-75">Latinoamérica</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="paper-texture rounded-3xl p-10 warm-shadow inline-block relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-red-900 mb-4" style={{ fontFamily: "Playfair Display" }}>
                                        Explora más contenido
                                    </h3>
                                    <p className="text-gray-700 mb-8 text-lg" style={{ fontFamily: "Crimson Text" }}>
                                        Descubre todos los poemas de nuestra edición actual
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                    <button
                                        onClick={handleGoToArchive}
                                        className="bg-red-800 text-white px-8 py-3 rounded-full font-medium hover:bg-red-900 transition-colors warm-shadow"
                                    >
                                        <span className="flex items-center space-x-2">
                                            <BookOpen className="w-5 h-5" />
                                            <span>Ver todos los poemas</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <Users className="w-4 h-4 text-red-600" />
                                        <span>50+ autores</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Heart className="w-4 h-4 text-pink-600" />
                                        <span>120+ poemas</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Globe className="w-4 h-4 text-blue-600" />
                                        <span>7 países</span>
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
