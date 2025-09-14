import "../styles/complement.css"

const Copyright = () => {
    return (
        <div className="min-h-screen w-full relative overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/legal/background.jpg)" }}
            />
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
                        Aviso de Derechos de Autor
                    </h1>

                    <p className="text-xs text-amber-800 mb-4 text-center" style={{ fontFamily: "Crimson Text" }}>
                        Fecha de última actualización: 12 de septiembre de 2025
                    </p>

                    <p className="text-xs text-gray-800 mb-6" style={{ fontFamily: "Crimson Text" }}>
                        En Margen Izquierdo respetamos la propiedad intelectual y los derechos de autor de nuestros usuarios. Este
                        aviso describe cómo manejamos las obras publicadas en nuestra plataforma y qué derechos tienen tanto los
                        usuarios como la revista.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        1. Propiedad de las obras
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        1.1 Los usuarios mantienen todos los derechos de autor de los textos, poemas, imágenes, audios y cualquier
                        obra artística que suban a Margen Izquierdo.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        1.2 Margen Izquierdo actúa únicamente como medio de difusión y promoción de las obras de los usuarios en la
                        web y redes sociales asociadas.
                    </p>

                    {/* Section 2 - Renamed and updated section title */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        2. Licencia otorgada a Margen Izquierdo
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        2.1 Al subir su obra, el usuario otorga a Margen Izquierdo una licencia no exclusiva, gratuita, revocable y
                        limitada para:
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        • Publicar la obra en el sitio web y en sus redes sociales asociadas.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        • Promover la obra dentro de la plataforma o en materiales relacionados con la revista (solo web y redes, no
                        otros fines comerciales).
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        2.2 La obra no puede ser modificada ni utilizada con fines comerciales por terceros sin el permiso explícito
                        del autor.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        2.3 Margen Izquierdo respetará siempre la autoría, indicando el nombre o seudónimo que el usuario decida
                        usar.
                    </p>

                    {/* Section 3 - Completely new section about work withdrawal */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        3. Retiro de obras
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        3.1 El usuario puede retirar su obra en cualquier momento contactando a la revista.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        3.2 Si la obra ya se encuentra publicada en web o redes sociales, se eliminará de forma futura; las copias
                        ya difundidas podrán permanecer como archivo histórico.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        3.3 En caso de denuncias de plagio:
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        • La obra se retirará temporalmente hasta verificar la situación.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        • Si la acusación es falsa, la obra se volverá a publicar.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        • Si la acusación es verdadera, la obra se retirará definitivamente.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        • El denunciante deberá proporcionar información básica (nombre, correo, edad) para resolver el conflicto.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        • Margen Izquierdo no se hace responsable legalmente de plagios o disputas entre usuarios, pero colaborará
                        de manera razonable para resolverlos.
                    </p>

                    {/* Section 4 - Renumbered from section 3, updated title */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        4. Responsabilidad del autor
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        4.1 El usuario es responsable del contenido que sube y debe asegurarse de que no infringe derechos de
                        terceros ni contiene material ilegal, ofensivo o inapropiado.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        4.2 Margen Izquierdo no asume responsabilidad por disputas legales derivadas del contenido publicado por los
                        usuarios.
                    </p>

                    {/* Section 5 - Renumbered from section 4, removed contact information */}
                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        5. Cambios en el aviso
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        5.1 Margen Izquierdo puede actualizar este Aviso de Derechos de Autor en cualquier momento, publicando la
                        versión actualizada en el sitio.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        5.2 El uso continuado de la plataforma después de dichos cambios constituye aceptación del nuevo aviso.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Copyright
