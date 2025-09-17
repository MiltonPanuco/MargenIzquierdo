"use client"

import { useState } from "react"
import {
    Lightbulb,
    CheckCircle,
    Eye,
    Palette,
    Heart,
    Target,
    Zap,
    Award,
    Sparkles,
    BookOpen,
    Users,
    Clock,
    Star,
    Coffee,
    Feather,
    ArrowRight,
    CheckCircle2,
    AlertCircle,
    Info,
    TrendingUp,
    Layers,
    PenTool,
    MessageCircle,
    ThumbsUp,
    ThumbsDown,
} from "lucide-react"

const Rubric = () => {
    const [activeTab, setActiveTab] = useState("overview")
    const [selectedCriterion, setSelectedCriterion] = useState(null)

    const criteriaData = [
        {
            icon: Lightbulb,
            title: "Originalidad",
            description:
                "Evitamos clichés, frases hechas o ideas repetidas. Preferimos imágenes nuevas, giros propios y un estilo personal reconocible.",
            color: "from-orange-100 to-amber-100",
            weight: "25%",
            priority: "Crítico",
            examples: {
                good: [
                    "Metáforas únicas y personales",
                    "Perspectivas novedosas sobre temas universales",
                    "Voz propia y reconocible",
                    "Imágenes poéticas innovadoras",
                ],
                avoid: [
                    "Frases hechas como 'el amor es ciego'",
                    "Metáforas gastadas sobre el tiempo",
                    "Lugares comunes sobre la muerte",
                    "Comparaciones obvias",
                ],
            },
        },
        {
            icon: CheckCircle,
            title: "Calidad literaria",
            description:
                "Textos revisados en ortografía, puntuación y estructura. La forma debe potenciar el fondo, no distraerlo (Aunque entendemos que habrá excepciones que pueden surgir en tono de protesta, experimental, escritura automática, escritura fonética o incluso escritura radical).",
            color: "from-red-100 to-orange-100",
            weight: "20%",
            priority: "Alto",
            examples: {
                good: [
                    "Ortografía y puntuación correctas",
                    "Estructura coherente y fluida",
                    "Párrafos bien organizados",
                    "Uso consciente de recursos estilísticos",
                ],
                avoid: [
                    "Errores ortográficos frecuentes",
                    "Puntuación incorrecta que confunde",
                    "Estructura desorganizada sin propósito",
                    "Repeticiones innecesarias",
                ],
            },
        },
        {
            icon: Palette,
            title: "Uso del lenguaje",
            description:
                "Riqueza en vocabulario, ritmo y musicalidad. Valoramos la capacidad de crear imágenes potentes y evocadoras.",
            color: "from-orange-100 to-red-100",
            weight: "20%",
            priority: "Alto",
            examples: {
                good: [
                    "Vocabulario rico y preciso",
                    "Ritmo y musicalidad en la prosa/verso",
                    "Imágenes sensoriales potentes",
                    "Uso creativo del lenguaje",
                ],
                avoid: [
                    "Vocabulario pobre o repetitivo",
                    "Falta de ritmo o musicalidad",
                    "Imágenes débiles o confusas",
                    "Uso mecánico del lenguaje",
                ],
            },
        },
        {
            icon: Eye,
            title: "Claridad expresiva",
            description:
                "Aunque se valore la complejidad poética, el texto debe ser comprensible dentro de su propuesta, sin caer en lo confuso por descuido.",
            color: "from-amber-100 to-yellow-100",
            weight: "15%",
            priority: "Medio",
            examples: {
                good: [
                    "Ideas complejas expresadas con claridad",
                    "Simbolismo accesible al lector",
                    "Coherencia interna del texto",
                    "Propósito claro aunque sea experimental",
                ],
                avoid: [
                    "Confusión sin propósito artístico",
                    "Ambigüedad por descuido",
                    "Falta de hilo conductor",
                    "Oscuridad gratuita",
                ],
            },
        },
        {
            icon: Heart,
            title: "Conexión emocional",
            description:
                "Que el texto provoque en el lector algún tipo de resonancia, ya sea estética, reflexiva o emocional.",
            color: "from-red-100 to-pink-100",
            weight: "10%",
            priority: "Medio",
            examples: {
                good: [
                    "Emociones auténticas y universales",
                    "Capacidad de conmover al lector",
                    "Resonancia estética o reflexiva",
                    "Honestidad emocional",
                ],
                avoid: [
                    "Sentimentalismo forzado",
                    "Emociones superficiales",
                    "Falta de autenticidad",
                    "Distancia emocional excesiva",
                ],
            },
        },
        {
            icon: Target,
            title: "Afinidad temática",
            description:
                "Cuando existe un tema mensual, apreciamos que el texto dialogue con él de forma creativa, no literal ni forzada.",
            color: "from-amber-100 to-orange-100",
            weight: "5%",
            priority: "Bajo",
            examples: {
                good: [
                    "Interpretación creativa del tema",
                    "Conexión sutil pero clara",
                    "Enfoque original del tema propuesto",
                    "Diálogo natural con la temática",
                ],
                avoid: [
                    "Interpretación literal del tema",
                    "Conexión forzada o artificial",
                    "Ignorar completamente el tema",
                    "Abordaje superficial",
                ],
            },
        },
        {
            icon: Zap,
            title: "Extensión adecuada",
            description:
                "Piezas que mantengan la intensidad sin alargarse innecesariamente. La brevedad también puede ser un valor.",
            color: "from-yellow-100 to-amber-100",
            weight: "3%",
            priority: "Bajo",
            examples: {
                good: [
                    "Extensión apropiada para el contenido",
                    "Intensidad sostenida",
                    "Economía del lenguaje",
                    "Final contundente",
                ],
                avoid: [
                    "Textos excesivamente largos sin justificación",
                    "Relleno innecesario",
                    "Pérdida de intensidad por extensión",
                    "Finales diluidos",
                ],
            },
        },
        {
            icon: Award,
            title: "Propuesta artística global",
            description:
                "Más allá del texto aislado, consideramos si aporta una voz distinta a la edición, enriqueciendo la diversidad de la revista.",
            color: "from-orange-100 to-red-100",
            weight: "2%",
            priority: "Bajo",
            examples: {
                good: [
                    "Voz única y diferenciada",
                    "Aporte a la diversidad de la edición",
                    "Propuesta estética coherente",
                    "Enriquecimiento del conjunto",
                ],
                avoid: [
                    "Repetición de voces ya presentes",
                    "Falta de personalidad propia",
                    "Propuesta genérica",
                    "No aporta diversidad",
                ],
            },
        },
    ]

    const evaluationProcess = [
        {
            step: 1,
            title: "Lectura inicial",
            description: "Primera impresión y evaluación general del texto",
            icon: BookOpen,
            time: "2-3 minutos",
            details: "Evaluamos la primera impresión, el impacto inicial y la coherencia general del texto.",
        },
        {
            step: 2,
            title: "Análisis técnico",
            description: "Revisión de aspectos formales: ortografía, estructura, claridad",
            icon: CheckCircle2,
            time: "3-4 minutos",
            details: "Verificamos la corrección técnica, la estructura narrativa y la claridad expresiva.",
        },
        {
            step: 3,
            title: "Evaluación artística",
            description: "Análisis de originalidad, uso del lenguaje y propuesta estética",
            icon: Palette,
            time: "4-6 minutos",
            details: "Analizamos la originalidad, el uso creativo del lenguaje y la propuesta artística única.",
        },
        {
            step: 4,
            title: "Resonancia emocional",
            description: "Evaluación del impacto emocional y la conexión con el lector",
            icon: Heart,
            time: "2-3 minutos",
            details: "Medimos la capacidad del texto para generar resonancia emocional o reflexiva.",
        },
        {
            step: 5,
            title: "Decisión final",
            description: "Consideración global y decisión de publicación",
            icon: Award,
            time: "1-2 minutos",
            details: "Evaluación integral considerando todos los criterios y la afinidad con la línea editorial.",
        },
    ]

    const commonMistakes = [
        {
            mistake: "Enviar textos sin revisar",
            impact: "Alto",
            frequency: "45%",
            solution: "Siempre revisar ortografía y estructura antes de enviar",
            prevention: "Usar herramientas de corrección y leer en voz alta",
        },
        {
            mistake: "Usar clichés y lugares comunes",
            impact: "Alto",
            frequency: "38%",
            solution: "Buscar imágenes y expresiones propias y originales",
            prevention: "Cuestionar cada metáfora y buscar alternativas únicas",
        },
        {
            mistake: "Ignorar el tema mensual",
            impact: "Medio",
            frequency: "22%",
            solution: "Leer cuidadosamente la convocatoria y el tema propuesto",
            prevention: "Anotar ideas específicas sobre el tema antes de escribir",
        },
        {
            mistake: "Textos excesivamente largos",
            impact: "Medio",
            frequency: "31%",
            solution: "Editar para mantener solo lo esencial y potente",
            prevention: "Establecer un límite de palabras y respetarlo",
        },
        {
            mistake: "Falta de coherencia interna",
            impact: "Alto",
            frequency: "28%",
            solution: "Asegurar que todas las partes del texto dialoguen entre sí",
            prevention: "Crear un esquema previo y verificar la unidad temática",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-800 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute animate-pulse opacity-10"
                    style={{
                        top: "8%",
                        left: "3%",
                        animation: "float 6s ease-in-out infinite",
                        animationDelay: "0s",
                    }}
                >
                    <Feather size={80} className="text-amber-800" />
                </div>
                <div
                    className="absolute animate-pulse opacity-10"
                    style={{
                        top: "65%",
                        right: "8%",
                        animation: "float 8s ease-in-out infinite",
                        animationDelay: "3s",
                    }}
                >
                    <Coffee size={70} className="text-red-900" />
                </div>
                <div
                    className="absolute animate-pulse opacity-10"
                    style={{
                        top: "25%",
                        right: "20%",
                        animation: "float 7s ease-in-out infinite",
                        animationDelay: "6s",
                    }}
                >
                    <Star size={60} className="text-yellow-700" />
                </div>
                <div
                    className="absolute animate-pulse opacity-10"
                    style={{
                        top: "45%",
                        left: "15%",
                        animation: "float 9s ease-in-out infinite",
                        animationDelay: "2s",
                    }}
                >
                    <Sparkles size={50} className="text-orange-700" />
                </div>
            </div>

            <div className="relative z-10 py-16 px-4 text-center">
                <div className="max-w-5xl mx-auto">
                    <h1
                        className="text-4xl md:text-6xl font-bold text-red-900 mb-8 pt-20"
                        style={{ fontFamily: "Playfair Display" }}
                    >
                        Rúbrica de Evaluación
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto mb-12 text-pretty"
                        style={{ fontFamily: "Crimson Text" }}
                    >
                        Conoce en detalle cómo evaluamos cada texto para garantizar la calidad literaria de Margen Izquierdo
                    </p>
                </div>
            </div>

            <div className="relative z-10 px-4 mb-16">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { id: "overview", label: "Visión General", icon: Eye, description: "Panorama completo" },
                            { id: "criteria", label: "Criterios", icon: CheckCircle, description: "Evaluación detallada" },
                            { id: "process", label: "Proceso", icon: TrendingUp, description: "Paso a paso" },
                            { id: "tips", label: "Consejos", icon: Lightbulb, description: "Mejora tus textos" },
                        ].map((tab) => {
                            const IconComponent = tab.icon
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 group backdrop-blur-sm ${activeTab === tab.id
                                            ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-xl scale-105"
                                            : "bg-white bg-opacity-70 text-gray-700 hover:bg-opacity-90 hover:shadow-lg hover:scale-102"
                                        }`}
                                >
                                    <IconComponent
                                        className={`w-5 h-5 ${activeTab === tab.id ? "animate-pulse" : "group-hover:scale-110"} transition-transform`}
                                    />
                                    <div className="text-left">
                                        <div className="text-sm font-bold" style={{ fontFamily: "Crimson Text" }}>
                                            {tab.label}
                                        </div>
                                        <div className="text-xs opacity-75 hidden md:block">{tab.description}</div>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Overview Tab */}
                    {activeTab === "overview" && (
                        <div className="space-y-16">
                            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white border-opacity-50">
                                <h2
                                    className="text-4xl font-bold text-red-900 mb-10 text-center"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    ¿Cómo evaluamos tu texto?
                                </h2>
                                <div className="grid lg:grid-cols-3 gap-10">
                                    <div className="lg:col-span-2 space-y-8">
                                        <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Crimson Text" }}>
                                            Cada texto que recibimos pasa por un proceso de evaluación cuidadoso y respetuoso. Nuestro equipo
                                            editorial lee cada propuesta con atención, considerando múltiples aspectos que van desde la
                                            calidad técnica hasta la propuesta artística global.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="border-l-4 border-green-500 pl-6 py-4">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <ThumbsUp className="w-6 h-6 text-green-600" />
                                                    <span className="font-bold text-green-800 text-lg">Lo que valoramos</span>
                                                </div>
                                                <p className="text-green-700" style={{ fontFamily: "Crimson Text" }}>
                                                    Originalidad, calidad técnica, conexión emocional y propuesta artística única
                                                </p>
                                            </div>
                                            <div className="border-l-4 border-red-500 pl-6 py-4">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <ThumbsDown className="w-6 h-6 text-red-600" />
                                                    <span className="font-bold text-red-800 text-lg">Lo que evitamos</span>
                                                </div>
                                                <p className="text-red-700" style={{ fontFamily: "Crimson Text" }}>
                                                    Clichés, errores técnicos, falta de originalidad y propuestas genéricas
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl shadow-lg text-center">
                                            <h3 className="text-2xl font-bold text-red-900 mb-6" style={{ fontFamily: "Playfair Display" }}>
                                                Tiempo promedio
                                            </h3>
                                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                                <Clock className="w-10 h-10 text-red-700" />
                                            </div>
                                            <div className="text-3xl font-bold text-red-800 mb-2">15 min</div>
                                            <div className="text-red-700" style={{ fontFamily: "Crimson Text" }}>
                                                por texto
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Users,
                                        title: "Equipo Editorial",
                                        description:
                                            "Escritores y editores experimentados que leen cada texto con respeto y atención profesional",
                                        color: "from-blue-200 to-blue-300",
                                        iconColor: "text-blue-900",
                                    },
                                    {
                                        icon: Layers,
                                        title: "Evaluación Integral",
                                        description:
                                            "Consideramos tanto aspectos técnicos como artísticos para una evaluación completa y justa",
                                        color: "from-purple-200 to-purple-300",
                                        iconColor: "text-purple-900",
                                    },
                                    {
                                        icon: MessageCircle,
                                        title: "Retroalimentación",
                                        description: "Aunque no siempre es posible, valoramos el diálogo constructivo con los autores",
                                        color: "from-green-200 to-green-300",
                                        iconColor: "text-green-900",
                                    },
                                ].map((item, index) => {
                                    const IconComponent = item.icon
                                    return (
                                        <div key={index} className="group">
                                            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center border border-white border-opacity-50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                                <div
                                                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <IconComponent className={`w-10 h-10 ${item.iconColor}`} />
                                                </div>
                                                <h3 className="text-2xl font-bold text-red-900 mb-4" style={{ fontFamily: "Playfair Display" }}>
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Crimson Text" }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {/* Criteria Tab */}
                    {activeTab === "criteria" && (
                        <div className="space-y-10">
                            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white border-opacity-50">
                                <h2
                                    className="text-4xl font-bold text-red-900 mb-8 text-center"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    Criterios de Evaluación Detallados
                                </h2>
                                <p
                                    className="text-gray-700 leading-relaxed mb-8 text-lg text-center max-w-4xl mx-auto"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Cada criterio tiene un peso específico en la evaluación final. Aquí encontrarás ejemplos concretos de
                                    lo que buscamos y lo que preferimos evitar.
                                </p>

                                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-8">
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-4 text-center"
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        Distribución de Pesos
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {criteriaData.map((criterion, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm"
                                            >
                                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${criterion.color}`} />
                                                <span className="text-sm font-medium text-gray-700">{criterion.title}</span>
                                                <span className="text-sm font-bold text-red-600">{criterion.weight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-10">
                                {criteriaData.map((criterion, index) => {
                                    const IconComponent = criterion.icon
                                    const isSelected = selectedCriterion === index
                                    return (
                                        <div
                                            key={index}
                                            className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white border-opacity-50 transition-all duration-300 ${isSelected ? "ring-4 ring-red-200 shadow-2xl" : "hover:shadow-2xl"
                                                }`}
                                            onClick={() => setSelectedCriterion(isSelected ? null : index)}
                                        >
                                            <div className="flex items-start space-x-8 mb-8">
                                                <div
                                                    className={`w-20 h-20 bg-gradient-to-br ${criterion.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                                                >
                                                    <IconComponent className="w-10 h-10 text-red-900" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-4 mb-3">
                                                        <h3 className="text-3xl font-bold text-red-900" style={{ fontFamily: "Playfair Display" }}>
                                                            {criterion.title}
                                                        </h3>
                                                        <div className="flex items-center space-x-2">
                                                            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold">
                                                                {criterion.weight}
                                                            </span>
                                                            <span
                                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${criterion.priority === "Crítico"
                                                                        ? "bg-red-200 text-red-800"
                                                                        : criterion.priority === "Alto"
                                                                            ? "bg-orange-200 text-orange-800"
                                                                            : "bg-yellow-200 text-yellow-800"
                                                                    }`}
                                                            >
                                                                {criterion.priority}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Crimson Text" }}>
                                                        {criterion.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="grid lg:grid-cols-2 gap-8">
                                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
                                                    <div className="flex items-center space-x-3 mb-6">
                                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                                        <h4 className="font-bold text-green-800 text-xl" style={{ fontFamily: "Playfair Display" }}>
                                                            Lo que valoramos
                                                        </h4>
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {criterion.examples.good.map((example, idx) => (
                                                            <li key={idx} className="flex items-start space-x-3">
                                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
                                                                <span className="text-green-700 leading-relaxed" style={{ fontFamily: "Crimson Text" }}>
                                                                    {example}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl border-2 border-red-200">
                                                    <div className="flex items-center space-x-3 mb-6">
                                                        <AlertCircle className="w-6 h-6 text-red-600" />
                                                        <h4 className="font-bold text-red-800 text-xl" style={{ fontFamily: "Playfair Display" }}>
                                                            Lo que preferimos evitar
                                                        </h4>
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {criterion.examples.avoid.map((example, idx) => (
                                                            <li key={idx} className="flex items-start space-x-3">
                                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                                                                <span className="text-red-700 leading-relaxed" style={{ fontFamily: "Crimson Text" }}>
                                                                    {example}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {/* Process Tab */}
                    {activeTab === "process" && (
                        <div className="space-y-10">
                            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white border-opacity-50">
                                <h2
                                    className="text-4xl font-bold text-red-900 mb-8 text-center"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    Proceso de Evaluación Paso a Paso
                                </h2>
                                <p
                                    className="text-gray-700 leading-relaxed mb-8 text-lg text-center max-w-4xl mx-auto"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Conoce exactamente cómo evaluamos cada texto desde que llega hasta la decisión final.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {evaluationProcess.map((step, index) => {
                                    const IconComponent = step.icon
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white border-opacity-50"
                                        >
                                            <div className="flex items-start space-x-8">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-red-200 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
                                                        <IconComponent className="w-8 h-8 text-red-900" />
                                                    </div>
                                                    {index < evaluationProcess.length - 1 && (
                                                        <div className="w-1 h-20 bg-gradient-to-b from-red-200 to-orange-200 mt-6 rounded-full" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-4 mb-4">
                                                        <h3 className="text-2xl font-bold text-red-900" style={{ fontFamily: "Playfair Display" }}>
                                                            Paso {step.step}: {step.title}
                                                        </h3>
                                                        <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                                                            {step.time}
                                                        </span>
                                                    </div>
                                                    <p
                                                        className="text-gray-700 leading-relaxed mb-4 text-lg"
                                                        style={{ fontFamily: "Crimson Text" }}
                                                    >
                                                        {step.description}
                                                    </p>
                                                    <div className="bg-gray-50 p-4 rounded-xl">
                                                        <p className="text-gray-600 text-sm italic" style={{ fontFamily: "Crimson Text" }}>
                                                            <strong>Detalles:</strong> {step.details}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-10 border-2 border-blue-200 shadow-xl">
                                <div className="flex items-center space-x-4 mb-6">
                                    <Info className="w-8 h-8 text-blue-600" />
                                    <h3 className="text-2xl font-bold text-blue-900" style={{ fontFamily: "Playfair Display" }}>
                                        Tiempo total de evaluación
                                    </h3>
                                </div>
                                <p className="text-blue-800 leading-relaxed text-lg" style={{ fontFamily: "Crimson Text" }}>
                                    En promedio, cada texto recibe entre 10-15 minutos de atención dedicada. Los textos que pasan a una
                                    segunda ronda de evaluación pueden recibir tiempo adicional para una consideración más profunda.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Tips Tab */}
                    {activeTab === "tips" && (
                        <div className="space-y-10">
                            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white border-opacity-50">
                                <h2
                                    className="text-4xl font-bold text-red-900 mb-8 text-center"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    Consejos para Mejorar tus Posibilidades
                                </h2>
                                <p
                                    className="text-gray-700 leading-relaxed mb-8 text-lg text-center max-w-4xl mx-auto"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Basados en nuestra experiencia editorial, estos consejos te ayudarán a preparar mejor tus textos.
                                </p>
                            </div>

                            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white border-opacity-50">
                                <h3
                                    className="text-3xl font-bold text-red-900 mb-8 text-center"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    Errores Comunes y Cómo Evitarlos
                                </h3>
                                <div className="space-y-6">
                                    {commonMistakes.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start space-x-6">
                                                <div
                                                    className={`w-4 h-4 rounded-full mt-2 flex-shrink-0 ${item.impact === "Alto"
                                                            ? "bg-red-500"
                                                            : item.impact === "Medio"
                                                                ? "bg-yellow-500"
                                                                : "bg-green-500"
                                                        }`}
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-3">
                                                        <h4 className="font-bold text-red-900 text-xl" style={{ fontFamily: "Playfair Display" }}>
                                                            {item.mistake}
                                                        </h4>
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${item.impact === "Alto"
                                                                    ? "bg-red-100 text-red-800"
                                                                    : item.impact === "Medio"
                                                                        ? "bg-yellow-100 text-yellow-800"
                                                                        : "bg-green-100 text-green-800"
                                                                }`}
                                                        >
                                                            Impacto {item.impact}
                                                        </span>
                                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                            {item.frequency} frecuencia
                                                        </span>
                                                    </div>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div>
                                                            <p className="text-gray-700 mb-2" style={{ fontFamily: "Crimson Text" }}>
                                                                <strong>Solución:</strong> {item.solution}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600 text-sm" style={{ fontFamily: "Crimson Text" }}>
                                                                <strong>Prevención:</strong> {item.prevention}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 border-2 border-green-200 shadow-xl">
                                    <div className="flex items-center space-x-3 mb-6">
                                        <PenTool className="w-8 h-8 text-green-600" />
                                        <h3 className="text-2xl font-bold text-green-900" style={{ fontFamily: "Playfair Display" }}>
                                            Antes de Enviar
                                        </h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {[
                                            "Lee tu texto en voz alta para detectar problemas de ritmo",
                                            "Revisa que cada palabra sea necesaria y potente",
                                            "Asegúrate de que el final sea contundente",
                                            "Verifica la conexión con el tema mensual (si aplica)",
                                            "Elimina repeticiones innecesarias",
                                            "Confirma la coherencia interna del texto",
                                        ].map((tip, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <ArrowRight className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                                <span className="text-green-800 leading-relaxed" style={{ fontFamily: "Crimson Text" }}>
                                                    {tip}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 border-2 border-blue-200 shadow-xl">
                                    <div className="flex items-center space-x-3 mb-6">
                                        <Star className="w-8 h-8 text-blue-600" />
                                        <h3 className="text-2xl font-bold text-blue-900" style={{ fontFamily: "Playfair Display" }}>
                                            Para Destacar
                                        </h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {[
                                            "Desarrolla una voz propia y reconocible",
                                            "Crea imágenes poéticas únicas y memorables",
                                            "Busca la conexión emocional auténtica",
                                            "Aporta una perspectiva fresca y personal",
                                            "Experimenta con el lenguaje de forma consciente",
                                            "Mantén la intensidad a lo largo del texto",
                                        ].map((tip, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                                <span className="text-blue-800 leading-relaxed" style={{ fontFamily: "Crimson Text" }}>
                                                    {tip}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-10 border-2 border-orange-200 text-center shadow-xl">
                                <h3 className="text-3xl font-bold text-red-900 mb-6" style={{ fontFamily: "Playfair Display" }}>
                                    ¿Listo para enviar tu obra?
                                </h3>
                                <p
                                    className="text-gray-700 mb-8 leading-relaxed text-lg max-w-3xl mx-auto"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Ahora que conoces nuestra rúbrica en detalle, te invitamos a compartir tu creatividad con nuestra
                                    comunidad literaria. Recuerda que cada texto es leído con respeto y atención.
                                </p>
                                <div className="flex justify-center">
                                    <a
                                        href="https://forms.gle/kYrYeduJbxJuuEQ79"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                                    >
                                        <Heart className="w-6 h-6" />
                                        Enviar mi texto
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
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

export default Rubric
