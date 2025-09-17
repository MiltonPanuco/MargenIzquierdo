"use client"

import { useState, useEffect } from "react"
import {
    Menu,
    X,
    Home,
    Users,
    FileText,
    Archive,
    Send,
    HelpCircle,
    Mail,
    Feather,
    Coffee,
    Star,
    Heart,
    ChevronRight,
} from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrollProgress, setScrollProgress] = useState(0)

    const navigate = useNavigate()
    const location = useLocation()

    // Verificar si estamos en páginas específicas 
    const isSubmitPage = location.pathname === "/submit"
    const isRulesPage = location.pathname === "/rules"
    const isFaqPage = location.pathname === "/faq"
    const isContactPage = location.pathname === "/contact"
    const isArchivePage = location.pathname === "/archive"
    const isTermsPage = location.pathname === "/terms"
    const isPrivacyPage = location.pathname === "/privacy"
    const isRubricPage = location.pathname === "/rubric"
    const isCopyrightPage = location.pathname === "/copyright"

    // Páginas con comportamiento especial
    const isSpecialPage =
        isSubmitPage ||
        isRulesPage ||
        isFaqPage ||
        isContactPage ||
        isArchivePage ||
        isTermsPage ||
        isPrivacyPage ||
        isRubricPage ||
        isCopyrightPage

    // Detectar scroll para mostrar/ocultar navbar y calcular progreso
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const windowHeight = window.innerHeight

            // Diferentes thresholds según la página
            const hideThreshold = isSpecialPage ? windowHeight * 0.5 : windowHeight * 1.2

            // Calcular progreso de scroll para transición suave
            const progress = Math.min(currentScrollY / (windowHeight * 0.8), 1)
            setScrollProgress(progress)

            // Lógica específica para las páginas especiales
            if (isSpecialPage) {
                if (currentScrollY < hideThreshold) {
                    setShowNavbar(true)
                } else if (currentScrollY < lastScrollY) {
                    setShowNavbar(true)
                } else {
                    setShowNavbar(false)
                    setIsMenuOpen(false)
                }
            } else {
                if (currentScrollY < hideThreshold) {
                    setShowNavbar(true)
                } else if (currentScrollY < lastScrollY) {
                    setShowNavbar(true)
                } else {
                    setShowNavbar(false)
                    setIsMenuOpen(false)
                }
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY, isSpecialPage])

    // Verificar si estamos en los primeros 100vh para el cambio de color
    const isInFirstViewport = lastScrollY < window.innerHeight * 0.8

    // Cerrar menú al hacer click fuera o scroll
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest(".navbar-container")) {
                setIsMenuOpen(false)
            }
        }

        const handleScrollClose = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("click", handleClickOutside)
        if (isMenuOpen) {
            window.addEventListener("scroll", handleScrollClose, { passive: true })
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.removeEventListener("click", handleClickOutside)
            window.removeEventListener("scroll", handleScrollClose)
            document.body.style.overflow = "unset"
        }
    }, [isMenuOpen])

    const navigationItems = [
        {
            name: "Inicio",
            href: "/",
            icon: Home,
            description: "Descubre nuevas voces poéticas",
            gradient: "from-red-200 to-red-300",
        },
        {
            name: "Quiénes somos",
            href: "/about",
            icon: Users,
            description: "Conoce nuestra historia y misión",
            gradient: "from-amber-200 to-amber-300",
        },
        {
            name: "Escritos destacados",
            href: "/archive",
            icon: Archive,
            description: "Explora ediciones anteriores",
            gradient: "from-orange-200 to-orange-300",
        },
        {
            name: "Enviar escrito",
            href: "/submit",
            icon: Send,
            description: "Comparte tu obra con nosotros",
            gradient: "from-yellow-200 to-yellow-300",
        },
        {
            name: "Rúbrica",
            href: "/rubric",
            icon: FileText,
            description: "Tener en cuenta...",
            gradient: "from-red-100 to-orange-200",
        },
        {
            name: "Reglas",
            href: "/rules",
            icon: FileText,
            description: "Guías para colaboradores",
            gradient: "from-red-200 to-pink-300",
        },
        {
            name: "Preguntas Frecuentes",
            href: "/faq",
            icon: HelpCircle,
            description: "Resolvemos tus dudas",
            gradient: "from-amber-200 to-orange-300",
        },
        {
            name: "Contacto",
            href: "/contact",
            icon: Mail,
            description: "Conecta con nuestro equipo",
            gradient: "from-orange-200 to-red-300",
        },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // Función para generar estilos de fondo con transición suave
    const getNavbarBackground = () => {
        // Si estamos en páginas especiales (submit, rules, faq, contact, archive), mostrar directamente el color
        if (isSpecialPage) {
            return "linear-gradient(135deg, rgba(153, 27, 27, 0.95), rgba(185, 28, 28, 0.95), rgba(180, 83, 9, 0.95))"
        }

        const opacity = Math.min(scrollProgress * 1.3, 1)

        if (scrollProgress === 0) {
            return "rgba(0, 0, 0, 0.1)"
        } else if (scrollProgress >= 1) {
            return "linear-gradient(135deg, rgba(153, 27, 27, 0.95), rgba(185, 28, 28, 0.95), rgba(180, 83, 9, 0.95))"
        } else {
            const gradientOpacity = opacity * 0.95
            return `linear-gradient(135deg, 
                rgba(153, 27, 27, ${gradientOpacity}), 
                rgba(185, 28, 28, ${gradientOpacity}), 
                rgba(180, 83, 9, ${gradientOpacity})), 
                rgba(0, 0, 0, ${0.1 * (1 - gradientOpacity)})`
        }
    }

    return (
        <>
            {/* Navbar - z-20 (Toggle Tab level) */}
            <nav
                className={`fixed top-0 left-0 right-0 transition-all duration-700 ease-out navbar-container backdrop-blur-lg ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${isMenuOpen ? "z-20" : "z-20"}`}
                style={{
                    background: getNavbarBackground(),
                    boxShadow:
                        scrollProgress > 0.3 || isSpecialPage
                            ? "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(185, 28, 28, 0.1)"
                            : "none",
                }}
            >
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-18">
                        {/* Logo */}
                        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => navigate("/home")}>
                            <div className="relative">
                                <img
                                    src="/logo2.png"
                                    alt="Margen Izquierdo Logo"
                                    className="w-11 h-11 md:w-12 md:h-12 object-contain transition-all duration-500 ease-out group-hover:scale-105 drop-shadow-lg"
                                />
                                <div
                                    className={`absolute -top-1 -right-1 w-4 h-4 rounded-full transition-all duration-500 ease-out ${isInFirstViewport && !isSpecialPage
                                        ? "bg-amber-300/60 backdrop-blur-sm animate-pulse"
                                        : "bg-gradient-to-br from-yellow-300 to-amber-400 animate-pulse shadow-lg"
                                        }`}
                                ></div>
                            </div>
                            <div>
                                <h1
                                    className={`text-xl md:text-2xl font-bold ${isInFirstViewport && !isSpecialPage ? "text-white drop-shadow-xl" : "text-amber-50 drop-shadow-lg"
                                        }`}
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    Margen Izquierdo
                                </h1>
                            </div>
                        </div>

                        {/* Hamburger Button */}
                        <div
                            onClick={toggleMenu}
                            className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl transition-all duration-500 ease-out cursor-pointer select-none group ${isMenuOpen
                                ? isInFirstViewport && !isSpecialPage
                                    ? "bg-white/30 backdrop-blur-md border border-white/40 shadow-xl scale-105"
                                    : "bg-amber-100 border border-amber-200 shadow-xl scale-105"
                                : isInFirstViewport && !isSpecialPage
                                    ? "bg-white/15 backdrop-blur-md border border-white/25 shadow-lg hover:bg-white/25 hover:shadow-xl hover:scale-105 active:scale-95"
                                    : "bg-amber-50/80 border border-amber-200/50 shadow-lg hover:bg-amber-100 hover:shadow-xl hover:scale-105 active:scale-95"
                                }`}
                            role="button"
                            tabIndex={0}
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
                                    toggleMenu()
                                }
                            }}
                        >
                            {isMenuOpen ? (
                                <X
                                    size={26}
                                    className={`transition-all duration-500 ease-out pointer-events-none ${isInFirstViewport && !isSpecialPage ? "text-white drop-shadow-lg" : "text-red-900"}`}
                                />
                            ) : (
                                <Menu
                                    size={26}
                                    className={`transition-all duration-500 ease-out pointer-events-none group-hover:rotate-180 ${isInFirstViewport && !isSpecialPage ? "text-white drop-shadow-lg" : "text-red-900"}`}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay - z-20 (Toggle Tab level) */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Sidebar - z-30 (Highest level) */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 z-30 transform transition-transform duration-500 ease-out shadow-2xl overflow-y-auto ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header del menú */}
                <div className="relative p-6 bg-gradient-to-br from-red-800 via-red-700 to-amber-800 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                    <div className="relative z-10">
                        <button
                            onClick={toggleMenu}
                            className="absolute top-0 right-0 p-3 rounded-2xl bg-white/15 hover:bg-white/25 transition-all duration-300 text-white backdrop-blur-sm group"
                            aria-label="Cerrar menú"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <Feather className="w-8 h-8 text-white drop-shadow-lg" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "Playfair Display" }}>
                                    Navegación
                                </h2>
                                <div className="flex items-center space-x-2 mt-1">
                                    <Coffee className="w-4 h-4 text-amber-200" />
                                    <Star className="w-3 h-3 text-yellow-200" />
                                    <Heart className="w-4 h-4 text-red-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lista de navegación */}
                <nav className="flex-1 px-4 py-6 space-y-3">
                    {navigationItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className="group flex items-center p-4 rounded-2xl bg-white/70 hover:bg-white/90 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg border border-white/50 hover:border-amber-200/50 backdrop-blur-sm"
                                style={{
                                    animationDelay: `${index * 80}ms`,
                                    animation: isMenuOpen ? "slideInRight 0.6s ease-out forwards" : "none",
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div
                                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}
                                >
                                    <Icon className="w-6 h-6 text-red-900 group-hover:text-red-800" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="font-bold text-gray-900 group-hover:text-red-900 transition-colors text-base truncate"
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        {item.name}
                                    </h3>
                                    <p
                                        className="text-sm text-gray-600 italic group-hover:text-gray-700 truncate leading-relaxed"
                                        style={{ fontFamily: "Crimson Text" }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                                    <ChevronRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        )
                    })}
                </nav>

                {/* Footer del menú */}
                <div className="p-6 bg-gradient-to-r from-amber-100/80 to-red-100/80 border-t border-amber-200/30 backdrop-blur-sm">
                    <div className="text-center">
                        <p className="text-sm text-gray-700 italic mb-3 leading-relaxed" style={{ fontFamily: "Crimson Text" }}>
                            "Lo que otros dejan al margen, aquí cobra vida"
                        </p>
                        <div className="flex justify-center space-x-3 mb-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse shadow-sm"></div>
                            <div
                                className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-sm"
                                style={{ animationDelay: "0.3s" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-sm"
                                style={{ animationDelay: "0.6s" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilos para las animaciones */}
            <style>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .backdrop-blur-lg {
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                }
                
                .backdrop-blur-md {
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
                
                .backdrop-blur-sm {
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }
            `}</style>
        </>
    )
}

export default Navbar
