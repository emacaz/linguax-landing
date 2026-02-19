import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CheckIcon, SecurityIcon, XIcon } from './icons';
import { useProOffers } from '../hooks/useProOffers';
import CountdownTimer from './CountdownTimer';

const ProPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { isLoading, offers } = useProOffers();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.title = t('proPage.pageTitle');
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute('content', t('proPage.pageDescription'));
        }
    }, [i18n.language, t]);

    const PainPoint = ({ text, icon }: { text: string, icon: React.ReactNode }) => (
        <li className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1 text-red-400/80">{icon}</div>
            <span className="text-gray-300">{text}</span>
        </li>
    );

    return (
        <div className="bg-[#05050A] text-white">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <div className="relative w-full h-full">
                    <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-violet-900/40 rounded-full filter blur-[150px] opacity-60"></div>
                    <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-900/40 rounded-full filter blur-[150px] opacity-60"></div>
                </div>
            </div>
            <div className="relative z-10">
                <header className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex justify-between items-center">
                            <Link to="/" className="cursor-pointer">
                                <span className="text-3xl font-extrabold tracking-tight text-white">
                                    Lingua<span className="text-violet-500">X</span>-Pro
                                </span>
                            </Link>
                        </nav>
                    </div>
                </header>

                <main>
                    {/* Section 1: Pain */}
                    <section className="py-24 sm:py-32 text-center">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">
                                {t('proPage.pain.title')}
                            </h1>
                            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
                                {t('proPage.pain.subtitle')}
                            </p>
                            <ul className="mt-10 max-w-md mx-auto text-left space-y-4">
                               <PainPoint text={t('proPage.pain.microPain1')} icon={<XIcon />} />
                               <PainPoint text={t('proPage.pain.microPain2')} icon={<XIcon />} />
                               <PainPoint text={t('proPage.pain.microPain3')} icon={<XIcon />} />
                               <PainPoint text={t('proPage.pain.microPain4')} icon={<XIcon />} />
                            </ul>
                        </div>
                    </section>

                    {/* Section 2: Differentiation */}
                    <section className="py-24 bg-[#0A0A12]/50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{t('proPage.differentiation.title')}</h2>
                                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{t('proPage.differentiation.subtitle')}</p>
                            </div>
                            <div className="mt-16 grid gap-8 md:grid-cols-3">
                                <div className="p-8 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                                    <h3 className="text-xl font-bold text-white">{t('proPage.differentiation.feature1.title')}</h3>
                                    <p className="mt-2 text-base text-gray-400">{t('proPage.differentiation.feature1.description')}</p>
                                </div>
                                <div className="p-8 border border-violet-800 rounded-2xl bg-[#0F0F1A]/50 ring-2 ring-violet-600">
                                    <h3 className="text-xl font-bold text-white">{t('proPage.differentiation.feature2.title')}</h3>
                                    <p className="mt-2 text-base text-gray-400">{t('proPage.differentiation.feature2.description')}</p>
                                </div>
                                <div className="p-8 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                                    <h3 className="text-xl font-bold text-white">{t('proPage.differentiation.feature3.title')}</h3>
                                    <p className="mt-2 text-base text-gray-400">{t('proPage.differentiation.feature3.description')}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Section 3: Result */}
                    <section className="py-24">
                         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{t('proPage.result.title')}</h2>
                            <div className="mt-12 space-y-8">
                                <blockquote className="p-6 border border-gray-800 rounded-xl bg-[#0A0A12]/50">
                                    <p className="text-lg text-gray-300 italic">"{t('proPage.result.testimonial1')}"</p>
                                </blockquote>
                                <blockquote className="p-6 border border-gray-800 rounded-xl bg-[#0A0A12]/50">
                                    <p className="text-lg text-gray-300 italic">"{t('proPage.result.testimonial2')}"</p>
                                </blockquote>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 & 5: Offers */}
                    <section className="py-24 bg-[#0A0A12]/50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                             {isLoading && <div className="text-center">Loading offers...</div>}
                             {!isLoading && offers && (
                                <>
                                    {/* Scholarships */}
                                    {offers.isScholarshipVisible && (
                                        <div className="max-w-3xl mx-auto text-center border-2 border-amber-400/50 bg-amber-900/20 p-8 rounded-2xl mb-16">
                                            <h3 className="text-2xl font-bold text-amber-300">{t('proPage.scholarships.title')}</h3>
                                            <p className="mt-4 text-gray-300">{t('proPage.scholarships.description', { slots: offers.scholarshipSlots })}</p>
                                            <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-amber-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-colors">
                                                {t('proPage.scholarships.cta', { slots: offers.scholarshipSlots })}
                                            </a>
                                        </div>
                                    )}

                                    {/* Pricing */}
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{t('proPage.pricing.title')}</h2>
                                    </div>
                                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
                                        {/* Monthly Plan */}
                                        <div className="flex flex-col p-8 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">{t('proPage.pricing.monthly.name')}</h3>
                                            <div className="mt-4">
                                                <span className="text-5xl font-extrabold text-white">{t('proPage.pricing.monthly.price')}</span>
                                                <span className="text-sm text-gray-500 ml-2 line-through">{t('proPage.pricing.monthly.originalPrice')}</span>
                                            </div>
                                            <div className="flex-grow"></div>
                                            <a href="https://buy.stripe.com/your-monthly-link" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full text-center bg-transparent border border-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                                                {t('proPage.pricing.monthly.cta')}
                                            </a>
                                        </div>

                                        {/* Annual Plan */}
                                        <div className="relative flex flex-col p-8 border border-violet-500 rounded-2xl bg-[#0F0F1A]/50 shadow-2xl shadow-violet-900/20">
                                            <div className="absolute top-0 -translate-y-1/2 bg-violet-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">{t('proPage.pricing.annual.tag')}</div>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-violet-400">{t('proPage.pricing.annual.name')}</h3>
                                            <div className="mt-4">
                                                <span className="text-5xl font-extrabold text-white">{t('proPage.pricing.annual.price')}</span>
                                                 <span className="text-sm text-gray-500 ml-2 line-through">{t('proPage.pricing.annual.originalPrice')}</span>
                                                <p className="text-violet-400 font-bold mt-1">{t('proPage.pricing.annual.equivalent')}</p>
                                            </div>
                                             <div className="flex-grow"></div>
                                            <a href="https://buy.stripe.com/your-annual-link" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full text-center bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-violet-600/30 hover:bg-violet-700 transition-all">
                                                {t('proPage.pricing.annual.cta')}
                                            </a>
                                        </div>
                                    </div>

                                     {/* Lifetime Offer */}
                                    {offers.isLifetimeVisible && (
                                        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-700">
                                            <div className="text-center">
                                                <h3 className="text-2xl font-bold text-white">{t('proPage.pricing.lifetime.title')}</h3>
                                                <p className="mt-2 text-gray-400">{t('proPage.pricing.lifetime.description')}</p>
                                                <div className="my-6">
                                                     <p className="text-sm text-gray-400 mb-2">{t('proPage.pricing.lifetime.offerEnds')}</p>
                                                    <CountdownTimer expiryTimestamp={offers.lifetimeEndDate} />
                                                </div>
                                                <a href="https://buy.stripe.com/your-lifetime-link" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-bold py-4 px-10 rounded-lg hover:bg-gray-200 transition-colors text-lg">
                                                    {t('proPage.pricing.lifetime.cta')} - {t('proPage.pricing.lifetime.price')}
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </>
                             )}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ProPage;