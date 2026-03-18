import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileOptionCard from '../components/ProfileOptionCard';
import { OnboardingProfile } from '../types';

interface ProfileSelectionStepProps {
    selectedProfile: OnboardingProfile | null;
    onSelectProfile: (profile: OnboardingProfile) => void;
    onContinue: () => void;
}

const ProfileSelectionStep: React.FC<ProfileSelectionStepProps> = ({
    selectedProfile,
    onSelectProfile,
    onContinue,
}) => {
    const { t } = useTranslation();

    return (
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
                    <ProfileOptionCard
                        title={t('proOnboarding.professional.title')}
                        description={t('proOnboarding.professional.description')}
                        isSelected={selectedProfile === 'professional'}
                        onSelect={() => onSelectProfile('professional')}
                    />

                    <ProfileOptionCard
                        title={t('proOnboarding.independent.title')}
                        description={t('proOnboarding.independent.description')}
                        isSelected={selectedProfile === 'independent'}
                        onSelect={() => onSelectProfile('independent')}
                    />
                </div>

                <p className="mt-6 text-sm text-gray-400">{t('proOnboarding.microcopy')}</p>

                <button
                    type="button"
                    onClick={onContinue}
                    disabled={!selectedProfile}
                    className="mt-6 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {t('proOnboarding.continueCta')}
                </button>
            </div>
        </section>
    );
};

export default ProfileSelectionStep;