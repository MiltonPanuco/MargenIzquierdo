"use client"

import { useState } from "react"
import { BookOpen, Feather, Coffee, Star, Heart, Users, Globe, FileText, Mail, Shield } from "lucide-react"

const SubmitRules = () => {
    const [activeSection, setActiveSection] = useState(0)

    const rules = [
        {
            id: "originality",
            title: "Originalidad",
            icon: FileText,
            content: `Cada palabra que compartes con nosotros debe brotar de tu propia experiencia y creatividad. Los textos deben ser 100% originales, creados por el autor que los envía, sin fragmentos de otras fuentes ni contenido plagiado (Al menos que la inspiración brotara de ahí y se haga mención de ese mismo).

        En este espacio celebramos la autenticidad de la voz humana, única e irrepetible. Tu perspectiva del mundo es lo que hace especial tu obra.

        La originalidad no significa perfección, sino honestidad. Queremos conocer tu voz tal como es, con toda su belleza y particularidad.`,
        },
        {
            id: "no-ai",
            title: "No se permite IA",
            icon: Star,
            content: `Los textos generados, total o parcialmente, por inteligencia artificial no serán aceptados en nuestro espacio literario. Valoramos profundamente la imaginación humana, la emoción que surge del corazón y la experiencia vivida.

        Buscamos la calidez de la palabra humana, esa que lleva consigo las huellas de quien la escribió, sus dudas, sus certezas, sus latidos.

        La creatividad artificial puede ser fascinante, pero aquí preferimos el temblor de la mano que escribe desde el alma.`,
        },
        {
            id: "format",
            title: "Formato y Extensión",
            icon: Heart,
            content: (
                <>
                    Para que tu obra encuentre su mejor presentación, seguimos estas pautas de formato:
                    <br />
                    <br />
                    <strong>Poemas</strong>: mínimo 4 líneas / máximo 30 líneas
                    <br />
                    <strong>Cuentos o relatos</strong>: mínimo 300 palabras / máximo 2,500 palabras
                    <br />
                    <strong>Formatos aceptados</strong>: Word, PDF, JPG, PNG, WEBP
                    <br />
                    <strong>Tipografía</strong>: Arial, Times New Roman, Calibri o similar en tamaño 12
                    <br />
                    <br />
                    Estas medidas nos ayudan a crear una experiencia de lectura armoniosa para toda nuestra comunidad.
                    <br />
                    Como un "plus" para tu poema, te recomendamos mandarnos un audio con tu poema narrado, así aumentas la
                    posibilidad de aparecer en nuestras redes sociales.
                </>
            ),
        },
        {
            id: "language",
            title: "Idioma",
            icon: BookOpen,
            content: `Todos los textos deben estar escritos en español o alguna lengua indígena acompañada de su respectiva traducción.

        Celebramos la riqueza lingüística de nuestros territorios y honramos tanto el castellano como las lenguas originarias que enriquecen nuestro patrimonio cultural.

        Si escribes en lengua indígena, incluye la traducción para que toda nuestra comunidad pueda disfrutar de tu obra.`,
        },
        {
            id: "content",
            title: "Contenido Permitido y Prohibido",
            icon: Shield,
            content: (
                <>
                    Promovemos la libertad creativa dentro de un marco de respeto y cuidado mutuo. Se permite la exploración de
                    temas intensos, críticos o polémicos, siempre expresados con respeto y creatividad.
                    <br />
                    <br />
                    <strong>Sexualidad</strong>: Aceptamos expresiones naturales, pero no contenido sexual extremadamente
                    explícito.
                    <br />
                    <strong>Violencia</strong>: Prohibimos descripciones detalladas de violencia extrema o gore.
                    <br />
                    <strong>Respeto</strong>: No toleramos homofobia, racismo, discriminación por religión, género u orientación
                    sexual.
                    <br />
                    <strong>Lenguaje</strong>: La fuerza de la palabra también reside en su elegancia; evita vulgaridades
                    innecesarias.
                </>
            ),
        },
        {
            id: "rights",
            title: "Derechos y Publicación",
            icon: Users,
            content: `Al enviar tu texto, aceptas que Margen Izquierdo pueda publicarlo en nuestra web y redes sociales, siempre mencionando tu nombre como autor.

        Los textos seguirán siendo de tu propiedad completa. Somos custodios temporales de tu obra, no sus dueños.

        El equipo editorial podrá realizar ajustes mínimos de formato o claridad para mejorar la experiencia de lectura, siempre respetando la esencia de tu mensaje.`,
        },
        {
            id: "submissions",
            title: "Número de Envíos",
            icon: Mail,
            content: `Cada autor puede enviar entre 1 y 2 textos por edición, permitiendo que tu voz tenga espacio sin saturar el conjunto.

        Si envías más textos, solo consideraremos los primeros que recibamos, así que elige cuidadosamente aquellos que mejor representen tu arte.

        Esta limitación nos permite dar atención adecuada a cada obra y mantener la diversidad de voces en cada publicación.`,
        },
        {
            id: "evaluation",
            title: "Evaluación y Selección",
            icon: Globe,
            content: `Todos los textos serán revisados con cuidado y respeto por nuestro equipo editorial, conformado por lectores apasionados y escritores comprometidos.

        No todos los textos enviados serán publicados; la selección dependerá de calidad literaria, coherencia temática y creatividad.

        Cada decisión se toma pensando en el conjunto de la publicación y en ofrecer a nuestros lectores una experiencia rica y variada.`,
        },
        {
            id: "recommendations",
            title: "Recomendaciones Adicionales",
            icon: Feather,
            content: `Sabemos que la ortografía y la puntuación son parte esencial de tu voz como autor, así que cuida de ella. No obstante, es solamente una sugerencia, también sabemos que existen maneras impresionantes y distintas de expresar lo que sentimos.

        Procura que tu obra transmita una emoción, reflexión o mensaje que resuene en quien la lea.

        Atrévete a ser auténtico: lo que otros dejan al margen, aquí puede encontrar su lugar y su luz.

        Recuerda que escribir es un acto de generosidad; compartes algo tuyo con el mundo.`,
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
            <div className="relative z-10 py-8 md:py-16 px-4 text-center pt-20 md:pt-40">
                <div className="max-w-4xl mx-auto">
                    <h1
                        className="text-3xl md:text-4xl lg:text-6xl font-bold text-red-900 mb-4 md:mb-6"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Reglas
                    </h1>

                    <p
                        className="text-base md:text-lg lg:text-xl text-gray-700 italic leading-relaxed max-w-2xl mx-auto px-2"
                        style={{ fontFamily: "Crimson Text" }}
                    >
                        Queremos conocer tu voz, tus versos, tus secretos mejor guardados. Aquí están las pautas para formar parte
                        de nuestra familia literaria
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 py-6 md:py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-4 md:gap-8">
                        {/* Sidebar Navigation - Hidden on mobile and tablet */}
                        <div className="hidden lg:block lg:col-span-1">
                            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg sticky top-8">
                                <h3 className="text-xl font-bold text-red-900 mb-6" style={{ fontFamily: "Playfair Display" }}>
                                    Guías de Envío
                                </h3>

                                <nav className="space-y-2">
                                    {rules.map((rule, index) => {
                                        const IconComponent = rule.icon
                                        return (
                                            <button
                                                key={rule.id}
                                                onClick={() => setActiveSection(index)}
                                                className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${activeSection === index
                                                        ? "bg-gradient-to-r from-red-100 to-amber-100 text-red-900 shadow-md"
                                                        : "text-gray-700 hover:bg-white hover:bg-opacity-50"
                                                    }`}
                                            >
                                                <IconComponent className="w-5 h-5 flex-shrink-0" />
                                                <span className="text-sm font-medium" style={{ fontFamily: "Crimson Text" }}>
                                                    {rule.title}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>
                        </div>

                        {/* Content Area - Full width on mobile, 3/4 width on desktop */}
                        <div className="lg:col-span-3">
                            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-lg">
                                {rules.map((rule, index) => {
                                    const IconComponent = rule.icon
                                    return (
                                        <div
                                            key={rule.id}
                                            className={`transition-all duration-500 ${activeSection === index ? "block" : "hidden"}`}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8">
                                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-200 to-red-300 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                                                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-red-900" />
                                                </div>
                                                <h2
                                                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-900 text-center sm:text-left"
                                                    style={{ fontFamily: "Playfair Display" }}
                                                >
                                                    {rule.title}
                                                </h2>
                                            </div>

                                            <div className="prose prose-sm md:prose-lg max-w-none" style={{ fontFamily: "Crimson Text" }}>
                                                {typeof rule.content === "string" ? (
                                                    rule.content.split("\n\n").map((paragraph, pIndex) => (
                                                        <p
                                                            key={pIndex}
                                                            className="text-gray-800 leading-relaxed mb-4 md:mb-6 text-justify text-sm md:text-base"
                                                        >
                                                            {paragraph.trim()}
                                                        </p>
                                                    ))
                                                ) : (
                                                    <div className="text-gray-800 leading-relaxed mb-4 md:mb-6 text-justify text-sm md:text-base">
                                                        {rule.content}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}

                                {/* Navigation buttons */}
                                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 space-y-4 sm:space-y-0">
                                    <button
                                        onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                                        disabled={activeSection === 0}
                                        className="flex items-center space-x-2 px-4 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 font-medium transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                                        style={{ fontFamily: "Crimson Text" }}
                                    >
                                        <span>← Anterior</span>
                                    </button>

                                    <div className="flex space-x-2">
                                        {rules.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === activeSection ? "bg-red-400 scale-125" : "bg-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setActiveSection(Math.min(rules.length - 1, activeSection + 1))}
                                        disabled={activeSection === rules.length - 1}
                                        className="flex items-center space-x-2 px-4 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-red-100 to-pink-100 text-red-900 font-medium transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
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

            {/* Call to Action */}
            <div className="relative z-10 py-8 md:py-16 px-4 text-center pb-12 md:pb-20">
                <div className="max-w-3xl mx-auto bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-200 to-red-300 rounded-full flex items-center justify-center shadow-lg">
                            <Mail className="w-8 h-8 md:w-10 md:h-10 text-red-900" />
                        </div>
                    </div>

                    <h3
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-red-900 mb-4 md:mb-6"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        ¿Listo para Compartir tu Arte?
                    </h3>

                    <p
                        className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed px-2"
                        style={{ fontFamily: "Crimson Text" }}
                    >
                        Envía tu obra a través de nuestro formulario y permite que tus palabras encuentren el eco que merecen en
                        nuestra comunidad literaria.
                    </p>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScLLFkNqCgvjwQRgLvy8Vro7HAsC8OBXovHFkgVRnGWv6kUJg/viewform?usp=preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                        style={{ fontFamily: "Crimson Text" }}
                    >
                        <Mail className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Enviar mi Obra</span>
                    </a>

                    <div className="mt-6 md:mt-8 text-xs md:text-sm text-gray-600 px-2" style={{ fontFamily: "Crimson Text" }}>
                        Con cariño, esperamos tu participación en nuestra familia literaria
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

export default SubmitRules
