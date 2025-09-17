import { Heart, Feather, MapPin, Coffee, Users } from "lucide-react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: "Inicio", href: "/" },
        { name: "¿Quiénes Somos?", href: "/about" },
        { name: "Escritos Destacados", href: "/archive" },
        { name: "Enviar Escrito", href: "/submit" },
        { name: "Rúbrica", href: "/rubric" },
        { name: "Reglas", href: "/rules" },
        { name: "Preguntas Frecuentes", href: "/faq" },
        { name: "Contacto", href: "/contact" }
    ]

    const legalLinks = [
        { name: "Términos y Condiciones", href: "/terms" },
        { name: "Política de Privacidad", href: "/privacy" },
        { name: "Derechos de Autor", href: "/copyright" }
    ]

    return (
        <footer className="bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white relative overflow-hidden z-10">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-amber-300/10 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative">
                {/* Sección principal del footer */}
                <div className="px-6 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">

                            {/* Logo y descripción */}
                            <div className="lg:col-span-1 space-y-6 text-center lg:text-left">
                                <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-3 lg:space-y-0 lg:space-x-3">
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <img
                                            src="/logo2.png"
                                            alt="Margen Izquierdo Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold" style={{ fontFamily: "Playfair Display" }}>
                                            Margen Izquierdo
                                        </h3>
                                        <p className="text-amber-200 text-sm italic">
                                            Refugio Literario
                                        </p>
                                    </div>
                                </div>

                                <p className="text-amber-100/90 leading-relaxed justify-center lg:text-justify" style={{ fontFamily: "Crimson Text" }}>
                                    Un espacio donde las palabras encuentran su hogar y las almas sensibles comparten sus versos más íntimos.
                                </p>

                                <div className="flex items-center justify-center lg:justify-start space-x-2 text-amber-200">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">Latinoamérica</span>
                                </div>

                                <div className="flex items-center justify-center lg:justify-start space-x-2 text-amber-200">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-sm">Desde 2024</span>
                                </div>
                            </div>

                            {/* Enlaces rápidos */}
                            <div className="space-y-6 text-center">
                                <h4 className="text-xl font-bold text-amber-100 flex items-center justify-center" style={{ fontFamily: "Playfair Display" }}>
                                    <Coffee className="w-5 h-5 mr-2" />
                                    Navegación
                                </h4>
                                <ul className="space-y-1">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="text-amber-200/80 hover:text-amber-100 transition-colors duration-200 flex items-center group justify-center"
                                                style={{ fontFamily: "Crimson Text" }}
                                            >
                                                <Feather className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Información legal */}
                            <div className="space-y-6 text-center">
                                <h4 className="text-xl font-bold text-amber-100 flex items-center justify-center" style={{ fontFamily: "Playfair Display" }}>
                                    <Users className="w-5 h-5 mr-2" />
                                    Información Legal
                                </h4>
                                <ul className="space-y-1">
                                    {legalLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="text-amber-200/80 hover:text-amber-100 transition-colors duration-200 flex items-center group justify-center"
                                                style={{ fontFamily: "Crimson Text" }}
                                            >
                                                <Feather className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-amber-300/20"></div>

                {/* Sección de derechos reservados */}
                <div className="px-6 py-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                            <div className="flex items-center space-x-4 text-amber-200/80">
                                <p className="text-sm" style={{ fontFamily: "Crimson Text" }}>
                                    © {currentYear} Margen Izquierdo. Todos los derechos reservados.
                                </p>
                            </div>

                            <div className="flex flex-col items-end">
                                <p
                                    className="text-xs text-amber-200/60"
                                    style={{ fontFamily: "Crimson Text" }}
                                >
                                    Hecho con ❤️ para la comunidad literaria
                                </p>
                                <a
                                    href="https://instagram.com/miltoncruzwho"
                                    className="relative text-xs text-amber-200/50 font-[Crimson_Text] transition-colors duration-300 hover:text-amber-400"
                                >
                                    - @miltoncruzwho
                                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                                </a>

                            </div>

                        </div>

                        {/* Mensaje inspiracional */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-amber-200/70 italic" style={{ fontFamily: "Playfair Display" }}>
                                "Lo que otros dejan al margen, aquí es el centro"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer