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
                            En Lingua Technologies Inc. creemos en entregar valor real desde el primer momento. Al realizar un pago, el cliente reconoce que está adquiriendo acceso a tecnología, conocimiento especializado o tiempo profesional reservado exclusivamente para él — activos que tienen un costo real para la empresa una vez asignados. El acceso a cualquier producto o servicio implica la aceptación expresa de esta política. Asimismo, al completar una compra, el cliente reconoce expresamente que el acceso al servicio o su ejecución comienza de forma inmediata tras la confirmación del pago. En la medida en que lo permita la legislación aplicable, el cliente renuncia con este acto a cualquier derecho de desistimiento o período de reflexión que pudiera corresponderle bajo la legislación local de su país — en línea con las excepciones reconocidas para servicios digitales y contenido profesional tanto bajo el derecho comercial de los Estados Unidos como en los marcos comerciales internacionales de amplia adopción.
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
                            <li>Los pagos de suscripción financian la infraestructura compartida que se aprovisiona con anticipación para cada ciclo de facturación — incluyendo capacidad de cómputo de IA, disponibilidad de plataforma y recursos del sistema reservados por cuenta activa. Este modelo de aprovisionamiento anticipado implica que los costos asociados a una suscripción se comprometen desde el inicio de cada periodo independientemente del nivel de uso real, lo que hace que los reembolsos a mitad de periodo sean estructuralmente incompatibles con el modelo operativo y financiero de la empresa.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Programas de capacitación privada</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Una vez confirmado el pago y reservado el espacio en la agenda, no se realizan reembolsos por cambio de opinión, desistimiento o circunstancias personales del cliente.</li>
                            <li>Los costos asociados a un programa de capacitación privada — incluyendo la coordinación y costo de oportunidad del instructor, la preparación personalizada de la sesión, la configuración del software para el perfil del cliente y la coordinación administrativa — son incurridos por Lingua Technologies Inc. en el momento de la reserva, no en el momento de la prestación. Estos costos son irrecuperables con independencia de la posterior cancelación o inasistencia del cliente, y constituyen la base de las restricciones de reembolso descritas en esta sección.</li>
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
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Procesamiento de reembolsos: plazos, condiciones y estructura de cuotas</h2>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.1 Procesamiento estándar</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Los reembolsos aprobados serán procesados en un plazo máximo de 15 días hábiles desde la confirmación oficial por escrito por parte de Lingua Technologies Inc. Todas las resoluciones de reembolso son definitivas y se comunican exclusivamente por escrito a través del canal de soporte oficial.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.2 Justificación corporativa del reembolso en cuotas</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Lingua Technologies Inc. opera bajo un modelo de recursos pre-comprometidos. Cuando se recibe un pago — ya sea por una suscripción o un programa de capacitación privada — la empresa asigna de inmediato capacidad de infraestructura, aprovisiona recursos de cómputo de IA, agenda tiempo profesional y activa flujos operativos en nombre de ese cliente. Estos costos se incurren en el momento de la compra, no en el momento del consumo del servicio. Esto es consistente con las prácticas contables estándar bajo US GAAP, según las cuales los costos de servicio se reconocen y comprometen en el momento de la asignación de recursos, con independencia de los niveles de consumo posteriores.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Por consiguiente, los reembolsos aprobados se desembolsan desde los ingresos operativos corrientes y no desde un fondo de depósito en garantía o reserva dedicada — una estructura financiera estándar entre empresas de software por suscripción (SaaS), proveedores de educación profesional y plataformas de servicios digitales en todo el mundo. Emitir reembolsos de cuantía elevada en un único pago puede afectar materialmente la capacidad de la empresa para mantener la prestación ininterrumpida del servicio al conjunto de sus clientes activos. El reembolso en cuotas no refleja ninguna incapacidad de pago, sino una práctica de gestión financiera responsable — utilizada por empresas consolidadas a nivel global — que garantiza que atender el reembolso de un cliente no comprometa la calidad y continuidad del servicio para el resto.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.3 Supuestos de aplicación del reembolso en cuotas</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Lingua Technologies Inc. se reserva el derecho de estructurar un reembolso aprobado como plan de cuotas programado en cualquiera de los siguientes supuestos:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li><strong>Suscripciones:</strong> cuando el importe reembolsable supere el equivalente a una (1) cuota mensual de suscripción de la cuenta afectada.</li>
                            <li><strong>Programas de capacitación privada:</strong> cuando el importe reembolsable corresponda a dos (2) o más sesiones no prestadas, o cuando se hubieran entregado materiales, acceso a software o recursos preparatorios al cliente antes de la cancelación.</li>
                            <li><strong>Cualquier reembolso aprobado</strong> cuyo importe total supere los USD $200 (o su equivalente en moneda local al tipo de cambio de la fecha de la transacción original).</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.4 Calendario de cuotas y garantías</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cuando aplique un plan de cuotas, Lingua Technologies Inc. garantiza las siguientes condiciones:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li>El reembolso total se abonará en un máximo de tres (5) cuotas.</li>
                            <li>El importe íntegro quedará liquidado en un plazo máximo de sesenta (180) días naturales desde la confirmación por escrito del cliente del plan de cuotas.</li>
                            <li>La primera cuota se emitirá dentro de los quince (15) días hábiles siguientes a la fecha de aprobación formal.</li>
                            <li>Las cuotas sucesivas se emitirán en intervalos no superiores a veinte (30) días naturales cada una.</li>
                            <li>No se aplicará ninguna comisión administrativa ni deducción sobre el importe aprobado del reembolso como resultado de la estructura de cuotas.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.5 Notificación y confirmación</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            El cliente será notificado por escrito del calendario de cuotas propuesto antes de que se emita ningún pago. El cliente deberá confirmar su aceptación por escrito en un plazo de cinco (5) días hábiles desde la recepción de la notificación. La falta de respuesta dentro de este plazo se interpretará como aceptación del plan propuesto, iniciándose el procesamiento en consecuencia. Lingua Technologies Inc. se compromete a mantener comunicación escrita activa con el cliente durante todo el proceso hasta la liquidación total del reembolso.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.6 Política sobre contracargos y reclamaciones ante terceros</h3>
                        <p className="text-gray-700 leading-relaxed">
                            La presentación de una disputa, contracargo (chargeback) o reclamación ante un procesador de pago, entidad bancaria o cualquier tercero antes de agotar el procedimiento oficial de reembolso establecido en esta política — y antes de recibir una respuesta escrita definitiva de Lingua Technologies Inc. — se considerará incumplimiento material de los términos acordados. Esto podrá dar lugar a: (i) suspensión inmediata del acceso a todos los servicios activos; (ii) pérdida de cualquier consideración de reembolso pendiente; y (iii) reclamación al cliente de los costos incurridos directamente por Lingua Technologies Inc. como consecuencia del proceso de contracargo, incluyendo comisiones de reversión del procesador y costos administrativos asociados. Lingua Technologies Inc. procurará siempre resolver las discrepancias de forma directa, justa y ágil a través de su canal oficial antes de que sea necesaria cualquier escalada ante terceros.
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
