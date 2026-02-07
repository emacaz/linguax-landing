
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckIcon } from './icons';

interface PricingProps {
    onOpenModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
    const { t } = useTranslation();
    const [currency, setCurrency] = useState<'eur' | 'usd'>('eur');
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

    const plans: Array<'starter' | 'growth' | 'business' | 'enterprise'> = ['starter', 'growth', 'business', 'enterprise'];
    
    const prices = {
        starter: { eur: 79, usd: 93 },
        growth: { eur: 69, usd: 81 },
        business: { eur: 59, usd: 70 },
    };

    const renderPrice = (planKey: typeof plans[number]) => {
        if (planKey === 'enterprise') {
            return (
                <div className="mt-6 flex items-center" style={{ height: '7.5rem' }}>
                    <span className="text-3xl font-extrabold text-white">
                        {t('pricing.enterprise.price')}
                    </span>
                </div>
            );
        }

        const basePrice = prices[planKey][currency];
        const discount = billingCycle === 'annual' 
            ? (planKey === 'growth' ? 0.10 : planKey === 'business' ? 0.15 : 0)
            : 0;
        const finalPrice = Math.round(basePrice * (1 - discount));
        const currencySymbol = currency === 'eur' ? '€' : '$';

        return (
            <div className="mt-6" style={{ height: '7.5rem' }}>
                <span className="text-4xl font-extrabold text-white">
                    {currencySymbol}{finalPrice}
                </span>
                <span className="text-base font-medium text-gray-500"> {t('pricing.per_user_per_month')}</span>
                <p className="text-xs text-gray-400 h-4 mt-1">{billingCycle === 'annual' ? `(${t('pricing.billed_annually')})` : ''}&nbsp;</p>
            </div>
        )
    };

    const renderPlanCard = (planKey: typeof plans[number]) => {
        const isMostPopular = planKey === 'growth';
        const features = t(`pricing.${planKey}.features`, { returnObjects: true }) as string[];

        const cardClasses = `relative flex flex-col h-full p-8 border rounded-2xl bg-[#0F0F1A]/50 transition-all duration-300 ${
            isMostPopular ? 'border-violet-500 shadow-2xl shadow-violet-900/20' : 'border-gray-800'
        }`;
        
        const buttonClasses = `w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
            isMostPopular 
            ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 hover:bg-violet-700'
            : 'bg-transparent border border-gray-700 text-white hover:bg-gray-800'
        }`;

        return (
            <div key={planKey} className={cardClasses}>
                {isMostPopular && (
                    <div className="absolute top-0 -translate-y-1/2 bg-violet-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                        {t('pricing.mostPopular')}
                    </div>
                )}
                <div className="flex-grow flex flex-col">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-violet-400">{t(`pricing.${planKey}.name`)}</h3>
                        <p className="text-sm font-medium text-gray-400 mt-1">{t(`pricing.${planKey}.userCount`)}</p>
                        <p className="mt-4 text-gray-400 text-sm" style={{ height: '5rem' }}>{t(`pricing.${planKey}.valueProposition`)}</p>
                        {renderPrice(planKey)}
                    </div>
                    <ul className="space-y-4 text-gray-300 text-sm">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto pt-8">
                        <button onClick={onOpenModal} className={buttonClasses}>
                            {t(`pricing.${planKey}.cta`)}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-24 bg-[#0A0A12]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{t('pricing.title')}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{t('pricing.subtitle')}</p>
                </div>

                <div className="mt-12 flex justify-center items-center gap-4 flex-wrap">
                    <div className="flex items-center space-x-1 border border-gray-700 rounded-lg p-1 bg-[#0F0F1A]">
                        <button
                            onClick={() => setCurrency('eur')}
                            className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-200 ${currency === 'eur' ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            EUR (€)
                        </button>
                        <button
                            onClick={() => setCurrency('usd')}
                            className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-200 ${currency === 'usd' ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            USD ($)
                        </button>
                    </div>

                    <div className="flex items-center space-x-1 border border-gray-700 rounded-lg p-1 bg-[#0F0F1A]">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-200 ${billingCycle === 'monthly' ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            {t('pricing.monthly')}
                        </button>
                        <button
                            onClick={() => setBillingCycle('annual')}
                            className={`relative px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-200 ${billingCycle === 'annual' ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            {t('pricing.annually')}
                            <span className="absolute -top-2 -right-3 block transform translate-x-1/2 -translate-y-1/2 bg-violet-500/30 text-violet-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {t('pricing.save_annually')}
                            </span>
                        </button>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
                    {plans.map(plan => renderPlanCard(plan))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
