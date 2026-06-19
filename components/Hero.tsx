
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const VoiceWave: React.FC = () => (
    <div className="relative w-full max-w-2xl mx-auto h-48 flex items-center justify-center">
        <div className="absolute w-full h-px bg-violet-500/30 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet" className="absolute top-0 left-0">
            <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
            </defs>
            <path
                d="M 0 100 C 50 50, 150 150, 200 100 S 250 50, 300 100 S 350 150, 400 100 S 450 50, 500 100 S 550 150, 600 100 S 650 50, 700 100 S 750 150, 800 100"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                className="opacity-70 animate-[wave_6s_linear_infinite]"
            >
            </path>
             <path
                d="M 0 100 C 50 150, 150 50, 200 100 S 250 150, 300 100 S 350 50, 400 100 S 450 150, 500 100 S 550 50, 600 100 S 650 150, 700 100 S 750 50, 800 100"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="1"
                className="opacity-40 animate-[wave_8s_linear_infinite_reverse]"
            >
            </path>
        </svg>
        <style>{`
            @keyframes wave {
                from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
                to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
            }
        `}</style>
    </div>
);

const Hero: React.FC = () => {
    const { t } = useTranslation();
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [gdprChecked, setGdprChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'exists' | 'error'>('idle');

    const handleSubmit = async (e: { preventDefault(): void }) => {
        e.preventDefault();
        if (!gdprChecked || isLoading) return;
        setIsLoading(true);
        setSubmitStatus('idle');
        try {
            const res = await fetch(import.meta.env.VITE_CF_CREATE_TRIAL_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (res.status === 409) { setSubmitStatus('exists'); return; }
            if (!res.ok) { setSubmitStatus('error'); return; }
            setSubmitStatus('success');
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleOpenModal = () => {
        setEmail('');
        setGdprChecked(false);
        setSubmitStatus('idle');
        setIsEmailModalOpen(true);
    };

    return (
        <section className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">
                    {t('hero.title')}
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
                    {t('hero.subtitle')}
                </p>
                <div className="mt-10 flex flex-col items-center gap-3">
                    <button
                        onClick={handleOpenModal}
                        className="bg-violet-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-violet-600/30 hover:bg-violet-700 transition-all duration-300 transform hover:scale-105"
                    >
                        {t('hero.trialCta')}
                    </button>
                    <p className="text-sm text-gray-500">{t('hero.trialSubtext')}</p>
                </div>
                <div className="mt-15">
                    <VoiceWave />
                </div>
            </div>

            {isEmailModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsEmailModalOpen(false)}
                >
                    <div
                        className="relative bg-[#0F0F1A] border border-gray-800 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsEmailModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                            aria-label="Cerrar"
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold text-white mb-6">
                            {t('hero.emailModal.title')}
                        </h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('hero.emailModal.placeholder')}
                                required
                                autoFocus
                                className="w-full bg-[#05050A] border border-gray-700 text-white rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                            />
                            <label className="flex items-start gap-2 text-sm text-gray-400 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={gdprChecked}
                                    onChange={(e) => setGdprChecked(e.target.checked)}
                                    className="mt-0.5 accent-violet-500"
                                />
                                <span>
                                    Acepto recibir comunicaciones de LinguaX AI y el tratamiento de mis datos según la{' '}
                                    <a href="#" className="text-violet-400 hover:underline">Política de Privacidad</a>.
                                </span>
                            </label>
                            <button
                                type="submit"
                                disabled={!gdprChecked || isLoading}
                                className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-600/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? 'Enviando...' : t('hero.emailModal.submit')}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-400 text-sm text-center mt-2">
                                    Revisa tu email — te enviamos el acceso a LinguaX AI.
                                </p>
                            )}
                            {submitStatus === 'exists' && (
                                <p className="text-yellow-400 text-sm text-center mt-2">
                                    Ya tienes una cuenta.{' '}
                                    <a href="https://app.linguax-ai.com" className="underline">Entra desde aquí →</a>
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-400 text-sm text-center mt-2">
                                    Algo salió mal. Intenta de nuevo o escríbenos a hola@linguax-ai.com
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
