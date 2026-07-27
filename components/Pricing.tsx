
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PricingProps {
    onOpenTrialModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenTrialModal }) => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-[#0A0A12]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{t('pricing.title')}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{t('pricing.subtitle')}</p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="flex flex-col p-8 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                            {t('pricing.monthly.name')}
                        </h3>
                        <div className="mt-4">
                            <span className="text-5xl font-extrabold text-white">
                                {t('pricing.monthly.price')}
                            </span>
                        </div>
                        <div className="flex-grow"></div>
                        <button
                            onClick={onOpenTrialModal}
                            className="mt-8 w-full text-center bg-transparent border border-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            {t('pricing.monthly.cta')}
                        </button>
                    </div>

                    <div className="relative flex flex-col p-8 border border-violet-500 rounded-2xl bg-[#0F0F1A]/50 shadow-2xl shadow-violet-900/20">
                        <div className="absolute top-0 -translate-y-1/2 bg-violet-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                            {t('pricing.annual.tag')}
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-violet-400">
                            {t('pricing.annual.name')}
                        </h3>
                        <div className="mt-4">
                            <span className="text-5xl font-extrabold text-white">
                                {t('pricing.annual.price')}
                            </span>
                            <p className="text-violet-400 font-bold mt-1">
                                {t('pricing.annual.equivalent')}
                            </p>
                        </div>
                        <div className="flex-grow"></div>
                        <button
                            onClick={onOpenTrialModal}
                            className="mt-8 w-full text-center bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-violet-600/30 hover:bg-violet-700 transition-all"
                        >
                            {t('pricing.annual.cta')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
