import { useState } from 'react';
import { AnalyzerResult, OnboardingProfile, OnboardingStep } from '../types';

export const useProOnboarding = () => {
    const [currentStep, setCurrentStep] = useState<OnboardingStep>('profile');
    const [selectedProfile, setSelectedProfile] = useState<OnboardingProfile | null>(null);
    const [analysisResult, setAnalysisResult] = useState<AnalyzerResult | null>(null);

    const hasSelection = selectedProfile !== null;

    const goToAnalyzer = () => {
        if (!selectedProfile) {
            return;
        }

        setCurrentStep('analyzer');
    };

    const handleAnalyzerComplete = (result: AnalyzerResult) => {
        setAnalysisResult(result);
        setCurrentStep('bridge');
    };

    const goToOffer = () => {
        setCurrentStep('offer');
    };

    const goBackToProfile = () => {
        setCurrentStep('profile');
    };

    const goBackToAnalyzer = () => {
        setCurrentStep('analyzer');
    };

    const goBackToBridge = () => {
        setCurrentStep('bridge');
    };

    return {
        currentStep,
        selectedProfile,
        setSelectedProfile,
        analysisResult,
        hasSelection,
        goToAnalyzer,
        handleAnalyzerComplete,
        goToOffer,
        goBackToProfile,
        goBackToAnalyzer,
        goBackToBridge,
    };
};
