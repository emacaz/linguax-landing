import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import { PRO_ONBOARDING_TOTAL_STEPS } from './config';
import ProVoiceAnalyzer from './components/ProVoiceAnalyzer';
import { useProOnboarding } from './hooks/useProOnboarding';
import BridgeStep from './steps/BridgeStep';
import OfferStep from './steps/OfferStep';
import ProfileSelectionStep from './steps/ProfileSelectionStep';

const ProOnboardingPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const {
        currentStep,
        selectedProfile,
        setSelectedProfile,
        analysisResult,
        goToAnalyzer,
        handleAnalyzerComplete,
        goToOffer,
        goBackToProfile,
        goBackToAnalyzer,
        goBackToBridge,
    } = useProOnboarding();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.title = t('proOnboarding.pageTitle');
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute('content', t('proOnboarding.pageDescription'));
        }
    }, [i18n.language, t]);

    const currentStepIndex = {
        profile: 1,
        analyzer: 2,
        bridge: 3,
        offer: 4,
    }[currentStep];

    const renderCurrentStep = () => {
        if (currentStep === 'profile') {
            return (
                <ProfileSelectionStep
                    selectedProfile={selectedProfile}
                    onSelectProfile={setSelectedProfile}
                    onContinue={goToAnalyzer}
                />
            );
        }

        if (currentStep === 'analyzer' && selectedProfile) {
            return (
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ProVoiceAnalyzer
                        selectedProfile={selectedProfile}
                        onContinue={handleAnalyzerComplete}
                    />
                    <div className="mt-6 flex justify-center">
                        <button
                            type="button"
                            onClick={goBackToProfile}
                            className="text-gray-400 font-semibold hover:text-white transition-colors"
                        >
                            {t('proOnboarding.analyzer.backCta')}
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 'bridge' && selectedProfile) {
            return (
                <BridgeStep
                    analysisResult={analysisResult}
                    onContinue={goToOffer}
                    onBack={goBackToAnalyzer}
                />
            );
        }

        if (currentStep === 'offer' && selectedProfile) {
            return <OfferStep selectedProfile={selectedProfile} onBack={goBackToBridge} />;
        }

        return (
            <ProfileSelectionStep
                selectedProfile={selectedProfile}
                onSelectProfile={setSelectedProfile}
                onContinue={goToAnalyzer}
            />
        );
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
                        <span className="text-sm text-gray-400">
                            {t('proOnboarding.stepLabel', { current: currentStepIndex, total: PRO_ONBOARDING_TOTAL_STEPS })}
                        </span>
                    </div>
                </header>

                <main className="py-10 sm:py-20">
                    {renderCurrentStep()}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ProOnboardingPage;
