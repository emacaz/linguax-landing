import React from 'react';
import { useTranslation } from 'react-i18next';
import PracticeSimulatorDemo from '../components/PracticeSimulatorDemo';
import { AnalyzerResult } from '../types';

interface BridgeStepProps {
    analysisResult: AnalyzerResult | null;
    onContinue: () => void;
    onBack: () => void;
}

const BridgeStep: React.FC<BridgeStepProps> = ({
    analysisResult,
    onContinue,
    onBack,
}) => {
    const { t } = useTranslation();

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
                    {t('proOnboarding.bridge.eyebrow')}
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white whitespace-pre-line">
                    {t('proOnboarding.bridge.title')}
                </h1>
                {analysisResult && (
                    <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-100">
                        <span>{t('proOnboarding.bridge.scoreLabel')}</span>
                        <span className="font-semibold">{analysisResult.score}%</span>
                        <span className="text-violet-300">{analysisResult.qualitativeLabel}</span>
                    </div>
                )}
            </div>

            <div className="mt-12">
                <PracticeSimulatorDemo />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                    type="button"
                    onClick={onContinue}
                    className="inline-flex items-center justify-center px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                >
                    {t('proOnboarding.bridge.continueCta')}
                </button>
                <button
                    type="button"
                    onClick={onBack}
                    className="text-gray-400 font-semibold hover:text-white transition-colors"
                >
                    {t('proOnboarding.bridge.backCta')}
                </button>
            </div>
        </section>
    );
};

export default BridgeStep;