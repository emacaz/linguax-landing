import React from 'react';
import { useTranslation } from 'react-i18next';
import { PRO_ONBOARDING_PLANS, ProOnboardingPlanKey } from '../config';
import { usePersistentOfferTimer } from '../hooks/usePersistentOfferTimer';
import { OnboardingProfile } from '../types';

interface OfferStepProps {
    selectedProfile: OnboardingProfile;
    onBack: () => void;
}

const planKeys = Object.keys(PRO_ONBOARDING_PLANS) as ProOnboardingPlanKey[];

const OfferStep: React.FC<OfferStepProps> = ({ selectedProfile, onBack }) => {
    const { t } = useTranslation();
    const { timeLeft, hasExpired } = usePersistentOfferTimer();

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                    {t('proOnboarding.offer.eyebrow')}
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white whitespace-pre-line">
                    {t('proOnboarding.offer.title')}
                </h1>
                <p className="mt-5 text-lg text-gray-300 whitespace-pre-line">
                    {t('proOnboarding.offer.subtitle')}
                </p>
                <p className="mt-4 text-base text-amber-200 whitespace-pre-line">
                    {t('proOnboarding.offer.conditionText')}
                </p>
            </div>

            <div className="mt-10 rounded-[28px] border border-amber-400/30 bg-[linear-gradient(180deg,rgba(34,17,5,0.95),rgba(10,10,18,0.95))] p-6 sm:p-8 shadow-2xl shadow-amber-950/25">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                            {hasExpired ? t('proOnboarding.offer.timer.expiredLabel') : t('proOnboarding.offer.timer.activeLabel')}
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-white">
                            {hasExpired ? t('proOnboarding.offer.timer.expiredTitle') : t('proOnboarding.offer.timer.activeTitle')}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        {[
                            String(timeLeft.minutes).padStart(2, '0'),
                            String(timeLeft.seconds).padStart(2, '0'),
                        ].map((value, index) => (
                            <React.Fragment key={`${value}-${index}`}>
                                <div className="min-w-[96px] rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center">
                                    <div className="text-4xl font-mono font-bold text-white">{value}</div>
                                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                                        {index === 0 ? t('proOnboarding.offer.timer.minutes') : t('proOnboarding.offer.timer.seconds')}
                                    </div>
                                </div>
                                {index === 0 && <div className="text-3xl font-bold text-amber-300">:</div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {planKeys.map((planKey) => {
                    const plan = PRO_ONBOARDING_PLANS[planKey];
                    const currentHref = hasExpired ? plan.regularLink : plan.offerLink;
                    const currentPriceKey = hasExpired ? plan.regularPriceKey : plan.offerPriceKey;

                    return (
                        <div
                            key={planKey}
                            className={`relative rounded-[28px] border p-7 ${
                                plan.featured
                                    ? 'border-violet-500 bg-[linear-gradient(180deg,rgba(25,20,41,0.95),rgba(10,10,18,0.96))] shadow-2xl shadow-violet-950/35'
                                    : 'border-gray-800 bg-[#0F0F1A]/80'
                            }`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-violet-600 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                                    {t('proOnboarding.offer.featuredTag')}
                                </div>
                            )}
                            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                                {t(plan.nameKey)}
                            </p>
                            <div className="mt-5 flex items-end gap-3 flex-wrap">
                                <span className="text-5xl font-extrabold text-white">{t(currentPriceKey)}</span>
                                <span className="text-lg text-gray-500 line-through">{t(plan.regularPriceKey)}</span>
                            </div>
                            <p className="mt-3 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                                {hasExpired ? t('proOnboarding.offer.standardModeLabel') : t(plan.savingsKey)}
                            </p>
                            <p className="mt-5 text-sm text-gray-400">
                                {t(`proOnboarding.offer.plans.${planKey}.description.${selectedProfile}`)}
                            </p>
                            <a
                                href={currentHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 font-semibold transition-colors ${
                                    plan.featured
                                        ? 'bg-violet-600 text-white hover:bg-violet-700'
                                        : 'bg-white text-black hover:bg-gray-200'
                                }`}
                            >
                                {hasExpired
                                    ? t(`proOnboarding.offer.plans.${planKey}.expiredCta`)
                                    : t(`proOnboarding.offer.plans.${planKey}.offerCta`)}
                            </a>
                        </div>
                    );
                })}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {['diagnosis', 'plan', 'support'].map((itemKey) => (
                    <div key={itemKey} className="rounded-2xl border border-gray-800 bg-[#0F0F1A]/70 p-5 text-center">
                        <p className="text-base font-semibold text-white">
                            {t(`proOnboarding.offer.validation.items.${itemKey}.title`)}
                        </p>
                        <p className="mt-2 text-sm text-gray-400">
                            {t(`proOnboarding.offer.validation.items.${itemKey}.description`)}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    type="button"
                    onClick={onBack}
                    className="text-gray-400 font-semibold hover:text-white transition-colors"
                >
                    {t('proOnboarding.offer.backCta')}
                </button>
            </div>
        </section>
    );
};

export default OfferStep;