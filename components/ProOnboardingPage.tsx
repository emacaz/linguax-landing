import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

type OnboardingProfile = 'professional' | 'independent';

const ProOnboardingPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [selectedProfile, setSelectedProfile] = useState<OnboardingProfile | null>(null);

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.title = t('proOnboarding.pageTitle');
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute('content', t('proOnboarding.pageDescription'));
        }
    }, [i18n.language, t]);

    const handleContinue = () => {
        if (!selectedProfile) {
            return;
        }

        navigate(`/pro?profile=${selectedProfile}#pricing`);
    };

    return (
        <div className="bg-[#05050A] text-white min-h-screen">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <div className="relative w-full h-full">
                    <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-violet-900/40 rounded-full filter blur-[150px] opacity-60"></div>
                    <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-900/40 rounded-full filter blur-[150px] opacity-60"></div>
                </div>
            </div>

            <div className="relative z-10">
                <header className="py-6">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <Link to="/pro" className="text-2xl font-extrabold tracking-tight text-white">
                            Lingua<span className="text-violet-500">X</span>-Pro
                        </Link>
                        <span className="text-sm text-gray-400">{t('proOnboarding.stepLabel')}</span>
                    </div>
                </header>

                <main className="py-10 sm:py-20">
                    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">
                                {t('proOnboarding.title')}
                            </h1>
                            <p className="mt-4 text-lg text-gray-400">{t('proOnboarding.subtitle')}</p>
                        </div>

                        <div className="mt-10 p-6 sm:p-8 border border-gray-800 rounded-2xl bg-[#0F0F1A]/60">
                            <p className="text-sm uppercase tracking-wider text-violet-400 font-semibold">
                                {t('proOnboarding.question')}
                            </p>

                            <div className="mt-5 grid sm:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setSelectedProfile('professional')}
                                    className={`text-left p-5 rounded-xl border transition-colors ${
                                        selectedProfile === 'professional'
                                            ? 'border-violet-500 bg-violet-900/30'
                                            : 'border-gray-700 bg-[#0A0A12]/40 hover:border-gray-500'
                                    }`}
                                >
                                    <p className="text-lg font-semibold text-white">{t('proOnboarding.professional.title')}</p>
                                    <p className="mt-1 text-sm text-gray-400">{t('proOnboarding.professional.description')}</p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setSelectedProfile('independent')}
                                    className={`text-left p-5 rounded-xl border transition-colors ${
                                        selectedProfile === 'independent'
                                            ? 'border-violet-500 bg-violet-900/30'
                                            : 'border-gray-700 bg-[#0A0A12]/40 hover:border-gray-500'
                                    }`}
                                >
                                    <p className="text-lg font-semibold text-white">{t('proOnboarding.independent.title')}</p>
                                    <p className="mt-1 text-sm text-gray-400">{t('proOnboarding.independent.description')}</p>
                                </button>
                            </div>

                            <p className="mt-6 text-sm text-gray-400">{t('proOnboarding.microcopy')}</p>

                            <button
                                type="button"
                                onClick={handleContinue}
                                disabled={!selectedProfile}
                                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {t('proOnboarding.continueCta')}
                            </button>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ProOnboardingPage;
