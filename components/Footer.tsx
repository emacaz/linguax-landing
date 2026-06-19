
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { XIcon, LinkedInIcon } from './icons';

interface FooterProps {
    onScrollToPricing?: () => void;
    onOpenModal?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollToPricing, onOpenModal }) => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="text-gray-500 text-sm">
                    <p className="font-semibold tracking-wider uppercase">
                        {t('footer.badge')}
                    </p>
                    <p className="mt-4">
                        &copy; {currentYear} LinguaX. {t('footer.copyright')}
                    </p>
                </div>
                <div className="mt-6 flex justify-center items-center space-x-6">
                    <a
                        href="https://x.com/LinguaX_AI"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinguaX on X"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                    >
                        <XIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/linguax-ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinguaX on LinkedIn"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                    >
                        <LinkedInIcon />
                    </a>
                </div>
                <div className="mt-6 flex justify-center items-center space-x-6 text-sm">
                    {onScrollToPricing && (
                        <button
                            onClick={onScrollToPricing}
                            className="text-gray-500 hover:text-white transition-colors duration-300"
                        >
                            {t('header.pricing')}
                        </button>
                    )}
                    {onOpenModal && (
                        <button
                            onClick={onOpenModal}
                            className="text-gray-500 hover:text-white transition-colors duration-300"
                        >
                            {t('header.contact')}
                        </button>
                    )}
                    <a
                        href="https://app.linguax-ai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                    >
                        {t('header.login')}
                    </a>
                </div>
                <div className="mt-4 flex justify-center items-center space-x-6 text-sm">
                    <Link
                        to="/refund-policy-en"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                    >
                        {t('footer.legal.refundPolicyEN')}
                    </Link>
                    <Link
                        to="/refund-policy-es"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                    >
                        {t('footer.legal.refundPolicyES')}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
