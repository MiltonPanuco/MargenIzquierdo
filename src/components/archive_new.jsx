import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, BookOpen, User, Quote, X } from "lucide-react"
import { editions } from "../data"
import "../styles/complement.css"

const Archive = () => {
    const [selectedEdition, setSelectedEdition] = useState("septiembre-2025")
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [selectedPoem, setSelectedPoem] = useState(null)

    const currentEdition = editions[selectedEdition]

    useEffect(() => {
        if (selectedPoem || sidebarOpen) {
            document.body.style.overflow = "hidden"
            document.body.style.paddingRight = "var(--scrollbar-width, 0px)"
        } else {
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""
        }

        return () => {
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""
        }
    }, [selectedPoem, sidebarOpen])

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
        document.documentElement.style.setProperty("--scrollbar-width", `${scrollBarWidth}px`)
    }, [])

    const PoemCard = ({ poem }) => {
        return (
            <div className="group relative bg-gradient-to-br from-white/90 via-amber-50/80 to-orange-50/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-200/30 overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-200/40 to-transparent rounded-bl-full"></div>

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            <h3
                                className="text-2xl md:text-3xl font-bold text-red-900 mb-3 group-hover:text-red-800 transition-colors"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                {poem.title}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-amber-500 rounded-full flex items-center justify-center mr-2">
                                        <User className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-semibold text-red-800">{poem.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg mb-6">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-l-4 border-red-300">
                            <p
                                className="text-gray-800 leading-relaxed whitespace-pre-line italic text-base"
                                style={{ fontFamily: "Crimson Text" }}
                            >
                                {poem.author_info}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-red-200/50">
                        <button
                            onClick={() => setSelectedPoem(poem)}
                            className="group/btn bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <BookOpen className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                            Leer Escrito
                        </button>
                        <div className="flex items-center text-xs text-gray-500">
                            <Quote className="w-3 h-3 mr-1" />
                            <span>{poem.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const PoemModal = ({ poem, onClose }) => {
        if (!poem) return null

        const handleClose = () => {
            setSelectedPoem(null)
        }

        const handleOverlayClick = (e) => {
            if (e.target === e.currentTarget) {
                handleClose()
            }
        }

        return (
            <div
                className="fixed inset-0 overlay z-50 flex items-center justify-center p-2 md:p-4"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    backdropFilter: "blur(8px)",
                    overflowY: "hidden",
                }}
                onClick={handleOverlayClick}
            >
                <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl max-w-5xl w-full max-h-[95vh] shadow-2xl border border-red-300/50 overflow-hidden transform scale-100 transition-all duration-300 relative">
                    {/* Decorative border pattern */}
                    <div className="absolute inset-0 rounded-3xl border-4 border-gradient-to-br from-red-200/30 via-amber-200/30 to-orange-200/30 pointer-events-none"></div>

                    <div className="relative bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white overflow-hidden">
                        <div className="relative z-10 p-6 text-center">
                            <h2
                                className="text-2xl md:text-3xl font-bold mb-3 text-center leading-tight"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                {poem.title}
                            </h2>

                            <div className="flex justify-center">
                                <div className="flex items-center space-x-4 text-amber-200/80">
                                    <div className="flex items-center">
                                        <User className="w-3 h-3 mr-1" />
                                        <span className="font-medium text-xs">{poem.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs mr-1">🌍</span>
                                        <span className="text-xs">{poem.nationality || "México"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Elegant close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 bg-gradient-to-br from-amber-100/90 via-orange-100/90 to-yellow-100/90 hover:from-amber-200 hover:via-orange-200 hover:to-yellow-200 text-red-800 hover:text-red-900 rounded-full border border-amber-300/50 hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300 group z-50 backdrop-blur-sm hover:scale-110"
                            type="button"
                        >
                            <X className="w-4 h-4 group-hover:rotate-90 transition-all duration-300" />
                        </button>
                    </div>

                    {/* Content area with enhanced poem display */}
                    <div className="overflow-y-auto max-h-[75vh] custom-scrollbar">
                        <div className="p-8 md:p-16 relative">
                            {/* Large decorative quotes */}
                            <div className="absolute top-8 left-8 opacity-20">
                                <Quote className="w-20 h-20 text-red-300 transform rotate-180" />
                            </div>
                            <div className="absolute bottom-8 right-8 opacity-20">
                                <Quote className="w-20 h-20 text-red-300" />
                            </div>

                            {/* Poem content with elegant frame */}
                            <div className="relative z-10 max-w-4xl mx-auto">
                                <div className="bg-gradient-to-br from-white/80 via-amber-50/60 to-orange-50/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-inner border-2 border-red-200/30 min-h-[400px] flex items-center relative overflow-hidden">
                                    {/* Decorative corner flourishes */}
                                    <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-red-300/50 rounded-tl-xl"></div>
                                    <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-red-300/50 rounded-tr-xl"></div>
                                    <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-red-300/50 rounded-bl-xl"></div>
                                    <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-red-300/50 rounded-br-xl"></div>

                                    <div
                                        className="w-full text-lg md:text-xl text-gray-800 leading-relaxed whitespace-pre-line text-center relative z-10"
                                        style={{
                                            fontFamily: "Crimson Text",
                                            lineHeight: "1.9",
                                            letterSpacing: "0.02em",
                                        }}
                                    >
                                        {poem.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
            {/* Modal */}
            <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gradient-to-b from-red-950 via-red-900 to-amber-900 text-white z-50 transition-transform duration-500 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} w-96 shadow-2xl border-r border-red-700/50`}
            >
                {/* Elegant header */}
                <div className="p-8 border-b border-red-700/50 bg-gradient-to-r from-red-900/50 to-amber-900/50 backdrop-blur-sm relative overflow-hidden">
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        ></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold" style={{ fontFamily: "Playfair Display" }}>
                                        Archivo
                                    </h2>
                                    <p className="text-amber-200 text-sm">Ediciones Literarias</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="p-2 hover:bg-red-800/50 rounded-xl transition-all duration-300 hover:scale-110 border border-red-700/30 hover:border-red-600"
                            >
                                <ChevronLeft className="w-6 h-6 text-amber-200" />
                            </button>
                        </div>

                        {/* Decorative divider */}
                        <div className="flex items-center justify-center">
                            <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-full"></div>
                        </div>
                    </div>
                </div>

                {/* Enhanced editions list */}
                <div className="overflow-y-auto h-full pb-20 custom-scrollbar">
                    {Object.entries(editions).map(([key, edition]) => (
                        <button
                            key={key}
                            onClick={() => {
                                setSelectedEdition(key)
                                setSidebarOpen(false)
                            }}
                            className={`w-full text-left p-4 border-b border-red-800/30 hover:bg-gradient-to-r hover:from-red-800/50 hover:to-amber-800/30 transition-all duration-300 group relative overflow-hidden ${selectedEdition === key
                                    ? "bg-gradient-to-r from-red-800/70 to-amber-800/50 border-l-4 border-l-amber-400 shadow-lg"
                                    : ""
                                }`}
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3
                                            className="font-bold text-lg mb-1 group-hover:text-amber-200 transition-colors"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            {edition.title}
                                        </h3>
                                        <p
                                            className="text-amber-200/80 text-xs mb-2 leading-relaxed"
                                            style={{ fontFamily: "Crimson Text" }}
                                        >
                                            {edition.subtitle}
                                        </p>

                                        {/* Edition stats */}
                                        <div className="flex items-center space-x-4 text-xs">
                                            <div className="flex items-center bg-red-800/30 px-2 py-1 rounded-full border border-red-700/50">
                                                <BookOpen className="w-3 h-3 mr-1 text-amber-300" />
                                                <span className="text-red-200">{edition.poems.length} escritos</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-4 flex items-center">
                                        <ChevronRight
                                            className={`w-4 h-4 text-amber-300 transition-transform duration-300 ${selectedEdition === key ? "rotate-90" : "group-hover:translate-x-1"}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Sidebar Toggle Tab */}
            <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-20">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="bg-gradient-to-b from-red-900 to-red-800 text-white p-3 rounded-r-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-red-700"
                    style={{ writingMode: "vertical-lr", backgroundColor: "#7f1d1d" }}
                >
                    <div className="flex flex-col items-center space-y-2">
                        <BookOpen className="w-5 h-5 text-amber-100" />
                        <span className="text-sm font-medium tracking-wide text-amber-100" style={{ fontFamily: "serif" }}>
                            ARCHIVO
                        </span>
                    </div>
                </button>
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        backdropFilter: "blur(8px)",
                    }}
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="relative z-10">
                {/* Header */}
                <header className="relative overflow-hidden bg-gradient-to-br from-red-900/10 via-amber-900/5 to-orange-900/10">
                    <div className="relative z-10 text-center px-6 py-20 md:py-32">
                        <div className="max-w-6xl mx-auto">
                            {/* Main title section with enhanced styling */}
                            <div className="text-center mb-20">
                                <h1
                                    className="text-6xl md:text-8xl font-bold text-red-900 mb-8 tracking-tight"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    Archivo
                                    <span className="block text-5xl md:text-7xl text-red-700 mt-2">Literario</span>
                                </h1>

                                <div className="max-w-2xl mx-auto">
                                    <p
                                        className="text-xl md:text-2xl text-gray-700 italic leading-relaxed"
                                        style={{ fontFamily: "Crimson Text" }}
                                    >
                                        Explora las ediciones pasadas y revive cada verso compartido por nuestra comunidad de poetas y
                                        escritores.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-16">
                                <div className="relative bg-gradient-to-br from-white/80 via-amber-50/80 to-orange-50/80 backdrop-blur-lg rounded-3xl p-10 md:p-12 shadow-2xl border border-red-200/50 max-w-4xl mx-auto">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-amber-600 rounded-full mb-6 shadow-lg">
                                            <BookOpen className="w-8 h-8 text-white" />
                                        </div>

                                        <h2
                                            className="text-4xl md:text-6xl font-light mb-6 text-red-800 tracking-wide"
                                            style={{ fontFamily: "Playfair Display" }}
                                        >
                                            {currentEdition.title}
                                        </h2>

                                        <div className="w-20 h-px bg-gradient-to-r from-red-400 to-amber-400 mx-auto mb-6"></div>

                                        <p
                                            className="text-2xl md:text-3xl text-red-600 italic mb-6 font-light"
                                            style={{ fontFamily: "Crimson Text" }}
                                        >
                                            {currentEdition.subtitle}
                                        </p>

                                        <div className="relative">
                                            <p
                                                className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8"
                                                style={{ fontFamily: "Crimson Text" }}
                                            >
                                                {currentEdition.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="px-6 py-16 md:py-24 bg-gradient-to-b from-transparent to-red-50/30">
                    <div className="max-w-7xl mx-auto">
                        {/* Section header */}
                        <div className="text-center mb-16">
                            <h2
                                className="text-4xl md:text-5xl font-bold text-red-900 mb-4"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                Colección Poética
                            </h2>
                            <p className="text-xl text-gray-700 max-w-2xl mx-auto italic" style={{ fontFamily: "Crimson Text" }}>
                                Cada verso cuenta una historia, cada poema revela un alma
                            </p>
                        </div>

                        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-2">
                            {currentEdition.poems.map((poem) => (
                                <PoemCard key={poem.id} poem={poem} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Archive
