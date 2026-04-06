export const PRO_ONBOARDING_TOTAL_STEPS = 4;

export const PRO_OFFER_TIMER_COOKIE = 'linguax_pro_offer_deadline';
export const PRO_OFFER_TIMER_DURATION_MS = 20 * 60 * 1000;
export const PRO_OFFER_TIMER_COOKIE_DAYS = 7;

export const PRO_ONBOARDING_PLANS = {
    monthly: {
        nameKey: 'proOnboarding.offer.plans.monthly.name',
        offerPriceKey: 'proOnboarding.offer.plans.monthly.offerPrice',
        regularPriceKey: 'proOnboarding.offer.plans.monthly.regularPrice',
        savingsKey: 'proOnboarding.offer.plans.monthly.savings',
        offerLink: 'https://buy.stripe.com/5kQ4gyazegTcdVHdP9aMU0t',
        regularLink: 'https://buy.stripe.com/9B6dR89va0Ueg3P4ezaMU0s',
    },
    annual: {
        nameKey: 'proOnboarding.offer.plans.annual.name',
        offerPriceKey: 'proOnboarding.offer.plans.annual.offerPrice',
        regularPriceKey: 'proOnboarding.offer.plans.annual.regularPrice',
        savingsKey: 'proOnboarding.offer.plans.annual.savings',
        offerLink: 'https://buy.stripe.com/00w4gyfTy9qKdVHeTdaMU0v',
        regularLink: 'https://buy.stripe.com/3cI9ASePucCW8BneTdaMU0u',
        featured: true,
    },
} as const;

export type ProOnboardingPlanKey = keyof typeof PRO_ONBOARDING_PLANS;