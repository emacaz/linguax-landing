import { useState } from 'react';
import { OnboardingProfile } from '../types';

export const useProOnboarding = () => {
    const [selectedProfile, setSelectedProfile] = useState<OnboardingProfile | null>(null);

    const hasSelection = selectedProfile !== null;

    return {
        selectedProfile,
        setSelectedProfile,
        hasSelection,
    };
};
