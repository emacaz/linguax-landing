export type OnboardingProfile = 'professional' | 'independent';

export type OnboardingStep = 'profile' | 'analyzer' | 'bridge' | 'offer';

export type AnalyzerScenario = 'pharma' | 'financial' | 'tech' | 'legal';

export interface AnalyzerResult {
	score: number;
	cadenceScore: number;
	qualitativeLabel: string;
	scenario: AnalyzerScenario;
	completenessRatio: number;
}
