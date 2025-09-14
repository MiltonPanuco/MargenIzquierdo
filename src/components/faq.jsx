"use client"

import { useState } from "react"
import { BookOpen, Users, Edit3, Shield, Heart, Globe, Coffee, Star, Feather, Instagram } from "lucide-react"

const FAQ = () => {
    const [activeSection, setActiveSection] = useState(0)

    const faqData = [
        {
            id: 1,
            question: "¿Puedo enviar más de un escrito por edición?",
            answer:
                "Sí. En cada edición mensual, cada autor puede enviar hasta 2 textos. Estos pueden ser poemas, cuentos o relatos breves. De esta manera ofrecemos espacio suficiente para mostrar la voz de cada participante, al mismo tiempo que mantenemos un equilibrio para que más autores puedan aparecer en cada número de la revista.",
            icon: Edit3,
            title: "Número de escritos",
        },
        {
            id: 2,
            question: "¿Aceptan textos generados con inteligencia artificial?",
            answer:
                "No. En Margen Izquierdo solo publicamos textos originales creados por personas. Creemos que la literatura es una expresión profundamente humana, donde importan la experiencia, la sensibilidad y la creatividad individual. Los textos generados con inteligencia artificial no son aceptados, ya que nuestro objetivo es difundir voces auténticas y genuinas.",
            icon: Shield,
            title: "Uso de IA",
        },
        {
            id: 3,
            question: "¿Puedo enviar un texto que ya publiqué en mis redes sociales o blog personal?",
            answer:
                "Sí, puedes enviar textos que ya hayas publicado en tus redes sociales o blog personal, siempre que seas el autor original y conserves los derechos sobre tu obra. No requerimos exclusividad; valoramos que tu creatividad tenga múltiples espacios, y tu participación en Margen Izquierdo busca difundir tu voz a un público diferente y más amplio.",
            icon: Globe,
            title: "Exclusividad",
        },
        {
            id: 4,
            question: "¿Qué pasa con los derechos de autor de mi escrito?",
            answer:
                "Tu texto siempre seguirá siendo de tu propiedad. Al enviarlo, solo nos autorizas a publicarlo en la revista digital y en nuestras redes sociales, siempre con el debido crédito al autor. No cedemos ni adquirimos derechos sobre la obra, garantizando que mantienes la titularidad completa de tu creación.",
            icon: Shield,
            title: "Derechos de autor",
        },
        {
            id: 5,
            question: "¿Puedo enviar ilustraciones, fotos o arte visual?",
            answer:
                "Sí, puedes enviar ilustraciones, fotografías u otro tipo de arte visual, siempre que estén relacionadas con el tema de la edición del mes y complementen tu propuesta literaria. Buscamos que las imágenes enriquezcan la experiencia de lectura y aporten un valor estético a la revista.",
            icon: Star,
            title: "Arte visual",
        },
        {
            id: 6,
            question: "¿Cómo sabré si mi escrito fue seleccionado?",
            answer:
                "Si tu texto es seleccionado, te enviaremos un correo de notificandote esto antes de publicar la edición. Revisa tu bandeja de entrada y también la carpeta de spam para asegurarte de no perder ninguna notificación.",
            icon: Coffee,
            title: "¿Seleccionado?",
        },
        {
            id: 7,
            question: "¿Publican todos los textos que reciben?",
            answer:
                "No, no publicamos todos los textos que recibimos. Hacemos una selección cuidadosa para cada edición, considerando la calidad literaria, la originalidad y la afinidad con el tema del mes. Cada texto es leído con atención y respeto por nuestro equipo editorial.",
            icon: BookOpen,
            title: "¿Todos se publican?",
        },
        {
            id: 8,
            question: "¿Qué criterios usan para seleccionar los textos?",
            answer: (
                <>
                    <strong>Originalidad:</strong> Evitamos clichés, frases hechas o ideas repetidas. Preferimos imágenes nuevas,
                    giros propios y un estilo personal reconocible.
                    <br />
                    <strong>Calidad literaria:</strong> Textos revisados en ortografía, puntuación y estructura. La forma debe
                    potenciar el fondo, no distraerlo (Aunque entendemos que habrá excepciones que pueden surgir en tono de
                    protesta, experimental, escritura autómatica, escritura fónetica o incluso escritura radical).
                    <br />
                    <strong>Claridad expresiva:</strong> Aunque se valore la complejidad poética, el texto debe ser comprensible
                    dentro de su propuesta, sin caer en lo confuso por descuido.
                    <br />
                    <strong>Uso del lenguaje:</strong> Riqueza en vocabulario, ritmo y musicalidad. Valoramos la capacidad de
                    crear imágenes potentes y evocadoras.
                    <br />
                    <strong>Conexión emocional:</strong> Que el texto provoque en el lector algún tipo de resonancia, ya sea
                    estética, reflexiva o emocional.
                    <br />
                    <strong>Afinidad temática:</strong> Cuando existe un tema mensual, apreciamos que el texto dialogue con él de
                    forma creativa, no literal ni forzada.
                    <br />
                    <strong>Extensión adecuada:</strong> Piezas que mantengan la intensidad sin alargarse innecesariamente. La
                    brevedad también puede ser un valor.
                    <br />
                    <strong>Propuesta artística global:</strong> Más allá del texto aislado, consideramos si aporta una voz
                    distinta a la edición, enriqueciendo la diversidad de la revista.
                </>
            ),
            icon: Heart,
            title: "Criterios",
        },
        {
            id: 9,
            question: "¿Hay límite de edad o país para participar?",
            answer:
                "No, no hay ningún límite de edad ni restricción geográfica para participar. Cualquier persona hispanohablante, sin importar dónde se encuentre, puede enviar sus textos. Queremos que la literatura sea un espacio inclusivo y abierto, donde las ideas y emociones puedan compartirse más allá de fronteras y generaciones.",
            icon: Users,
            title: "Edad / País",
        },
        {
            id: 10,
            question: "¿La participación tiene algún costo?",
            answer:
                "No, enviar y publicar en Margen Izquierdo es totalmente gratuito. Creemos firmemente en la democratización de la literatura y en brindar a todos los escritores, sin importar su experiencia o recursos, la oportunidad de dar a conocer su obra. Nuestro objetivo es fomentar la creatividad y la difusión cultural sin barreras económicas.",
            icon: Heart,
            title: "Precio",
        },
        {
            id: 11,
            question: "¿Puedo usar seudónimo en lugar de mi nombre real?",
            answer:
                "Sí, puedes publicar bajo un seudónimo si lo prefieres. Solo asegúrate de indicarlo claramente en el formulario de envío. Respetamos la privacidad y la identidad de nuestros autores, y lo importante es que tu obra llegue al público sin importar el nombre que uses.",
            icon: Users,
            title: "Autor",
        },
        {
            id: 12,
            question: "¿Con qué frecuencia se publican nuevas ediciones?",
            answer:
                "Margen Izquierdo publica ediciones mensuales, garantizando un flujo constante de textos frescos y variados. Cada 01 del mes lanzamos una nueva edición, ofreciendo a los lectores voces diversas y a los autores la oportunidad de compartir sus creaciones con regularidad. A su vez, lanzamos la convocatoria el 15 de cada mes para nuevos escritos del mes entrante.",
            icon: BookOpen,
            title: "Ediciones",
        },
        {
            id: 13,
            question: "¿Qué es una introducción en tercera persona?",
            answer:
                "Es una breve presentación del autor escrita como si otra persona hablara de él o ella. Sirve para dar contexto sobre la trayectoria, intereses o estilo del autor, sin usar la primera persona. Por ejemplo: 'María López es poeta mexicana que explora la naturaleza y la memoria en sus textos, combinando sensibilidad y reflexión'.",
            icon: Edit3,
            title: "Tercera persona",
        },
        {
            id: 14,
            question: "¿Recibiré un pago por publicar mi texto?",
            answer:
                "No ofrecemos un pago económico por las publicaciones. Lo que brindamos es difusión, reconocimiento como autor, crédito por tu obra y la oportunidad de formar parte de una comunidad literaria latinoamericana vibrante, donde tus textos pueden llegar a lectores interesados y apasionados por la literatura.",
            icon: Heart,
            title: "Pago",
        },
    ]

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

            {/* Header */}
            <div className="relative z-10 py-16 px-4 text-center pt-40">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-red-900 mb-6" style={{ fontFamily: "Playfair Display" }}>
                        Lo que necesitas saber
                    </h1>

                    <p
                        className="text-lg md:text-xl text-gray-700 italic leading-relaxed max-w-2xl mx-auto"
                        style={{ fontFamily: "Crimson Text" }}
                    >
                        Encuentra respuestas a las consultas más comunes sobre nuestro proceso editorial
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar Navigation - Hidden on small and medium devices */}
                        <div className="hidden lg:block lg:col-span-1">
                            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg sticky top-8">
                                <h3 className="text-xl font-bold text-red-900 mb-6" style={{ fontFamily: "Playfair Display" }}>
                                    Preguntas Frecuentes
                                </h3>

                                <nav className="space-y-2 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-transparent">
                                    {faqData.slice(0, 7).map((faq, index) => {
                                        const IconComponent = faq.icon
                                        return (
                                            <button
                                                key={faq.id}
                                                onClick={() => setActiveSection(index)}
                                                className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${activeSection === index
                                                        ? "bg-gradient-to-r from-red-100 to-amber-100 text-red-900 shadow-md"
                                                        : "text-gray-700 hover:bg-white hover:bg-opacity-50"
                                                    }`}
                                            >
                                                <IconComponent className="w-5 h-5 flex-shrink-0" />
                                                <span className="text-sm font-medium" style={{ fontFamily: "Crimson Text" }}>
                                                    {faq.title}
                                                </span>
                                            </button>
                                        )
                                    })}

                                    {faqData.slice(7).map((faq, index) => {
                                        const actualIndex = index + 7
                                        const IconComponent = faq.icon
                                        return (
                                            <button
                                                key={faq.id}
                                                onClick={() => setActiveSection(actualIndex)}
                                                className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${activeSection === actualIndex
                                                        ? "bg-gradient-to-r from-red-100 to-amber-100 text-red-900 shadow-md"
                                                        : "text-gray-700 hover:bg-white hover:bg-opacity-50"
                                                    }`}
                                            >
                                                <IconComponent className="w-5 h-5 flex-shrink-0" />
                                                <span className="text-sm font-medium" style={{ fontFamily: "Crimson Text" }}>
                                                    {faq.title}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>
                        </div>

                        {/* Content Area - Full width on small/medium, 3/4 width on large */}
                        <div className="col-span-full lg:col-span-3">
                            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
                                {faqData.map((faq, index) => {
                                    const IconComponent = faq.icon
                                    return (
                                        <div
                                            key={faq.id}
                                            className={`transition-all duration-500 ${activeSection === index ? "block" : "hidden"}`}
                                        >
                                            <div className="flex items-center space-x-4 mb-8">
                                                <div className="w-16 h-16 bg-gradient-to-br from-red-200 to-red-300 rounded-full flex items-center justify-center">
                                                    <IconComponent className="w-8 h-8 text-red-900" />
                                                </div>
                                                <h2
                                                    className="text-3xl md:text-4xl font-bold text-red-900"
                                                    style={{ fontFamily: "Playfair Display" }}
                                                >
                                                    {faq.title}
                                                </h2>
                                            </div>

                                            <div className="prose prose-lg max-w-none" style={{ fontFamily: "Crimson Text" }}>
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 leading-relaxed">
                                                    {faq.question}
                                                </h3>
                                                <div className="text-gray-800 leading-relaxed mb-4 sm:mb-6 text-justify text-sm sm:text-base md:text-lg">
                                                    {typeof faq.answer === "string" ? (
                                                        <p>{faq.answer}</p>
                                                    ) : (
                                                        <div className="space-y-3 sm:space-y-4">{faq.answer}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 gap-4 sm:gap-0">
                                    <button
                                        onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                                        disabled={activeSection === 0}
                                        className="flex items-center space-x-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 font-medium transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                        style={{ fontFamily: "Crimson Text" }}
                                    >
                                        <span>← Anterior</span>
                                    </button>

                                    <div className="flex space-x-2 order-first sm:order-none">
                                        {faqData.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === activeSection ? "bg-red-400 scale-125" : "bg-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setActiveSection(Math.min(faqData.length - 1, activeSection + 1))}
                                        disabled={activeSection === faqData.length - 1}
                                        className="flex items-center space-x-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-red-100 to-pink-100 text-red-900 font-medium transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                        style={{ fontFamily: "Crimson Text" }}
                                    >
                                        <span>Siguiente →</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative z-10 py-16 px-4 text-center pb-20">
                <div className="max-w-3xl mx-auto bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-red-300 rounded-full flex items-center justify-center shadow-lg">
                            <BookOpen className="w-10 h-10 text-red-900" />
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-6" style={{ fontFamily: "Playfair Display" }}>
                        ¿Tienes más preguntas?
                    </h3>

                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: "Crimson Text" }}>
                        No dudes en contactarnos. Estamos aquí para acompañarte en tu camino literario y resolver cualquier duda que
                        puedas tener.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:margenizquierdo.contact@gmail.com"
                            className="bg-amber-100 text-red-900 px-8 py-4 rounded-full font-semibold shadow-md hover:bg-amber-200 hover:shadow-lg transform hover:scale-105 transition-all inline-flex items-center gap-2"
                            style={{ fontFamily: "Playfair Display", border: "2px solid #b91c1c" }}
                        >
                            <Heart className="w-5 h-5" />
                            Escríbenos
                        </a>

                        <a
                            href="https://instagram.com/margen_izquierdo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-red-900 text-red-900 px-8 py-4 rounded-full font-semibold shadow-md hover:bg-red-900 hover:text-amber-50 hover:shadow-lg transform hover:scale-105 transition-all inline-flex items-center gap-2"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            <Instagram className="w-5 h-5" />
                            Instagram
                        </a>
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

export default FAQ
