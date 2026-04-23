import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const RefundPolicyES: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        POLÍTICA DE REEMBOLSO Y CANCELACIÓN
                    </h1>
                    <p className="text-lg text-gray-600">
                        LINGUA TECHNOLOGIES INC
                    </p>
                </header>

                <main className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Filosofía general</h2>
                        <p className="text-gray-700 leading-relaxed">
                            En Lingua Technologies Inc. creemos en entregar valor real desde el primer momento. Al realizar un pago, el cliente reconoce que está adquiriendo acceso a tecnología, conocimiento especializado o tiempo profesional reservado exclusivamente para él — activos que tienen un costo real para la empresa una vez asignados. El acceso a cualquier producto o servicio implica la aceptación expresa de esta política.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Suscripciones al entrenador de voz con IA</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Los pagos por suscripción no son reembolsables una vez iniciado el periodo de acceso, independientemente del nivel de uso durante dicho periodo.</li>
                            <li>El cliente puede cancelar en cualquier momento desde su cuenta. El acceso permanece activo hasta el final del periodo ya pagado. La cancelación no genera derecho a reembolso parcial ni proporcional.</li>
                            <li>No se realizan reembolsos proporcionales por días no utilizados bajo ninguna circunstancia.</li>
                            <li>En caso de fallo técnico crítico atribuible exclusivamente a Lingua Technologies Inc., el cliente dispone de 15 días hábiles para reportarlo por escrito al correo corporativo. La empresa evaluará el caso y podrá ofrecer una extensión de acceso o crédito equivalente al tiempo afectado. No se considerarán fallos técnicos atribuibles a la conexión, dispositivo o configuración del cliente.</li>
                            <li>Las comisiones cobradas por procesadores de pago externos no son reembolsables bajo ninguna circunstancia, ya que son servicios ya ejecutados en el momento de la transacción.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Programas de capacitación privada</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Una vez confirmado el pago y reservado el espacio en la agenda, no se realizan reembolsos por cambio de opinión, desistimiento o circunstancias personales del cliente.</li>
                            <li>Si el cliente necesita cancelar, deberá notificarlo por escrito con un mínimo de 48 horas de anticipación para poder reagendar sin costo adicional. El reagendamiento está sujeto a disponibilidad y solo aplica una vez por programa contratado.</li>
                            <li>Cancelaciones con menos de 48 horas de anticipación no generan derecho a reembolso ni a reagendamiento gratuito.</li>
                            <li>Si el programa incluye acceso previo a materiales, guías o software, el reembolso queda anulado desde el momento en que dichos recursos han sido entregados, independientemente de si el cliente los utilizó.</li>
                            <li>La inasistencia sin aviso previo se considerará sesión realizada y no generará derecho a reembolso ni reagendamiento.</li>
                            <li>En caso de cancelación por parte de Lingua Technologies Inc., el cliente recibirá un reembolso completo o la opción de reagendar.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Otros productos y servicios digitales</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Cualquier producto digital que implique entrega de contenido, acceso a software o transferencia de materiales no es reembolsable una vez activado o entregado, independientemente del uso que el cliente haya hecho de dichos recursos.</li>
                            <li>Para servicios a medida o desarrollos específicos, los términos de reembolso se establecerán en el acuerdo particular firmado entre las partes. En ausencia de dicho acuerdo, aplica la presente política.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Criterios de excepción</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Las solicitudes de reembolso fuera de los supuestos expresamente contemplados en esta política solo podrán ser aprobadas en los siguientes casos, y siempre que exista evidencia verificable:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li>error de cobro duplicado imputable a la empresa o al procesador de pago</li>
                            <li>cobro indebido por fallo técnico atribuible directamente a Lingua Technologies Inc.</li>
                            <li>imposibilidad de acceso al servicio causada por un fallo interno del sistema</li>
                            <li>incumplimiento directo y verificable de la prestación del servicio contratado</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            No se considerarán motivos válidos de reembolso, entre otros:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li>desconocimiento de la política una vez realizada la compra</li>
                            <li>circunstancias personales del cliente</li>
                            <li>cambio de decisión o falta de uso del servicio</li>
                            <li>problemas de conexión, dispositivo o configuración del cliente</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Toda solicitud fuera de estos supuestos será rechazada conforme a esta política sin excepción.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Procedimiento de solicitud</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Toda solicitud de reembolso o cancelación debe realizarse por escrito al correo corporativo oficial: soporte@linguax-ai.com</li>
                            <li>Los acuerdos verbales, mensajes en redes sociales, chats informales o cualquier comunicación fuera del canal oficial no tienen validez para modificar los términos de esta política ni para iniciar un proceso de reembolso.</li>
                            <li>Lingua Technologies Inc. responderá toda solicitud formal en un plazo máximo de 5 días hábiles desde su recepción. Solicitudes incompletas o enviadas por canales no oficiales no iniciarán el plazo de respuesta.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Plazos y condiciones de reembolso</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Los reembolsos aprobados serán procesados en un plazo máximo de 15 días hábiles desde la confirmación oficial por parte de Lingua Technologies Inc.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            En casos donde el monto a reembolsar sea significativo, o el flujo operativo y los fondos destinados para reembolsos de la empresa así lo requieran, Lingua Technologies Inc. se reserva el derecho de fraccionar el reembolso en cuotas. Los montos y frecuencia de cada cuota estarán sujetos a la disponibilidad operativa de la empresa en el momento del reembolso.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            El cliente será notificado del plan de cuotas antes de su ejecución y deberá confirmarlo por escrito. El inicio del proceso de pago quedará condicionado a dicha confirmación.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            En todo caso, Lingua Technologies Inc. se compromete a mantener comunicación activa con el cliente durante todo el proceso hasta la liquidación total del reembolso.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            La presentación de disputas, chargebacks o reclamaciones ante terceros antes de agotar el procedimiento oficial establecido en esta política se considerará incumplimiento de los términos acordados y podrá resultar en la suspensión inmediata del acceso al servicio.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitación de responsabilidad</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lingua Technologies Inc. no será responsable por pérdidas indirectas, daños consecuentes, lucro cesante o cualquier perjuicio derivado del uso o imposibilidad de uso del servicio, más allá del monto efectivamente pagado por el cliente.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Jurisdicción y ley aplicable</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Esta política se rige por las leyes del Estado de Delaware, Estados Unidos, siendo los tribunales de dicha jurisdicción los competentes para resolver cualquier disputa derivada de la misma.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modificaciones a esta política</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lingua Technologies Inc. se reserva el derecho de actualizar esta política en cualquier momento. Los cambios aplicarán a nuevas transacciones y serán comunicados con al menos 7 días de anticipación a través del sitio web oficial o por correo electrónico.
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
            <Footer />
        </div>
    );
};

export default RefundPolicyES;