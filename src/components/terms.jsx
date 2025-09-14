import "../styles/complement.css"

const Terms = () => {
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
                    <h1 className="text-xs font-bold mb-2 text-red-900 text-center" style={{ fontFamily: "Playfair Display" }}>
                        Términos y Condiciones
                    </h1>

                    <p className="text-xs text-amber-800 mb-4 text-center" style={{ fontFamily: "Crimson Text" }}>
                        Fecha de última actualización: 12 de septiembre de 2025
                    </p>

                    <p className="text-xs text-gray-800 mb-6" style={{ fontFamily: "Crimson Text" }}>
                        Al acceder o utilizar Margen Izquierdo, usted acepta cumplir y estar sujeto a los siguientes términos y
                        condiciones. Si no está de acuerdo con alguno de estos términos, le solicitamos no usar nuestro sitio.
                    </p>

                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        1. Uso de la plataforma
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        1.1 Margen Izquierdo permite a los usuarios subir textos literarios, audios opcionales, imágenes y obras
                        artísticas mediante formularios externos (por ejemplo, Google Forms), así como consumir el contenido
                        disponible en la plataforma.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        1.2 El uso de la plataforma es gratuito para todos los usuarios.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        1.3 La plataforma es solo digital, disponible en la web y redes sociales asociadas.
                    </p>

                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        2. Edad mínima y autorización
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        2.1 La plataforma está dirigida a usuarios de todas las edades.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        2.2 Los menores de 18 años deben contar con autorización de un padre o tutor legal para subir contenido.
                        Esta autorización se asumirá mediante la información proporcionada en el formulario de envío.
                    </p>

                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        3. Propiedad intelectual
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        3.1 Los usuarios mantienen los derechos de autor de las obras que suben a Margen Izquierdo.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        3.2 Al subir contenido, el usuario otorga a Margen Izquierdo una licencia no exclusiva, gratuita y limitada
                        para publicar y difundir la obra en la web y redes sociales asociadas, respetando siempre la autoría.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        3.3 La revista no se responsabiliza de posibles conflictos de propiedad intelectual entre usuarios, pero
                        colaborará de manera razonable para resolver denuncias de plagio, siguiendo el procedimiento descrito en el
                        Aviso de Derechos de Autor.
                    </p>

                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        4. Contenido de los usuarios
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        4.1 Los usuarios son responsables del contenido que suben. Deben asegurarse de que no infringe derechos de
                        terceros ni contiene material ilegal, ofensivo o inapropiado.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        4.2 Margen Izquierdo se reserva el derecho de revisar, modificar o eliminar contenido que considere
                        inapropiado o ilegal, aunque no garantiza la detección de todos los casos.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        4.3 La plataforma no se hace responsable de cualquier daño, disputa o reclamación derivada del contenido
                        subido por los usuarios.
                    </p>

                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        5. Cambios en los términos
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        5.1 Margen Izquierdo puede modificar estos Términos en cualquier momento, publicando la versión actualizada
                        en el sitio.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        5.2 El uso continuado de la plataforma después de dichos cambios constituye aceptación de los nuevos
                        términos.
                    </p>

                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        6. Limitación de responsabilidad
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        6.1 La plataforma se proporciona "tal cual" y no garantiza disponibilidad continua ni precisión absoluta del
                        contenido.
                    </p>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        6.2 Margen Izquierdo no será responsable de daños directos, indirectos, incidentales o consecuentes
                        derivados del uso de la plataforma, incluyendo pérdidas de datos o problemas técnicos.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        6.3 En caso de denuncias de plagio o conflictos de derechos de autor, Margen Izquierdo solo ayudará a
                        mediar, pero no asume responsabilidad legal.
                    </p>

                    <h2 className="text-xs font-semibold mb-2 text-red-900" style={{ fontFamily: "Playfair Display" }}>
                        7. Jurisdicción
                    </h2>
                    <p className="text-xs text-gray-800 mb-2" style={{ fontFamily: "Crimson Text" }}>
                        7.1 Estos términos se rigen por las leyes del país de operación de Margen Izquierdo.
                    </p>
                    <p className="text-xs text-gray-800 mb-4" style={{ fontFamily: "Crimson Text" }}>
                        7.2 Cualquier disputa derivada de estos términos se resolverá en los tribunales competentes del país de
                        operación.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Terms
