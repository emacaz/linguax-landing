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
        offerLink: 'https://buy.stripe.com/8x2dR84aQ9qK3h3cL5aMU0l',
        regularLink: 'https://buy.stripe.com/00wbJ06iYdH03h38uPaMU0j',
    },
    annual: {
        nameKey: 'proOnboarding.offer.plans.annual.name',
        offerPriceKey: 'proOnboarding.offer.plans.annual.offerPrice',
        regularPriceKey: 'proOnboarding.offer.plans.annual.regularPrice',
        savingsKey: 'proOnboarding.offer.plans.annual.savings',
        offerLink: 'https://buy.stripe.com/3cI5kC9va1Yi9Fr26raMU0m',
        regularLink: 'https://buy.stripe.com/8x2cN422IauOdVH12naMU0k',
        featured: true,
    },
} as const;

export type ProOnboardingPlanKey = keyof typeof PRO_ONBOARDING_PLANS;