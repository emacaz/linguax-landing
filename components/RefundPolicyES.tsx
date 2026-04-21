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
                            En Lingua Technologies Inc. creemos en entregar valor real desde el primer momento. Al realizar un pago, el cliente reconoce que está adquiriendo acceso a tecnología, conocimiento especializado o tiempo profesional reservado exclusivamente para él — activos que tienen un costo real para la empresa una vez asignados.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Suscripciones al entrenador de voz con IA</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Los pagos por suscripción no son reembolsables una vez iniciado el periodo de acceso.</li>
                            <li>El cliente puede cancelar en cualquier momento desde su cuenta. El acceso permanece activo hasta el final del periodo ya pagado.</li>
                            <li>No se realizan reembolsos proporcionales por días no utilizados.</li>
                            <li>En caso de fallo técnico crítico atribuible a Lingua Technologies Inc., el cliente dispone de 15 días hábiles para reportarlo. La empresa evaluará el caso y podrá ofrecer una extensión de acceso o crédito equivalente al tiempo afectado.</li>
                            <li>Las comisiones cobradas por procesadores de pago externos no son reembolsables bajo ninguna circunstancia, ya que son servicios ya ejecutados en el momento de la transacción.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Programas de capacitación privada</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Una vez confirmado el pago y reservado el espacio en la agenda, no se realizan reembolsos por cambio de opinión, desistimiento o circunstancias personales del cliente.</li>
                            <li>Si el cliente necesita cancelar, deberá notificarlo con un mínimo de 48 horas de anticipación para poder reagendar sin costo adicional.</li>
                            <li>Cancelaciones con menos de 48 horas de anticipación no generan derecho a reembolso ni a reagendamiento gratuito.</li>
                            <li>Si el programa incluye acceso previo a materiales, guías o software, el reembolso queda anulado desde el momento en que dichos recursos han sido entregados.</li>
                            <li>En caso de cancelación por parte de Lingua Technologies Inc., el cliente recibirá un reembolso completo o la opción de reagendar.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Otros productos y servicios digitales</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Cualquier producto digital que implique entrega de contenido, acceso a software o transferencia de materiales no es reembolsable una vez activado o entregado.</li>
                            <li>Para servicios a medida o desarrollos específicos, los términos de reembolso se establecerán en el acuerdo particular firmado entre las partes.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Excepciones por desconocimiento de la política</h2>
                        <p className="text-gray-700 leading-relaxed">
                            En casos donde el cliente no haya tenido acceso previo a esta política antes de realizar su pago, Lingua Technologies Inc. evaluará la solicitud de reembolso de forma individual. De aprobarse, el reembolso se procesará conforme a lo establecido en el punto 7 de esta política.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Procedimiento de solicitud</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Toda solicitud de reembolso o cancelación debe realizarse por escrito al correo corporativo oficial.</li>
                            <li>Los acuerdos verbales o mensajes en redes sociales no tienen validez para modificar los términos de esta política.</li>
                            <li>Lingua Technologies Inc. responderá toda solicitud formal en un plazo máximo de 5 días hábiles.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Plazos y condiciones de reembolso</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Los reembolsos aprobados serán procesados en un plazo máximo de 15 días hábiles desde la confirmación oficial por parte de Lingua Technologies Inc.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            En casos donde el monto a reembolsar sea significativo o el flujo operativo de la empresa lo requiera, Lingua Technologies Inc. se reserva el derecho de fraccionar el reembolso en cuotas acordadas con el cliente, sin que esto implique incumplimiento de la presente política.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            En todo caso, el cliente será notificado del plan de pago antes de su ejecución y deberá confirmarlo por escrito.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones a esta política</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lingua Technologies Inc. se reserva el derecho de actualizar esta política en cualquier momento. Los cambios aplicarán a nuevas transacciones y serán comunicados con anticipación.
                        </p>
                    </section>

                    <section className="mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Contacto:</strong> soporte@linguax-ai.com
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