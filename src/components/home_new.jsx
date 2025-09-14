import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom" 
import { ChevronRight, BookOpen, Feather, Coffee, Star, Heart, Users, Globe, Quote, ArrowRight, Eye } from "lucide-react"

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
            author: "Rafael Alberti"
        },
        {
            text: "¿Te gustaría leerte aquí?",
            author: "¡Escríbenos!"
        },
        {
            text: "Los tiempos felices en la humanidad son las páginas vacías de la historia.",
            author: "Alejandra Pizarnik"
        },
        {
            text: "Si por la noche lloras por no ver el sol, las lágrimas te impedirán ver las estrellas.",
            author: "Tagore"
        },
        {
            text: "Poder decirte 'esposo' se siente como voltear a ver la hora y que sean las 3:09",
            author: "Samantha Larson"
        }
    ]

    // Invitado Especial
    const featuredGuest = {
        name: "GaelKien",
        title: "Poeta Invitado de Honor",
        bio: "Galardonada con el Premio Nacional de Poesía 2023, GaelKien trae su voz única que ha cautivado a lectores de toda Latinoamérica. Su obra explora los territorios íntimos del alma contemporánea.",
        quote: "La poesía no es solo refugio, es territorio de conquista del corazón",
        image: "/images/guest/gaelkien.jpg",
        country: "México",
        works: ["@gaelkien", "Memorias de Sal", "El Jardín Imposible"]
    }

    // Poemas destacados de la edición actual
    const featuredPoems = [
        {
            id: 1,
            title: "Cartografía del Corazón",
            author: "Esperanza Morales",
            country: "Argentina",
            excerpt: "En el mapa de mis venas se dibujan los caminos que llevan a tu nombre...",
            gradient: "from-amber-800 via-orange-700 to-red-800",
            category: "Amor"
        },
        {
            id: 2,
            title: "Susurros de Medianoche",
            author: "Carlos Mendoza",
            country: "Colombia",
            excerpt: "La noche me abraza con dedos de terciopelo mientras escribo tu ausencia...",
            gradient: "from-indigo-800 via-purple-700 to-pink-800",
            category: "Nostalgia"
        },
        {
            id: 3,
            title: "Raíces de Viento",
            author: "María Fernanda López",
            country: "Chile",
            excerpt: "Soy hija del viento y de la tierra que no conoce fronteras...",
            gradient: "from-emerald-800 via-teal-700 to-cyan-800",
            category: "Identidad"
        }
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
        navigate('/archive')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-800 overflow-hidden relative">

            {/* Carousel */}
            <Carousel slides={slidesHome} />

            {/* Invitado Especial */}
            <section className="py-24 px-4 bg-gradient-to-br from-red-100 via-amber-50 to-orange-100 relative overflow-hidden">

                {/* Elementos flotantes adicionales */}
                <div className="floating-elements">
                    <div className="floating-element" style={{ top: "12%", left: "6%", animationDelay: "3s" }}>
                        <Star size={50} className="text-red-700" />
                    </div>
                    <div className="floating-element" style={{ bottom: "20%", left: "8%", animationDelay: "12s" }}>
                        <Heart size={55} className="text-red-800" />
                    </div>
                    <div className="floating-element" style={{ top: "12%", right: "6%", animationDelay: "15s" }}>
                        <Quote size={35} className="text-yellow-600" />
                    </div>
                    <div className="floating-element" style={{ bottom: "35%", right: "3%", animationDelay: "18s" }}>
                        <BookOpen size={42} className="text-pink-700" />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6">
                            <Star className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-red-900 mb-4" style={{ fontFamily: "Playfair Display" }}>
                            Invitado Especial
                        </h2>
                        <p className="text-lg text-gray-600 italic" style={{ fontFamily: "Crimson Text" }}>
                            Una voz que ilumina nuestra edición actual
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Imagen del invitado */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl warm-shadow">
                                <div className="aspect-[4/5] bg-gradient-to-br from-amber-300 via-orange-400 to-red-500 flex items-center justify-center">
                                    <div className="text-center text-white p-8">
                                        <Quote size={80} className="mx-auto mb-4 opacity-80" />
                                        <p className="text-xl italic" style={{ fontFamily: "Playfair Display" }}>
                                            "{featuredGuest.quote}"
                                        </p>
                                        {/* Reemplaza con imagen real:
                                        <img 
                                            src={featuredGuest.image} 
                                            alt={featuredGuest.name} 
                                            className="w-full h-full object-cover"
                                        />
                                        */}
                                    </div>
                                </div>

                                {/* Badge del país */}
                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                                        <Globe className="w-4 h-4 text-gray-600" />
                                        <span className="text-sm font-semibold text-gray-800">{featuredGuest.country}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Elementos decorativos */}
                            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center warm-shadow">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center warm-shadow">
                                <Feather className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        {/* Información del invitado */}
                        <div className="space-y-8">
                            <div className="paper-texture rounded-3xl p-8 md:p-12 warm-shadow">
                                <div className="mb-6">
                                    <h3 className="text-3xl md:text-4xl font-bold text-red-900 mb-2" style={{ fontFamily: "Playfair Display" }}>
                                        {featuredGuest.name}
                                    </h3>
                                    <p className="text-lg text-amber-800 font-semibold italic" style={{ fontFamily: "Crimson Text" }}>
                                        {featuredGuest.title}
                                    </p>
                                </div>

                                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8" style={{ fontFamily: "Crimson Text" }}>
                                    {featuredGuest.bio}
                                </p>

                                {/* Datos interesantes */}
                                <div className="mb-8">
                                    <h4 className="text-lg font-bold text-red-900 mb-4" style={{ fontFamily: "Playfair Display" }}>
                                        Datos interesantes
                                    </h4>
                                    <div className="space-y-2">
                                        {featuredGuest.works.map((work, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                                <span className="text-gray-700 italic" style={{ fontFamily: "Crimson Text" }}>
                                                    {work}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="group bg-gradient-to-r from-red-800 to-amber-800 text-white px-8 py-4 rounded-full font-semibold hover:from-red-900 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 warm-shadow flex items-center space-x-2">
                                    <span>Leer Poema</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
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
                            className={`text-2xl md:text-5xl font-light text-amber-100 leading-relaxed italic transition-all duration-500 transform mb-4 ${quoteAnimation
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-8 scale-95'
                                }`}
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            "{rotatingQuotes[currentQuoteIndex].text}"
                        </blockquote>

                        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
                            <cite
                                className={`text-sm md:text-base text-amber-200/80 not-italic font-light transition-all duration-500 transform ${quoteAnimation
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
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

            {/* Poemas Destacados */}
            <section className="py-24 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">

                {/* Elementos flotantes adicionales */}
                <div className="floating-elements">
                    <div className="floating-element" style={{ top: "12%", left: "6%", animationDelay: "3s" }}>
                        <Quote size={50} className="text-red-700" />
                    </div>
                    <div className="floating-element" style={{ bottom: "20%", left: "8%", animationDelay: "12s" }}>
                        <BookOpen size={55} className="text-red-800" />
                    </div>
                    <div className="floating-element" style={{ top: "12%", right: "6%", animationDelay: "15s" }}>
                        <Star size={35} className="text-yellow-600" />
                    </div>
                    <div className="floating-element" style={{ bottom: "35%", right: "3%", animationDelay: "18s" }}>
                        <Heart size={42} className="text-pink-700" />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-amber-600 rounded-full mb-6">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-red-900 mb-6" style={{ fontFamily: "Playfair Display" }}>
                            Voces Destacadas
                        </h2>
                        <p className="text-lg text-gray-600 italic max-w-2xl mx-auto mb-8" style={{ fontFamily: "Crimson Text" }}>
                            Una selección de las voces más resonantes de nuestra edición actual
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center space-x-4 mb-8">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-300"></div>
                            <Feather className="w-6 h-6 text-amber-600" />
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-300"></div>
                        </div>
                    </div>

                    {/* Grid de poemas destacados */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {featuredPoems.map((poem, index) => (
                            <div
                                key={poem.id}
                                className="group relative overflow-hidden rounded-3xl warm-shadow hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${poem.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

                                {/* Decorative pattern overlay */}
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <div className="absolute top-4 right-4 w-16 h-16 border border-white rounded-full"></div>
                                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-white rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white rounded-full opacity-50"></div>
                                </div>

                                {/* Content */}
                                <div className="relative p-8 h-96 flex flex-col justify-between text-white">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                                            {poem.category}
                                        </span>
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Quote className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Main content */}
                                    <div className="flex-1 flex flex-col justify-center text-center">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300" style={{ fontFamily: "Playfair Display" }}>
                                            {poem.title}
                                        </h3>

                                        <div className="w-16 h-px bg-white/50 mx-auto mb-4"></div>

                                        <p className="text-base leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "Crimson Text" }}>
                                            {poem.excerpt}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                                        <div>
                                            <p className="font-semibold text-lg">{poem.author}</p>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <Globe className="w-4 h-4 opacity-75" />
                                                <p className="text-sm opacity-75">{poem.country}</p>
                                            </div>
                                        </div>

                                        <button className="group/btn w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform group-hover:scale-110">
                                            <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        ))}
                    </div>

                    {/* CTA para ver todos los poemas */}
                    <div className="text-center">
                        <div className="paper-texture rounded-2xl p-8 warm-shadow inline-block">
                            <h3 className="text-2xl font-bold text-red-900 mb-4" style={{ fontFamily: "Playfair Display" }}>
                                ¿Te quedaste con ganas de más?
                            </h3>
                            <p className="text-gray-700 italic mb-6" style={{ fontFamily: "Crimson Text" }}>
                                Descubre todos los poemas de nuestra edición actual y sumérgete en un océano de voces poéticas
                            </p>

                            <button
                                onClick={handleGoToArchive}
                                className="group bg-gradient-to-r from-red-800 to-amber-800 text-white px-10 py-4 rounded-full font-semibold hover:from-red-900 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 warm-shadow"
                            >
                                <span className="flex items-center space-x-3">
                                    <BookOpen className="w-5 h-5" />
                                    <span>Explorar Todos los Poemas</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            {/* Stats mini */}
                            <div className="flex items-center justify-center space-x-8 mt-6 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-4 h-4" />
                                    <span>+50 autores</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Heart className="w-4 h-4" />
                                    <span>+120 poemas</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Globe className="w-4 h-4" />
                                    <span>7 países</span>
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