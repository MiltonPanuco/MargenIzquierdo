import { useState, useEffect, useRef } from "react"
import { BookOpen, Feather, Coffee, Star, Heart, Quote } from "lucide-react"

import Carousel from "../components/carousel"
import "../styles/about.css"
import "../styles/complement.css"

const Home = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
    const [quoteAnimation, setQuoteAnimation] = useState(true)

    const slidesHome = [
        {
            id: 1,
            title: "¿Quiénes somos?",
            subtitle: "La voz que se atreve a romper el silencio",
            image: "/images/about/slide1.jpg",
            icon: BookOpen,
            isMain: true,
        },
        {
            id: 2,
            title: "Nuestra historia",
            subtitle: "Palabras que construyen puentes",
            image: "/images/about/slide2.jpg",
            icon: Coffee,
            isMain: false,
        },
        {
            id: 3,
            title: "Nuestro Refugio",
            subtitle: "Donde cada verso encuentra hogar",
            image: "/images/about/slide3.jpg",
            icon: Star,
            isMain: false,
        },
    ]

    const rotatingQuotes = [
        {
            text: "Moretón, moretón, moretón de amor.",
            author: "Rubén Larregui"
        },
        {
            text: "Y de corazón partido yo muero dos semanas después.",
            author: "Rodrigo Torres de la Garza"
        },
        {
            text: "Me escondí en el ruido y ahora no puedo escucharme.",
            author: "Sadráck"
        },
        {
            text: "Escríbenos si quieres leerte aquí <3.",
            author: "Vacante disponible"
        },
        {
            text: "Quiero verte, suplicarte, conocerte otra vez.",
            author: "BajoControl"
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-800 overflow-hidden relative">

            {/* Carousel */}
            <Carousel slides={slidesHome} />

            {/* Quienes somos */}
            <section className="py-24 px-4 bg-gradient-to-br from-orange-100 via-red-50 to-amber-100 relative overflow-hidden">

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
                        <h2 className="text-4xl md:text-6xl font-bold text-red-900 mb-8" style={{ fontFamily: "Playfair Display" }}>
                            Sobre Nosotros
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Contenido de texto */}
                        <div className="space-y-8">
                            <div className="paper-texture rounded-3xl p-8 md:p-12 warm-shadow">

                                <p
                                    className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6 text-justify"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Somos un <span className="golden-accent font-bold">colectivo de soñadores </span>
                                    que decidió darle forma a sus anhelos en 2024, un año marcado por la necesidad
                                    de volver a las palabras, de escucharlas como se escuchan los viejos ecos de la infancia
                                    o las conversaciones que nos acompañan en la madrugada.
                                </p>

                                <p
                                    className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6 text-justify"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Nacimos como un <span className="text-red-800 font-semibold">refugio literario</span>,
                                    un rincón íntimo donde lo frágil y lo humano tienen cabida, y donde cada poema se convierte
                                    en un abrazo, en memoria compartida, en la certeza de que no estamos solos en nuestras búsquedas.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-red-800" style={{ fontFamily: "Playfair Display" }}>
                                            250+
                                        </div>
                                        <div className="text-sm text-gray-600 italic">Poetas publicados</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-amber-800" style={{ fontFamily: "Playfair Display" }}>
                                            6
                                        </div>
                                        <div className="text-sm text-gray-600 italic">Ediciones especiales</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-800" style={{ fontFamily: "Playfair Display" }}>
                                            7
                                        </div>
                                        <div className="text-sm text-gray-600 italic">Países representados</div>
                                    </div>
                                </div>
                            </div>

                            {/* Misión y visión */}
                            <div className="grid md:grid-cols-2 gap-6 text-center">
                                <div className="bg-white bg-opacity-60 rounded-2xl p-6 warm-shadow hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-gradient-to-br from-red-200 to-red-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <Heart className="w-8 h-8 text-red-900" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-red-900" style={{ fontFamily: "Playfair Display" }} >
                                        Nuestra Misión
                                    </h3>
                                    <p className="text-gray-700 italic" style={{ fontFamily: "Crimson Text" }}>
                                        Ser el puente que conecta almas a través de la palabra escrita
                                    </p>
                                </div>

                                <div className="bg-white bg-opacity-60 rounded-2xl p-6 warm-shadow hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <Star className="w-8 h-8 text-amber-900" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-amber-900" style={{ fontFamily: "Playfair Display" }} >
                                        Nuestra Visión
                                    </h3>
                                    <p className="text-gray-700 italic" style={{ fontFamily: "Crimson Text" }}>
                                        Un mundo donde cada voz poética encuentra su eco y su lugar
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Imagen representativa */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl warm-shadow">
                                <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 via-orange-200 to-red-200 flex items-center justify-center">
                                    <div className="text-center text-white p-8">
                                        <img
                                            src="/images/about/image.jpg"
                                            alt="Equipo Margen Izquierdo"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>


                                {/* Overlay decorativo */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                {/* Elementos decorativos en la imagen */}
                                <div className="absolute top-4 right-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <Feather className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-white/90 rounded-full px-4 py-2">
                                        <p className="text-sm font-semibold text-gray-800">Est. 2024</p>
                                    </div>
                                </div>
                            </div>

                            {/* Elemento flotante alrededor de la imagen */}
                            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center warm-shadow">
                                <Coffee className="w-8 h-8 text-white" />
                            </div>

                            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center warm-shadow">
                                <Star className="w-10 h-10 text-white" />
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
                    {/* Contenedor */}
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

                        {/* Autor */}
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

                    {/* Botones de navegación funcionales */}
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

            {/* About section */}
            <section className="py-24 px-4 bg-gradient-to-br from-orange-100 via-red-50 to-amber-100">

                {/* Elementos flotantes adicionales */}
                <div className="floating-elements">
                    <div className="floating-element" style={{ top: "12%", left: "6%", animationDelay: "3s" }}>
                        <Quote size={50} className="text-red-700" />
                    </div>
                    <div className="floating-element" style={{ top: "12%", right: "6%", animationDelay: "15s" }}>
                        <Star size={35} className="text-yellow-600" />
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-red-900 mb-8" style={{ fontFamily: "Playfair Display" }}>
                            Un Refugio para el Alma
                        </h2>
                    </div>

                    <div className="paper-texture rounded-3xl p-12 md:p-20 warm-shadow">
                        <p
                            className="text-xl md:text-2xl leading-loose text-gray-800 mb-12 text-center italic"
                            style={{ fontFamily: "Crimson Text" }}
                        >
                            En <span className="golden-accent font-bold">Margen Izquierdo</span>, cada escrito es un lienzo donde las
                            almas sensibles de Latinoamérica pintan sus sueños más profundos. Somos el hogar de quienes creen que las
                            palabras pueden cambiar el mundo, una historia a la vez.
                        </p>

                        <div className="grid md:grid-cols-3 gap-12 mt-16">
                            <div className="text-center group">
                                <div className="w-24 h-24 bg-gradient-to-br from-red-200 to-red-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Feather className="w-12 h-12 text-red-900" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                                    Intenciones Puras
                                </h3>
                                <p className="text-gray-700 leading-relaxed italic" style={{ fontFamily: "Crimson Text" }}>
                                    Cultivamos jardines de palabras donde florecen las ideas más hermosas
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Coffee className="w-12 h-12 text-amber-900" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-amber-900" style={{ fontFamily: "Playfair Display" }}>
                                    Calidez Humana
                                </h3>
                                <p className="text-gray-700 leading-relaxed italic" style={{ fontFamily: "Crimson Text" }}>
                                    Como un café de barrio, aquí todos tienen una historia que contar
                                </p>
                            </div>

                            <div className="text-center group">
                                <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Star className="w-12 h-12 text-orange-900" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-orange-900" style={{ fontFamily: "Playfair Display" }}>
                                    Magia Cotidiana
                                </h3>
                                <p className="text-gray-700 leading-relaxed italic" style={{ fontFamily: "Crimson Text" }}>
                                    Encontramos lo extraordinario en cada verso, en cada suspiro poético
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Home