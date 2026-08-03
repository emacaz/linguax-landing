import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicyES: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        POLÍTICA DE PRIVACIDAD
                    </h1>
                    <p className="text-lg text-gray-600">
                        LINGUA TECHNOLOGIES INC
                    </p>
                </header>

                <main className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Quién es responsable de tus datos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lingua Technologies Inc. ("LinguaX AI", "nosotros"), una corporación constituida en el Estado de Delaware, Estados Unidos, es responsable del tratamiento de los datos personales que recopilamos a través de linguax-ai.com y de la aplicación del entrenador (app.linguax-ai.com). Esta política aplica a usuarios de prueba gratuita, usuarios de pago individuales, y usuarios de cuentas empresariales (B2B).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Qué datos recopilamos</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li><strong>Datos de cuenta:</strong> nombre y dirección de correo electrónico, ya sea que te registres mediante enlace de acceso sin contraseña (prueba gratuita / plan individual) o mediante contraseña y clave de licencia (cuentas empresariales).</li>
                            <li><strong>Audio y contenido de las conversaciones:</strong> al usar el entrenador, tu voz se transmite en tiempo real a nuestro proveedor de IA para generar la conversación, transcripciones, pistas de vocabulario, correcciones y traducciones. No almacenamos grabaciones de audio de forma permanente en nuestros propios servidores; el procesamiento de voz lo realiza el proveedor de IA descrito en la sección 4.
                            </li>
                            <li><strong>Datos de uso del entrenador:</strong> idioma objetivo, contexto de entrenamiento que escribes, preferencias de modo (Normal/Human Mode), e interacciones con pistas y traducciones.</li>
                            <li><strong>Datos de pago:</strong> no almacenamos números de tarjeta. Los pagos se procesan directamente por Stripe; nosotros conservamos únicamente identificadores de cliente y suscripción necesarios para administrar tu cuenta.</li>
                            <li><strong>Datos técnicos y de navegación:</strong> dirección IP (usada para detectar tu región al calcular precios y para prevenir abuso del período de prueba), idioma del navegador, y datos de uso del sitio recopilados por Google Analytics y Microsoft Clarity (ver sección 5).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Para qué usamos tus datos</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Prestar el servicio: mantener sesiones de conversación en tiempo real, generar pistas, correcciones y traducciones contextuales.</li>
                            <li>Administrar tu cuenta: autenticación, envío de enlaces de acceso, gestión de tu suscripción y facturación.</li>
                            <li>Comunicarnos contigo: confirmaciones de cuenta, avisos sobre tu prueba gratuita, soporte, y — solo si lo consientes expresamente al registrarte — comunicaciones de producto y marketing.</li>
                            <li>Prevenir abuso: aplicar límites diarios de nuevas pruebas gratuitas y evitar el uso indebido del período de prueba.</li>
                            <li>Mejorar el producto: entender patrones de uso agregados a través de Google Analytics y Microsoft Clarity.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Con quién compartimos tus datos</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            No vendemos tus datos personales. Los compartimos únicamente con los siguientes proveedores, en la medida necesaria para operar el servicio:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li><strong>Google Cloud / Firebase:</strong> autenticación de cuenta, base de datos (Firestore) y funciones de servidor que hacen funcionar la aplicación.</li>
                            <li><strong>Google Gemini API:</strong> procesa tu voz y texto en tiempo real durante las sesiones de entrenamiento para generar las respuestas del entrenador, transcripciones, pistas y traducciones.</li>
                            <li><strong>Brevo:</strong> envío de correos transaccionales (enlaces de acceso) y, si diste tu consentimiento, comunicaciones de marketing.</li>
                            <li><strong>Stripe:</strong> procesamiento de pagos y gestión de suscripciones. Stripe recibe y almacena los datos de tu tarjeta directamente; nosotros no tenemos acceso a ellos.</li>
                            <li><strong>Google Analytics y Microsoft Clarity:</strong> analítica de uso del sitio web y grabación de sesiones anonimizadas con fines de mejora de producto.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies y tecnologías similares</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Nuestro sitio web utiliza las siguientes cookies y tecnologías de seguimiento:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li><strong>Google Analytics:</strong> mide visitas y comportamiento agregado en el sitio.</li>
                            <li><strong>Microsoft Clarity:</strong> graba sesiones de navegación (movimientos de cursor, clics) y genera mapas de calor para entender cómo se usa el sitio.</li>
                            <li><strong>Cookie funcional de oferta:</strong> en la página de ofertas para profesionales independientes, guardamos una cookie técnica que recuerda el tiempo restante de una promoción durante 7 días.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Transferencias internacionales de datos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nuestra infraestructura y nuestros proveedores están basados principalmente en Estados Unidos. Si accedes a nuestros servicios desde la Unión Europea, el Espacio Económico Europeo, o cualquier otra región con normativa de protección de datos propia, tus datos serán transferidos y procesados en Estados Unidos y en los países donde operan nuestros proveedores (sección 4).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cuánto tiempo conservamos tus datos</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Conservamos los datos de tu cuenta mientras esté activa. Si solicitas la eliminación de tu cuenta, eliminaremos o anonimizaremos tus datos personales en un plazo razonable, salvo que debamos conservar cierta información por obligaciones legales, fiscales o para resolver disputas (por ejemplo, registros de facturación).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Tus derechos</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Dependiendo de tu ubicación, puedes tener derecho a:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li>Acceder a los datos personales que tenemos sobre ti.</li>
                            <li>Solicitar la corrección de datos inexactos.</li>
                            <li>Solicitar la eliminación de tu cuenta y tus datos personales.</li>
                            <li>Oponerte al uso de tus datos para marketing.</li>
                            <li>Retirar tu consentimiento en cualquier momento, sin afectar la licitud del tratamiento previo.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Para ejercer cualquiera de estos derechos, escríbenos a hola@linguax-ai.com.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Menores de edad</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nuestros servicios no están dirigidos a menores de 16 años y no recopilamos conscientemente datos de menores de esa edad. Si crees que un menor nos ha proporcionado datos personales, contáctanos para eliminarlos.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Seguridad</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Aplicamos medidas técnicas y organizativas razonables para proteger tus datos, incluyendo autenticación segura y cifrado en tránsito. Ningún sistema es completamente seguro; no podemos garantizar la seguridad absoluta de la información transmitida a través de internet.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Cambios a esta política</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Podemos actualizar esta política ocasionalmente. Los cambios significativos serán comunicados a través del sitio web oficial o por correo electrónico antes de su entrada en vigor.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contacto</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Para cualquier pregunta sobre esta política o sobre el tratamiento de tus datos, escríbenos a hola@linguax-ai.com.
                        </p>
                    </section>
                </main>

                <div className="text-center mt-12">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                    >
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
            <Footer light />
        </div>
    );
};

export default PrivacyPolicyES;
