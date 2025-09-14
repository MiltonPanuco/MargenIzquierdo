import "../styles/complement.css"

const Privacy = () => {
    return (
        <div className="min-h-screen w-full relative overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/legal/background.jpg)" }} />
            <div className="absolute inset-0 bg-black/80" />

            {/* Content */}
            <div className="relative z-10 p-4 md:p-8 lg:p-12 max-w-4xl mx-auto mt-25 mb-10">
                <div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg"
                    style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.9) 100%)",
                        boxShadow: "0 20px 40px rgba(185, 28, 28, 0.1), 0 8px 16px rgba(217, 119, 6, 0.1)",
                    }}
                >
                    {/* Main title */}
                    <h1 className="text-xs font-bold mb-2 text-red-900 text-center" style={{ fontFamily: "Playfair Display" }}>
                        Aviso de Privacidad
                    </h1>

                    <p className="text-xs text-amber-800 mb-4 text-center" style={{ fontFamily: "Crimson Text" }}>
                        Fecha de última actualización: 10 de septiembre de 2025
                    </p>

                    <p className="text-xs text-gray-800 mb-6" style={{ fontFamily: "Crimson Text" }}>
                        En Margen Izquierdo, la privacidad de nuestros usuarios es importante. Este Aviso de Privacidad describe
                        cómo recolectamos, usamos y protegemos sus datos personales cuando interactúa con nuestro sitio web.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        1. Datos que recolectamos
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        1.1 Datos de contacto en la web: nombre, correo electrónico y cualquier comentario o pregunta que el usuario
                        envíe a través del formulario de contacto.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        1.2 Datos para participación en la revista: cuando los usuarios envían un poema u obra a través de
                        formularios externos (por ejemplo, Google Forms), recolectamos:
                    </p>
                    <ul className="text-xs text-gray-800 mb-2 ml-4 list-disc" style={{ fontFamily: "Crimson Text" }}>
                        <li>Nombre</li>
                        <li>Correo electrónico</li>
                        <li>Nacionalidad</li>
                        <li>Texto del poema u obra artística</li>
                    </ul>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        1.3 Datos de uso del sitio: mediante Google Analytics recopilamos información sobre la interacción con la
                        página, como páginas visitadas, tiempo de permanencia y estadísticas generales.
                    </p>

                    {/* Section 2 */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        2. Uso de los datos
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        2.1 Los datos de contacto se usan únicamente para responder dudas o comentarios del usuario.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        2.2 Los datos de participación en la revista se usan para procesar la participación del usuario y publicar
                        su obra en la plataforma y redes sociales asociadas.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        2.3 Los datos estadísticos recopilados mediante Google Analytics se usan únicamente para mejorar la
                        experiencia y el rendimiento del sitio.
                    </p>

                    {/* Section 3 */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        3. Compartición de datos
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        3.1 El contenido sensible de los usuarios (nombre, correo, nacionalidad y poema) no se comparte con
                        terceros, salvo para fines de publicación de la obra en la revista.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        3.2 No se venden ni ceden datos personales a terceros para fines comerciales.
                    </p>

                    {/* Section 4 */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        4. Derechos del usuario
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        4.1 Los usuarios tienen derecho a acceder, rectificar o eliminar sus datos personales.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        4.2 Si un usuario desea que sus datos sean eliminados, puede contactarnos a través de:
                    </p>
                    <div className="text-xs text-gray-800 space-y-1 mb-4 ml-4" style={{ fontFamily: "Crimson Text" }}>
                        <p>
                            Correo:{" "}
                            <a
                                href="mailto:margenizquierdo.contact@gmail.com"
                                className="text-amber-800 hover:text-red-900 transition-colors"
                            >
                                margenizquierdo.contact@gmail.com
                            </a>
                        </p>
                        <p>
                            Instagram:{" "}
                            <a
                                href="https://instagram.com/margen_izquierdo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-800 hover:text-red-900 transition-colors"
                            >
                                @margen_izquierdo
                            </a>
                        </p>
                    </div>

                    {/* Section 5 */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        5. Seguridad de los datos
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        5.1 Implementamos medidas razonables para proteger la información del usuario y evitar accesos no
                        autorizados o divulgación indebida.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        5.2 Sin embargo, ningún sistema de transmisión de datos por Internet es 100% seguro.
                    </p>

                    {/* Section 6 */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        6. Cambios en el aviso
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        6.1 Margen Izquierdo puede actualizar este Aviso de Privacidad en cualquier momento, publicando la versión
                        actualizada en el sitio web.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        6.2 El uso continuado de la plataforma después de dichos cambios constituye aceptación del nuevo aviso.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Privacy