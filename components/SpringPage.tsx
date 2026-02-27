import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CheckIcon, LinkedInIcon, SecurityIcon, XIcon } from './icons';

const FLASH_STRIPE_LINK = 'https://buy.stripe.com/28EaEW7n2cCWbNz3avaMU0g';
const REGULAR_STRIPE_LINK = 'https://buy.stripe.com/28E00icHm0Ue4l75iDaMU0h';
const OFFER_DEADLINE_ISO = '2026-02-28T16:59:59+01:00';
const INSTRUCTOR_NAME = 'Emanuel Castillo';
const INSTRUCTOR_IMAGE_URL = 'https://emanuelcastillo.com/static/images/profile-pic-2025.png';

const SpringPage: React.FC = () => {
    const [now, setNow] = useState<Date>(new Date());
    const pricingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.documentElement.lang = 'es';
        document.title = 'Curso Intensivo en Vivo – Primavera | Oferta Flash €59';
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute('content', '12 sesiones en vivo de 2 horas, recursos premium, feedback personalizado y certificado final. Oferta flash de 18 horas por €59.');
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const offerDeadline = useMemo(() => new Date(OFFER_DEADLINE_ISO), []);
    const isOfferActive = now.getTime() < offerDeadline.getTime();
    const currentLink = isOfferActive ? FLASH_STRIPE_LINK : REGULAR_STRIPE_LINK;

    const totalMs = Math.max(0, offerDeadline.getTime() - now.getTime());
    const hours = Math.floor(totalMs / (1000 * 60 * 60));
    const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalMs % (1000 * 60)) / 1000);

    const handleScrollToPricing = () => {
        pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCheckout = () => {
        window.open(currentLink, '_blank', 'noopener,noreferrer');
    };

    const ctaText = isOfferActive
        ? '¡Reserva tu plaza ahora por €59!'
        : 'Reserva tu plaza ahora por €300';

    return (
        <div className="bg-[#05050A] text-white">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <div className="relative w-full h-full">
                    <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-violet-900/40 rounded-full filter blur-[150px] opacity-60"></div>
                    <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-900/40 rounded-full filter blur-[150px] opacity-60"></div>
                </div>
            </div>

            <div className="relative z-10">
                <header className="py-6 border-b border-gray-800/40 bg-[#05050A]/70 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
                        <Link to="/" className="cursor-pointer">
                            <span className="text-3xl font-extrabold tracking-tight text-white">
                                Lingua<span className="text-violet-500">X</span>-Ai
                            </span>
                        </Link>
                        <button
                            onClick={handleCheckout}
                            className="bg-orange-500 text-black font-bold text-sm sm:text-base py-2.5 px-5 sm:px-7 rounded-lg hover:bg-orange-400 transition-colors"
                        >
                            {isOfferActive ? 'Reservar por €59' : 'Reservar por €300'}
                        </button>
                    </div>
                </header>

                <main>
                    <section className="py-20 sm:py-28">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-orange-500/40">
                                        Oferta Flash Primavera
                                    </p>
                                    <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
                                        Business English de 3 meses – 24 horas de contenido exclusivo por solo <span className="text-orange-400">€59</span> durante 18 horas
                                    </h1>
                                    <p className="mt-6 text-xl text-gray-300">
                                        Valor real <span className="line-through text-gray-500">€300</span> → Oferta limitada para las primeras <span className="text-orange-300 font-bold">20 plazas</span>
                                    </p>

                                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={currentLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-center bg-orange-500 text-black font-extrabold py-4 px-8 rounded-xl hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-700/30"
                                        >
                                            {ctaText}
                                        </a>
                                        <button
                                            onClick={handleScrollToPricing}
                                            className="text-center bg-transparent border border-gray-700 text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-colors"
                                        >
                                            Ver precio y plazas
                                        </button>
                                    </div>

                                    <div className="mt-6 p-4 rounded-xl border border-orange-500/40 bg-orange-900/20">
                                        <p className="text-xs uppercase tracking-wider text-orange-300 font-bold text-center sm:text-left">
                                            Tiempo restante para precio €59
                                        </p>
                                        <div className="mt-3 flex justify-center sm:justify-start gap-3">
                                            <div className="w-20 p-2 rounded-lg bg-[#0A0A12] border border-gray-800 text-center">
                                                <p className="text-2xl font-bold">{String(hours).padStart(2, '0')}</p>
                                                <p className="text-[10px] text-gray-400 uppercase">Horas</p>
                                            </div>
                                            <div className="w-20 p-2 rounded-lg bg-[#0A0A12] border border-gray-800 text-center">
                                                <p className="text-2xl font-bold">{String(minutes).padStart(2, '0')}</p>
                                                <p className="text-[10px] text-gray-400 uppercase">Min</p>
                                            </div>
                                            <div className="w-20 p-2 rounded-lg bg-[#0A0A12] border border-gray-800 text-center">
                                                <p className="text-2xl font-bold">{String(seconds).padStart(2, '0')}</p>
                                                <p className="text-[10px] text-gray-400 uppercase">Seg</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm text-gray-400">
                                        Oferta válida solo durante 18 horas o hasta agotar plazas.
                                    </p>
                                </div>

                                <div className="p-8 border border-gray-800 rounded-2xl bg-[#0F0F1A]/70">
                                    <h2 className="text-2xl font-bold text-white">Infografía del programa</h2>
                                    <div className="mt-6 p-4 rounded-xl bg-[#0A0A12] border border-gray-800 flex items-center gap-4">
                                        <img
                                            src={INSTRUCTOR_IMAGE_URL}
                                            alt={INSTRUCTOR_NAME}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-orange-400/70"
                                        />
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-gray-400">Instructor principal</p>
                                            <p className="text-lg font-bold text-white">{INSTRUCTOR_NAME}</p>
                                            <p className="text-sm text-orange-300">Sesiones en vivo + feedback personalizado</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-[#0A0A12] border border-gray-800">
                                            <p className="text-gray-400 text-sm">Duración</p>
                                            <p className="text-2xl font-extrabold text-white">3 meses</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-[#0A0A12] border border-gray-800">
                                            <p className="text-gray-400 text-sm">Sesiones en vivo</p>
                                            <p className="text-2xl font-extrabold text-white">12 sesiones</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-[#0A0A12] border border-gray-800">
                                            <p className="text-gray-400 text-sm">Contenido total</p>
                                            <p className="text-2xl font-extrabold text-white">24 horas</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-[#0A0A12] border border-gray-800">
                                            <p className="text-gray-400 text-sm">Valor real</p>
                                            <p className="text-2xl font-extrabold text-gray-400 line-through">€300</p>
                                            <p className="text-2xl font-extrabold text-orange-400">€59 hoy</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 p-4 rounded-xl bg-violet-900/20 border border-violet-700/40">
                                        <p className="text-violet-200 font-semibold">Incluye bonus premium:</p>
                                        <p className="text-gray-300 mt-1">Checklist de implementación, sesión privada corta y acceso a comunidad exclusiva.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-[#0A0A12]/60">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">¿Te suena familiar esta frustración?</h2>
                            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                                Inviertes tiempo en cursos largos, avanzas sin una guía real y al final no sabes si estás mejorando de verdad.
                                Este intensivo está diseñado para eliminar la dispersión y darte resultados claros en solo 3 meses.
                            </p>
                        </div>
                    </section>

                    <section className="py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">La solución: método intensivo, guiado y accionable</h2>
                                <p className="mt-4 text-lg text-gray-400">Todo lo que necesitas para avanzar con foco, feedback y resultados medibles.</p>
                            </div>

                            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    '12 sesiones de 2 horas → 24 horas de contenido intensivo en vivo.',
                                    'Recursos premium y plantillas descargables para aplicar desde el día 1.',
                                    'Soporte directo y feedback personalizado para corregir rápido.',
                                    'Certificado final para acreditar tu progreso profesional.',
                                    'Acceso a comunidad exclusiva para networking y seguimiento.',
                                    'Sistema práctico con ejercicios de implementación real entre sesiones.'
                                ].map((benefit) => (
                                    <div key={benefit} className="p-6 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-600/20 text-emerald-400">
                                            <CheckIcon className="w-6 h-6" />
                                        </div>
                                        <p className="mt-4 text-gray-200">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section ref={pricingRef} className="py-20 bg-[#0A0A12]/60">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Precio de lanzamiento</h2>
                                <p className="mt-4 text-gray-400">Tiempo restante para asegurar el precio €59</p>
                            </div>

                            <div className="mt-10 p-8 rounded-2xl border border-orange-500/40 bg-orange-900/20 text-center">
                                <p className="text-gray-400 text-lg">Precio regular</p>
                                <p className="text-4xl font-extrabold text-gray-500 line-through">€300</p>
                                <p className="mt-4 text-gray-300 text-lg">Precio actual</p>
                                <p className={`text-6xl font-extrabold ${isOfferActive ? 'text-orange-400' : 'text-red-400'}`}>
                                    {isOfferActive ? '€59' : '€300'}
                                </p>

                                <div className="mt-8 flex justify-center gap-4">
                                    <div className="w-24 p-3 rounded-xl bg-[#0A0A12] border border-gray-800">
                                        <p className="text-3xl font-bold">{String(hours).padStart(2, '0')}</p>
                                        <p className="text-xs text-gray-400 uppercase">Horas</p>
                                    </div>
                                    <div className="w-24 p-3 rounded-xl bg-[#0A0A12] border border-gray-800">
                                        <p className="text-3xl font-bold">{String(minutes).padStart(2, '0')}</p>
                                        <p className="text-xs text-gray-400 uppercase">Min</p>
                                    </div>
                                    <div className="w-24 p-3 rounded-xl bg-[#0A0A12] border border-gray-800">
                                        <p className="text-3xl font-bold">{String(seconds).padStart(2, '0')}</p>
                                        <p className="text-xs text-gray-400 uppercase">Seg</p>
                                    </div>
                                </div>

                                <p className="mt-8 text-orange-300 font-bold">Solo 20 plazas disponibles a este precio.</p>
                                

                                <a
                                    href={currentLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-block bg-orange-500 text-black font-extrabold py-4 px-10 rounded-xl hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-700/30"
                                >
                                    {ctaText}
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Bonus de lanzamiento incluidos</h2>
                                <p className="mt-4 text-lg text-gray-400">Más valor desde el primer día, sin coste adicional.</p>
                            </div>

                            <div className="mt-12 grid md:grid-cols-3 gap-6">
                                <div className="p-6 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                                    <h3 className="text-xl font-bold">Mini sesión privada</h3>
                                    <p className="mt-2 text-gray-300">Una sesión de enfoque individual para resolver tu principal bloqueo y definir plan de acción.</p>
                                </div>
                                <div className="p-6 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                                    <h3 className="text-xl font-bold">Checklist + plantilla premium</h3>
                                    <p className="mt-2 text-gray-300">Material descargable para preparar, ejecutar y medir tu progreso durante el programa.</p>
                                </div>
                                <div className="p-6 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                                    <h3 className="text-xl font-bold">Comunidad exclusiva</h3>
                                    <p className="mt-2 text-gray-300">Acceso a grupo privado para soporte entre sesiones, networking y motivación constante.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-20 bg-[#0A0A12]/60">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">No dejes pasar esta edición de primavera</h2>
                            <p className="mt-4 text-lg text-gray-300">Oferta válida solo durante 18 horas o hasta agotar plazas.</p>
                            <a
                                href={currentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-block bg-orange-500 text-black font-extrabold py-4 px-10 rounded-xl hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-700/30"
                            >
                                {ctaText}
                            </a>
                        </div>
                    </section>

                    <section className="py-20">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">Preguntas frecuentes</h2>
                            <div className="mt-10 space-y-4">
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#0F0F1A]/50">
                                    <h3 className="font-bold text-lg">¿Cuánto dura el curso?</h3>
                                    <p className="mt-2 text-gray-300">Dura 3 meses e incluye 12 sesiones en vivo de 2 horas cada una (24 horas totales).</p>
                                </div>
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#0F0F1A]/50">
                                    <h3 className="font-bold text-lg">¿Tendré grabaciones y materiales?</h3>
                                    <p className="mt-2 text-gray-300">Sí. Tendrás acceso a materiales premium y recursos descargables para reforzar lo aprendido.</p>
                                </div>
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#0F0F1A]/50">
                                    <h3 className="font-bold text-lg">¿Incluye feedback personalizado?</h3>
                                    <p className="mt-2 text-gray-300">Sí. Durante el programa recibirás soporte y feedback para acelerar resultados reales.</p>
                                </div>
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#0F0F1A]/50">
                                    <h3 className="font-bold text-lg">¿Recibo certificado final?</h3>
                                    <p className="mt-2 text-gray-300">Sí, al completar el itinerario recibirás tu certificado final de participación.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 border-t border-gray-800/60 bg-[#0A0A12]/70">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                <div>
                                    <h3 className="text-xl font-bold">Contacto y redes</h3>
                                    <p className="mt-2 text-gray-400">¿Dudas antes de reservar? Escríbenos y te orientamos en menos de 24h.</p>
                                    <div className="mt-4 flex items-center gap-4">
                                        <a href="https://x.com/LinguaX_AI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinguaX en X">
                                            <XIcon />
                                        </a>
                                        <a href="https://www.linkedin.com/company/linguax-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinguaX en LinkedIn">
                                            <LinkedInIcon />
                                        </a>
                                        <a href="mailto:soporte@linguax-ai.com" className="text-sm text-violet-300 hover:text-violet-200 font-semibold">soporte@linguax-ai.com</a>
                                    </div>
                                </div>

                                <div className="text-center p-6 rounded-2xl border border-emerald-700/40 bg-emerald-900/10">
                                    <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold">
                                        <SecurityIcon />
                                        <span>Pago seguro con Stripe</span>
                                    </div>
                                    <p className="mt-2 text-gray-300 text-sm">Checkout cifrado y protegido para una compra rápida y segura.</p>
                                    <p className="mt-3 text-xs text-gray-400">Precio actual enlazado automáticamente según estado del contador.</p>
                                </div>

                                <div className="text-center md:text-right">
                                    <p className="text-gray-300 mb-4">Impulsa tu siguiente nivel en esta edición.</p>
                                    <a
                                        href={currentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-orange-500 text-black font-extrabold py-3 px-8 rounded-xl hover:bg-orange-400 transition-all duration-300"
                                    >
                                        {ctaText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-10 text-center">
                        <Link to="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                            Volver al sitio principal
                        </Link>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default SpringPage;
