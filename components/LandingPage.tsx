import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import CTA from './CTA';
import Footer from './Footer';
import TrialModal from './TrialModal';

const LandingPage: React.FC = () => {
    const [isTrialModalOpen, setIsTrialModalOpen] = useState<boolean>(false);
    const { i18n, t } = useTranslation();
    const pricingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.title = t('page.title');
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute('content', t('page.description'));
        }
    }, [i18n.language, t]);

    const handleOpenTrialModal = () => setIsTrialModalOpen(true);
    const handleCloseTrialModal = () => setIsTrialModalOpen(false);
    const handleScrollToPricing = () => {
        pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-[#05050A] text-white">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <div className="relative w-full h-full">
                    <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-violet-900/40 rounded-full filter blur-[150px] opacity-60"></div>
                    <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-900/40 rounded-full filter blur-[150px] opacity-60"></div>
                </div>
            </div>
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero onOpenTrialModal={handleOpenTrialModal} />
                    <Features />
                    <HowItWorks />
                    <div ref={pricingRef}>
                        <Pricing onOpenTrialModal={handleOpenTrialModal} />
                    </div>
                    <CTA onOpenTrialModal={handleOpenTrialModal} />
                </main>
                <Footer onScrollToPricing={handleScrollToPricing} />
            </div>
            <TrialModal isOpen={isTrialModalOpen} onClose={handleCloseTrialModal} />
        </div>
    );
};

export default LandingPage;
